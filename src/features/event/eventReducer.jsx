import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

// События
const initialState = [
  {
    id: "1",
    title: "Путешествие по Лондону",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Лондон, Великобритания",
    venue: "Лондонский Тауэр, Сент-Катарина и Ваппинг, Лондон",
    venueLatLng: {
      lat: 40.7484405,
      lng: -73.98566440000002
    },
    hostedBy: "Алекс",
    hostPhotoURL: "http://loremflickr.com/300/300/Animals",
    attendees: [
      {
        id: "a",
        name: "Алекс",
        photoURL: "http://loremflickr.com/300/300/Animals"
      },
      {
        id: "b",
        name: "Соер",
        photoURL: "http://loremflickr.com/300/300/Animal"
      }
    ]
  },
  {
    id: "2",
    title: "Поездка в Панч и Джуди Паб",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Лондон, Великобритания",
    venue: "Пунч и Джуди, улица Генриетта, Лондон, Великобритания",
    venueLatLng: {
      lat: 51.5118074,
      lng: -0.12300089999996544
    },
    hostedBy: "Соер",
    hostPhotoURL: "http://loremflickr.com/300/300/Animal",
    attendees: [
      {
        id: "b",
        name: "Соер",
        photoURL: "http://loremflickr.com/300/300/Animal"
      },
      {
        id: "a",
        name: "Алекс",
        photoURL: "http://loremflickr.com/300/300/Animals"
      }
    ]
  }
];

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)];
};

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ];
};

export const deleteEvent = (state, payload) => {
  return [...state.filter(event => event.id !== payload.eventId)];
};

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});
