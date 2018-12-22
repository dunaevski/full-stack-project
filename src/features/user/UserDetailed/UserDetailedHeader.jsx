import React from "react";
import { Grid, Segment, Item, Header } from "semantic-ui-react";
import differenceInYears from "date-fns/difference_in_years";

const UserDetailedHeader = ({ profile }) => {
  let age;
  if (profile.dateOfBirth)
    age = differenceInYears(Date.now(), profile.dateOfBirth.toDate());
  else age = "Неизвестный возраст";

  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size="small"
              src={profile.photoURL || "/assets/user.png"}
            />
            <Item.Content verticalAlign="middle">
              <Header as="h1">{profile.displayName}</Header>
              <br />
              <Header as="h4">
                {profile.occupation || "Ничем не занят 😎"}
              </Header>
              <br />
              <Header as="h4">
                {age}, {profile.city || "Без определённого места жительства"}
              </Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;
