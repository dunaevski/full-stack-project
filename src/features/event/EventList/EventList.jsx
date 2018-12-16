import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, deleteEvents } = this.props; // Получаем данные из компонента через props
    return (
      <div>
        {/* Передаёмe все данные из State через map  */}
        {events && events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvents={deleteEvents}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
