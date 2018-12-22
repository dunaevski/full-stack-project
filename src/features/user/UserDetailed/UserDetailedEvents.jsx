import React from "react";
import { Grid, Segment, Header, Menu, Card, Image } from "semantic-ui-react";

const UserDetailedEvents = () => {
  return (
    <Grid.Column width={12}>
      <Segment attached>
        <Header icon="calendar" content="События" />
        <Menu secondary pointing>
          <Menu.Item name="Все события" active />
          <Menu.Item name="Прошлые" />
          <Menu.Item name="Будущие" />
          <Menu.Item name="Оргранизатор событий" />
        </Menu>

        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src={"/assets/categoryImages/drinks.jpg"} />
            <Card.Content>
              <Card.Header textAlign="center">Event Title</Card.Header>
              <Card.Meta textAlign="center">
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>

          <Card>
            <Image src={"/assets/categoryImages/drinks.jpg"} />
            <Card.Content>
              <Card.Header textAlign="center">Event Title</Card.Header>
              <Card.Meta textAlign="center">
                28th March 2018 at 10:00 PM
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedEvents;
