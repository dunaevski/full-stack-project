import React from "react";
import { Segment, Image, Item, Header, Button, Label } from "semantic-ui-react";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";
import { Link } from "react-router-dom";

const eventImageStyle = {
  filter: "brightness(30%)"
};

const eventImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const EventDetailedHeader = ({
  event,
  isHost,
  isGoing,
  goingToEvent,
  loading,
  cancelGoingToEvent,
  authenticated,
  openModal
}) => {
  let eventDate;
  if (event.date) {
    eventDate = event.date.toDate();
  }
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${event.category}.jpg`}
          fluid
          style={eventImageStyle}
        />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={event.title}
                  style={{ color: "white" }}
                />
                <p>{format(eventDate, "ddd DD MMM YYYY", { locale: ru })}</p>
                <p>
                  Организатор: <strong>{event.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {!isHost && (
          <div>
            {isGoing && !event.cancelled && (
              <Button onClick={() => cancelGoingToEvent(event)}>
                Отписаться от события
              </Button>
            )}

            {!isGoing && authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => goingToEvent(event)}
                color="teal"
              >
                ПРИСОЕДИНИТЬСЯ К СОБЫТИЮ
              </Button>
            )}

            {!authenticated && !event.cancelled && (
              <Button
                loading={loading}
                onClick={() => openModal("UnauthModal")}
                color="teal"
              >
                ПРИСОЕДИНИТЬСЯ К СОБЫТИЮ
              </Button>
            )}
            {event.cancelled && !isHost && (
              <Label size="large" color="red" content="Это событие отменено" />
            )}
          </div>
        )}

        {isHost && (
          <Button as={Link} to={`/manage/${event.id}`} color="orange">
            Управление
          </Button>
        )}
      </Segment>
    </Segment.Group>
  );
};

export default EventDetailedHeader;
