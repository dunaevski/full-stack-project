import React from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({ isCurrnetUser }) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrnetUser ? (
          <Button
            as={Link}
            to="/settings"
            color="teal"
            fluid
            basic
            content="Редактировать"
          />
        ) : (
          <Button color="teal" fluid basic content="Подписаться" />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
