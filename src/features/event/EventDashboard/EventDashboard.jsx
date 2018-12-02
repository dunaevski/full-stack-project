import React, { Component } from "react"; // Добовление React
import { Grid, Button } from "semantic-ui-react"; // Добовление элементов из semantic-ui-react
import cuid from "cuid"; // Добовление пакета cuid для генрации ID
import EventList from "../EventList/EventList"; // Добовление комппонента EventList
import EventForm from "../EventFrom/EventForm"; // Добовление комппонента EventFrom

// // раньше
// var sum = function() {
//   return [].reduce.call(arguments, function(m, n) {
//     return m + n;
//   }, 0);
// }

// // сейчас
// var sum = (...args) => args.reduce((m, n) => m + n, 0);

// События
const eventsDashboard = [
  {
    id: "1",
    title: "Путешествие по Лондону",
    date: "2018-03-27",
    category: "культура",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Лондон, Великобритания",
    venue: "Лондонский Тауэр, Сент-Катарина и Ваппинг, Лондон",
    hostedBy: "Алекс",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Алекс",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Соер",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Поездка в Панч и Джуди Паб",
    date: "2018-03-28",
    category: "напитки",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "Лондон, Великобритания",
    venue: "Пунч и Джуди, улица Генриетта, Лондон, Великобритания",
    hostedBy: "Соер",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Соер",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Алекс",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDashboard, // Добавление в State событий
    isOpen: false, // Добавляем в State перекулючатель открытия и закрытия EventForm
    selectedEvent: null // Добавляем в State переменную в которую потом можно будет добовлять событие
  };

  // Метод отрытия EventForm
  handleFormOpen = () => {
    this.setState({
      // Изменение State при помощи setState
      selectedEvent: null,
      isOpen: true
    });
  };

  // Метод закрытия EventForm
  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  // Метод для изменения события в EvenList через EventForm
  handleUpdateEvent = updatedEvent => {
    // Передаём обновлённый объект события из EventForm
    this.setState({
      events: this.state.events.map(event => {
        // Получаем через функцию map событие
        if (event.id === updatedEvent.id)
          // Если id одинаковые
          return Object.assign({}, updatedEvent);
        // то копируем все значение через Object.assign в обновленное событие в EvenList
        else return event; // Если не одинаковые, возварщаем текущее событие
      }),
      isOpen: false, // Закрываем EventFrom
      selectedEvent: null // Обнуляем выбраное событие
    });
  };

  // Метод для добавления в EventFrom значений из выбраного события
  handleOpenEvent = eventToOpen => () => {
    // Передаём событие в метод
    this.setState({
      selectedEvent: eventToOpen, // Добавление в State переданное событие
      isOpen: true // Открываем EventFrom
    });
  };

  // Метод для создания события
  handleCreateEvent = newEvent => {
    // Передаём новое событие из EventForm
    newEvent.id = cuid(); // Генерируем ID
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent]; // Создание нового события ...this.state.events - данные с EventForm, newEvent - id
    this.setState({
      events: updatedEvents, // Добавление новое событие в  State
      isOpen: false
    });
  };

  // Удаление события из EventList
  handleDeleteEvent = eventId => () => {
    // Передаём значение ID из EventList
    const updatedEvents = this.state.events.filter(e => e.id !== eventId); // Делаем проверку события, чтобы ID не были равными
    this.setState({
      events: updatedEvents
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              deleteEvents={this.handleDeleteEvent} // Передаём метод в компонент
              onEventOpen={this.handleOpenEvent}
              events={this.state.events} // Передаём события из State
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleFormOpen} // По клику вызов функции handleFormOpen
              positive
              content="Создать Событие"
            />
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdateEvent} // Передаём метод в компонент
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleCancel={this.handleCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
