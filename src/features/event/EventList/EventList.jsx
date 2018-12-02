import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvents } = this.props; // Получаем данные из компонента через props
    return (
      <div>
        {/* Передаём все данные из State через map  */}
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvents={deleteEvents}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
