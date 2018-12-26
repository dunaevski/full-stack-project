import React, { Component } from "react";
import { Segment, Item, Icon, List, Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";
import EventListAttendee from "./EventListAttendee";
import { objectToArray } from "../../../app/common/util/helpers";

class EventListItem extends Component {
  render() {
    const { event } = this.props; // Получем данные из копмонента через props
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/event/${event.id}`}>
                  {event.title}
                </Item.Header>
                <Item.Description>
                  Организатор:{" "}
                  <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
                </Item.Description>
                {event.cancelled && (
                  <Label
                    style={{ top: "-40px" }}
                    ribbon="right"
                    color="red"
                    content="Это событие отменено 😞"
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{" "}
            {format(event.date.toDate(), "ddd DD MMM YYYY", { locale: ru })} в{" "}
            {format(event.date.toDate(), "HH:mm")}
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              objectToArray(event.attendees).map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
        </Segment>

        <Segment clearing>
          <Button
            as={Link}
            to={`/event/${event.id}`}
            color="teal"
            floated="right"
            content="Просмотр"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
