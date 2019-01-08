import {
  INCREMENT_CONUTER,
  DECREMENT_CONUTER,
  COUNTER_ACTION_STARTED,
  COUNTER_ACTION_FINISHED
} from "./testConstants";
import firebase from "../../app/config/firebase";

export const incrementCounter = () => {
  return {
    type: INCREMENT_CONUTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_CONUTER
  };
};

export const startCounterAction = () => {
  return {
    type: COUNTER_ACTION_STARTED
  };
};

export const finishCounterAction = () => {
  return {
    type: COUNTER_ACTION_FINISHED
  };
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: INCREMENT_CONUTER });
    dispatch(finishCounterAction());
  };
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(startCounterAction());
    await delay(1000);
    dispatch({ type: DECREMENT_CONUTER });
    dispatch(finishCounterAction());
  };
};

export const testPremission = () => async (dispatch, getState) => {
  const firestore = firebase.firestore();
  try {
    let userDocRef = await firestore
      .collection("users")
      .doc("ne2guvQSGzdVjZGGd0JSGIDAIvo2");
    userDocRef.update({
      displayName: "testing"
    });
  } catch (error) {
    console.log(error);
  }
};
