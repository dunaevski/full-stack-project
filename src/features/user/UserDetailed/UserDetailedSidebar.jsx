import React from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserDetailedSidebar = ({
  isCurrnetUser,
  followUser,
  unFollowUser,
  isFollowing
}) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrnetUser && (
          <Button
            as={Link}
            to="/settings"
            color="teal"
            fluid
            basic
            content="Редактировать"
          />
        )}
        {!isCurrnetUser && !isFollowing && (
          <Button
            onClick={followUser}
            color="teal"
            fluid
            basic
            content="Подписаться"
          />
        )}

        {!isCurrnetUser && isFollowing && (
          <Button
            onClick={unFollowUser}
            color="teal"
            fluid
            basic
            content="Отписаться"
          />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedSidebar;
