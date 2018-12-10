import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChats from "./EventDetailedChats";
import EventDetailedSidebar from "./EventDetailedSidebar";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0)
    event = state.events.filter(event => event.id === eventId)[0];

  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <div>
      <Grid>
        <Grid.Column width={11}>
          <EventDetailedHeader event={event} />
          <EventDetailedInfo event={event} />
          <EventDetailedChats />
        </Grid.Column>
        <Grid.Column width={5}>
          <EventDetailedSidebar attendees={event.attendees} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default connect(mapState)(EventDetailedPage);