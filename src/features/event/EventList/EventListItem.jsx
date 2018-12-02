import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, onEventOpen, deleteEvents } = this.props; // Получем данные из копмонента через props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Опубликованно <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={deleteEvents(event.id)} // Вызов функции по кнопке и передача ID
            as="a"
            color="red"
            floated="right"
            content="Удалить"
          />
          <Button
            onClick={onEventOpen(event)} // Вызов функции по кнопке и передача всех данных
            as="a"
            color="teal"
            floated="right"
            content="Далее"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
