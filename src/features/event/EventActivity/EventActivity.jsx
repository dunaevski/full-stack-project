import React from "react";
import { Header, Segment } from "semantic-ui-react";

const EventActivity = () => {
  return (
    <div>
      <Header attached="top" content="Последняя Активность" />
      <Segment attached>
        <p>Последняя Активность</p>
      </Segment>
    </div>
  );
};

export default EventActivity;
