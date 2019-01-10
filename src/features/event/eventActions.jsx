import { toastr } from "react-redux-toastr";
import { FETCH_EVENT } from "./eventConstants";
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from "../async/asyncActions";
import moment from "moment";
import { createNewEvent } from "../../app/common/util/helpers";
import firebase from "../../app/config/firebase";
import compareAsc from "date-fns/compare_asc";

export const createEvent = event => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    const displayName = getState().firebase.profile.displayName;
    let newEvent = createNewEvent(user, photoURL, displayName, event);
    try {
      let createdEvent = await firestore.add(`events`, newEvent);
      await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        eventDate: event.date,
        host: true
      });
      toastr.success("Успех!", "Событие создано 👍");
    } catch (error) {
      toastr.error("Упс...", "Что-то пошло не так 😌");
    }
  };
};

export const updateEvent = event => {
  return async (dispatch, getState) => {
    dispatch(asyncActionStart());
    const firestore = firebase.firestore();
    if (event.date !== getState().firestore.ordered.events[0].date) {
      event.date = moment(event.date).toDate();
    }
    try {
      let eventDocRef = firestore.collection("events").doc(event.id);
      let dateEqual = compareAsc(
        getState().firestore.ordered.events[0].date.toDate(),
        event.date
      );
      if (dateEqual !== 0) {
        let batch = firestore.batch();
        await batch.update(eventDocRef, event);

        let eventAttendeeRef = firestore.collection("event_attendee");
        let eventAttendeeQuery = await eventAttendeeRef.where(
          "eventId",
          "==",
          event.id
        );
        let eventAttendeeQuerySnap = await eventAttendeeQuery.get();

        for (let i = 0; i < eventAttendeeQuerySnap.docs.length; i++) {
          let eventAttendeeDocsRef = await firestore
            .collection("event_attendee")
            .doc(eventAttendeeQuerySnap.docs[i].id);
          await batch.update(eventAttendeeDocsRef, {
            eventDate: event.date
          });
        }
        await batch.commit();
      } else {
        await eventDocRef.update(event);
      }
      dispatch(asyncActionFinished());
      toastr.success("Успех!", "Событие изменено 👍");
    } catch (error) {
      dispatch(asyncActionError());
      toastr.error("Упс...", "Что-то пошло не так 😌");
    }
  };
};

export const cancelToggle = (cancelled, eventId) => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const message = cancelled
    ? "Вы уверены, что хотите отменить событие?"
    : "Событие будет повторно созданно, вы уверены?";
  try {
    toastr.confirm(message, {
      onOk: () =>
        firestore.update(`events/${eventId}`, {
          cancelled: cancelled
        })
    });
  } catch (error) {
    console.log(error);
  }
};

export const getEventsForDashboard = lastEvent => async (
  dispatch,
  getState
) => {
  let today = new Date(Date.now());
  const firestore = firebase.firestore();
  const eventsRef = firestore.collection("events");
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastEvent &&
      (await firestore
        .collection("events")
        .doc(lastEvent.id)
        .get());
    let query;

    lastEvent
      ? (query = eventsRef
          .where("date", ">=", today)
          .orderBy("date")
          .startAfter(startAfter)
          .limit(2))
      : (query = eventsRef
          .where("date", ">=", today)
          .orderBy("date")
          .limit(2));

    let querySnap = await query.get();

    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinished());
      return querySnap;
    }

    let events = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      events.push(evt);
    }
    dispatch({ type: FETCH_EVENT, payload: { events } });
    dispatch(asyncActionFinished());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const addEventComment = (eventId, values, parentId) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const profile = getState().firebase.profile;
  const user = firebase.auth().currentUser;
  let newComment = {
    parentId: parentId,
    displayName: profile.displayName,
    photoURL: profile.photoURL || "/assets/user.png",
    uid: user.uid,
    text: values.comment,
    date: Date.now()
  };
  try {
    await firebase.push(`event_chat/${eventId}`, newComment);
  } catch (error) {
    console.log(error);
    toastr.error("Упс...", "Что-то пошло не так 😌");
  }
};
