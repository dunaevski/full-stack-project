import React, { Component } from "react";
import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

class UserDetailedPage extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image
                  avatar
                  size="small"
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                />
                <Item.Content verticalAlign="middle">
                  <Header as="h1">Имя</Header>
                  <br />
                  <Header as="h4">Род занятий</Header>
                  <br />
                  <Header as="h4">27, Lives in London, UK</Header>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <Grid columns={2}>
              <Grid.Column width={10}>
                <Header icon="smile" content="Подробная информация" />
                <p>
                  Я: <strong>Occupation Placeholder</strong>
                </p>
                <p>
                  Место рождения: <strong>United Kingdom</strong>
                </p>
                <p>
                  Пользователь с: <strong>28th March 2018</strong>
                </p>
                <p>Description of user</p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header icon="heart outline" content="Интересы" />
                <List>
                  <Item>
                    <Icon name="heart" />
                    <Item.Content>Interest 1</Item.Content>
                  </Item>
                  <Item>
                    <Icon name="heart" />
                    <Item.Content>Interest 2</Item.Content>
                  </Item>
                  <Item>
                    <Icon name="heart" />
                    <Item.Content>Interest 3</Item.Content>
                  </Item>
                </List>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment>
            <Button color="teal" fluid basic content="Редактировать" />
          </Segment>
        </Grid.Column>

        <Grid.Column width={12}>
          <Segment attached>
            <Header icon="image" content="Фото" />

            <Image.Group size="small">
              <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
              <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
              <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
              <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
            </Image.Group>
          </Segment>
        </Grid.Column>

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
      </Grid>
    );
  }
}

export default UserDetailedPage;
