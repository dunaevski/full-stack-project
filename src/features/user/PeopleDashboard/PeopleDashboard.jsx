import React, { Component } from "react";
import { Grid, Segment, Header, Card } from "semantic-ui-react";
import PersonCard from "./PersonCard";
import { peopleFollowQuery } from "../userQueries";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux"; // Добовляем connect Redux

const mapState = (state, ownProps) => {
  
  return {
    auth: state.firebase.auth,
    followers: state.firestore.ordered.followers,
    following: state.firestore.ordered.following
  };
};

class PeopleDashboard extends Component {
  render() {
    const { followers, following } = this.props;

    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment>
            <Header dividing content="Люди подписанные на меня" />
            <Card.Group itemsPerRow={8} stackable>
              {followers &&
                followers.map(user => <PersonCard key={user.id} user={user} />)}
            </Card.Group>
          </Segment>
          <Segment>
            <Header dividing content="Люди на которых я подписан" />
            <Card.Group itemsPerRow={8} stackable>
              {following &&
                following.map(user => <PersonCard key={user.id} user={user} />)}
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default compose(
  connect(mapState),
  firestoreConnect((auth) => peopleFollowQuery(auth))
)(PeopleDashboard);
