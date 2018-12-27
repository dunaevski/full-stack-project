import React, { Component } from "react";
import EventListItem from "./EventListItem";
import InfiniteScroll from "react-infinite-scroller";

class EventList extends Component {
  render() {
    const { events, getNextEvents, loading, moreEvents } = this.props; // Получаем данные из компонента через props
    return (
      <div>
        {events && events.length !== 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={getNextEvents}
            hasMore={!loading && moreEvents}
            initialLoad={false}
          >
            {/* Передаёмe все данные из State через map  */}
            {events &&
              events.map(event => (
                <EventListItem key={event.id} event={event} />
              ))}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default EventList;
