import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux"; // Добовляем connect Redux
import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedInfo from "./UserDetailedInfo";
import UserDetailedPhoto from "./UserDetailedPhoto";
import UserDetailedEvents from "./UserDetailedEvents";
import UserDetailedSidebar from "./UserDetailedSidebar";
import { userDetailedQuery } from "../userQueries";
import LoadingComonent from "../../../app/layout/LoadingComonent";
import { getUserEvents } from "../userActions";

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};

  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    events: state.events,
    eventsLoading: state.async.loading,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    showPhotos: state.firestore.data.photos,
    requesting: state.firestore.status.requesting
  };
};

const actions = {
  getUserEvents
};

class UserDetailedPage extends Component {

  async componentDidMount() {
    let events = await this.props.getUserEvents(this.props.userUid)
    console.log(events);
  }

  changeTab = (e,data) => {
    this.props.getUserEvents(this.props.userUid, data.activeIndex)
    
  }

  render() {
    const { profile, photos, showPhotos, auth, match, requesting, events, eventsLoading } = this.props;
    const isCurrnetUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a === true);

    if (loading) return <LoadingComonent inverted={true} />;

    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedInfo profile={profile} />
        <UserDetailedSidebar isCurrnetUser={isCurrnetUser} />
        {showPhotos && <UserDetailedPhoto profile={profile} photos={photos} />}
        <UserDetailedEvents events={events} eventsLoading={eventsLoading} changeTab={this.changeTab}/>
      </Grid>
    );
  }
}

export default compose(
  connect(
    mapState,
    actions
  ),
  firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailedPage);
