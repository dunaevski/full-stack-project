import React from "react";
import {
  Grid,
  Segment,
  Header,
  Card,
  Image,
  Tab
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";

const panes = [
  { menuItem: "Все", pane: { key: "allEvents" } },
  { menuItem: "Прошлые", pane: { key: "pastEvents" } },
  { menuItem: "Будущие", pane: { key: "futureEvents" } },
  { menuItem: "Оргранизатор", pane: { key: "hosted" } }
];

const UserDetailedEvents = ({ events, eventsLoading, changeTab }) => {
  return (
    <Grid.Column width={12}>
      <Segment attached loading={eventsLoading}>
        <Header icon="calendar" content="События" />
        <Tab onTabChange={(e, data) => changeTab(e, data)} panes={panes} menu={{ secondary: true, pointing: true }} />
        <br />
        <Card.Group itemsPerRow={5}>
          {events &&
            events.map(event => (
              <Card as={Link} to={`/event/${event.id}`} key={event.id}>
                <Image src={`/assets/categoryImages/${event.category}.jpg`} />
                <Card.Content>
                  <Card.Header textAlign="center">{event.title}</Card.Header>
                  <Card.Meta textAlign="center">
                    <div>
                      {format(
                        event.date && event.date.toDate(),
                        "DD MMMM YYYY",
                        {
                          locale: ru
                        }
                      )}
                    </div>
                    <div>
                      {format(event.date && event.date.toDate(), "hh:mm", {
                        locale: ru
                      })}
                    </div>
                  </Card.Meta>
                </Card.Content>
              </Card>
            ))}
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedEvents;
