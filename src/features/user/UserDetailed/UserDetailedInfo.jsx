import React from "react";
import { Grid, Segment, Header, Item, Icon, List } from "semantic-ui-react";
import format from "date-fns/format";
import ru from "date-fns/locale/ru";

const UserDetailedInfo = ({ profile }) => {
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header icon="smile" content="Подробная информация" />
            <p>
              Я, <strong>{profile.occupation || "Ничем не занят 😎"}</strong>
            </p>
            <p>
              Место рождения: <strong>{profile.city || "Default City"}</strong>
            </p>
            <p>
              Пользователь с{" "}
              <strong>
                {profile.createdAt === undefined
                  ? ""
                  : format(profile.createdAt.toDate(), "DD MMMM YYYY", {
                      locale: ru
                    })}
              </strong>
            </p>
            <p>{profile.about}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon="heart outline" content="Интересы" />
            {profile.interests === undefined
              ? "Нет интересов 🤭"
              : profile.interests.map((interest, index) => (
                  <Item key={index}>
                    <Icon name="heart" />
                    <Item.Content>{interest}</Item.Content>
                  </Item>
                ))}
            <List />
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedInfo;
