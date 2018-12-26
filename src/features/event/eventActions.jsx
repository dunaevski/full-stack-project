import { toastr } from "react-redux-toastr";
import { DELETE_EVENT, FETCH_EVENT } from "./eventConstants";
import {
  asyncActionStart,
  asyncActionFinished,
  asyncActionError
} from "../async/asyncActions";
import moment from "moment";
import { fetchSampleData } from "../../app/data/mockApi";
import { createNewEvent } from "../../app/common/util/helpers";

export const fetchEvent = events => {
  return {
    type: FETCH_EVENT,
    payload: events
  };
};

export const createEvent = event => {
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = firestore.auth().currentUser;
    const photoURL = getState().firebase.profile.photoURL;
    let NewEvent = createNewEvent(user, photoURL, event);

    try {
      let createdEvent = await firestore.add(`events`, NewEvent);
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
  return async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    if (event.date !== getState().firestore.ordered.events[0].date) {
      event.date = moment(event.date).toDate();
    }
    try {
      await firestore.update(`events/${event.id}`, event);
      toastr.success("Успех!", "Событие изменено 👍");
    } catch (error) {
      toastr.error("Упс...", "Что-то пошло не так 😌");
    }
  };
};

export const cancelToggle = (cancelled, eventId) => async (
  dispatch,
  getStatem,
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

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
      eventId
    }
  };
};

export const loadEvents = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let events = await fetchSampleData();
      dispatch(fetchEvent(events));
      dispatch(asyncActionFinished());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError());
    }
  };
};
