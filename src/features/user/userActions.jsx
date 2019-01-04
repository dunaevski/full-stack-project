import moment from "moment";
import cuid from "cuid";
import { toastr } from "react-redux-toastr";
import { FETCH_EVENT } from "../event/eventConstants";
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from "../async/asyncActions";
import firebase from "../../app/config/firebase";

export const updateProfile = user => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const { isLoaded, isEmpty, ...updatedUser } = user;
  if (updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
    updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
  }

  try {
    await firebase.updateProfile(updatedUser);
    toastr.success("Ура 🎉", "Профиль был изменен 👍");
  } catch (error) {
    console.log(error);
  }
};

export const uploadProfileImage = (file, fileName) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const path = `${user.uid}/user_image`;
  const imageName = cuid();
  const options = {
    name: imageName
  };

  try {
    dispatch(asyncActionStart());
    // Загрузить файл в firebase storage
    let uploadedFile = await firebase.uploadFile(path, file, null, options);
    // Получить URL картинки
    let downloadURL = await uploadedFile.uploadTaskSnapshot.downloadURL;
    // Получить userdoc
    let userDoc = await firestore.get(`users/${user.uid}`);
    // Проверить есть ли у пользователя фото если нет загрузить
    if (!userDoc.data().photoURL) {
      await firebase.updateProfile({
        photoURL: downloadURL
      });
      await user.updateProfile({
        photoURL: downloadURL
      });
    }
    // Добавить новое фото в коллекцию
    await firestore.add(
      {
        collection: "users",
        doc: user.uid,
        subcollections: [{ collection: "photos" }]
      },
      {
        name: imageName,
        url: downloadURL
      }
    );
    dispatch(asyncActionFinished());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
    throw new Error("Houston, we have a problem with upload");
  }
};

export const deletePhoto = photo => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;

  try {
    await firebase.deleteFile(`${user.uid}/user_image/${photo.name}`);
    await firestore.delete({
      collection: "users",
      doc: user.uid,
      subcollections: [{ collection: "photos", doc: photo.id }]
    });
  } catch (error) {
    console.log(error);
    throw new Error("Houston, we have a problem with delete");
  }
};

export const setMainPhoto = photo => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  try {
    return await firebase.updateProfile({
      photoURL: photo.url
    });
  } catch (error) {
    console.log(error);
    throw new Error("Houston, we have a problem set photo");
  }
};

export const goingToEvent = event => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  const photoURL = getState().firebase.profile.photoURL;
  const attendee = {
    going: true,
    joinDate: Date.now(),
    photoURL: photoURL || "/assets/user.png",
    displayName: getState().firebase.profile.displayName,
    host: false
  };
  try {
    await firestore.update(`events/${event.id}`, {
      [`attendees.${user.uid}`]: attendee
    });
    await firestore.set(`event_attendee/${event.id}_${user.uid}`, {
      eventId: event.id,
      userUid: user.uid,
      eventDate: event.date,
      host: false
    });
    toastr.success("Ура 🎉", "Вы подписались на событие");
  } catch (error) {
    console.log(error);
    toastr.error("Упс...", "У нас проблемы с присоединением");
  }
};

export const cancelGoingToEvent = event => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  try {
    await firestore.update(`events/${event.id}`, {
      [`attendees.${user.uid}`]: firestore.FieldValue.delete()
    });
    await firestore.delete(`event_attendee/${event.id}_${user.uid}`);
    toastr.success("Ура 🎉", "Вы отписались от события");
  } catch (error) {
    console.log(error);
    toastr.error("Упс...", "У нас проблемы с отпиской");
  }
};

export const getUserEvents = (userUid, activeTab) => async (
  dispatch,
  getState
) => {
  dispatch(asyncActionStart());
  const firestore = firebase.firestore();
  const today = new Date(Date.now());
  let eventsRef = firestore.collection("event_attendee");
  let query;
  switch (activeTab) {
    case 1: // Прошлые события
      query = eventsRef
        .where("userUid", "==", userUid)
        .where("eventDate", "<=", today)
        .orderBy("eventDate", "desc");
      break;
    case 2: // Будущие события
      query = eventsRef
        .where("userUid", "==", userUid)
        .where("eventDate", ">=", today)
        .orderBy("eventDate");
      break;
    case 3: // Организатор событий
      query = eventsRef
        .where("userUid", "==", userUid)
        .where("host", "==", true)
        .orderBy("eventDate", "desc");
      break;
    default:
      query = eventsRef
        .where("userUid", "==", userUid)
        .orderBy("eventDate", "desc");
  }
  try {
    let querySnap = await query.get();
    let events = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = await firestore
        .collection("events")
        .doc(querySnap.docs[i].data().eventId)
        .get();
      events.push({ ...evt.data(), id: evt.id });
    }

    dispatch({ type: FETCH_EVENT, payload: { events } });

    dispatch(asyncActionFinished());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

// Пользователь подписываеться на людей
export const follow = profile => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser;
  try {
    await firestore.set(
      {
        collection: "users",
        doc: user.uid,
        subcollections: [{ collection: `following`, doc: profile.id }]
      },
      {
        city: profile.city || "Без определённого места жительства",
        displayName: profile.displayName,
        photoURL: profile.photoURL || "/assets/user.png"
      }
    );
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
    throw new Error("Houston, we have a problem with upload");
  }
};

// Пользователь отписывается от людей
export const unFollow = profile => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const user = firestore.auth().currentUser
  try {
    await firestore.delete(
      {
        collection: "users",
        doc: user.uid,
        subcollections: [{ collection: `following`, doc: profile.id }]
      }
    );
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
    throw new Error("Houston, we have a problem with upload");
  }
};