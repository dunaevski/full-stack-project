import React from "react";
import { Segment } from "semantic-ui-react";
import { Map, Marker } from "yandex-map-react";

const EventDetailedMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  return (
    <Segment attached="bottom" style={{padding: 0}}>
      <Map
        onAPIAvailable={function() {
          console.log("API loaded");
        }}
       style={{height: '100px', width: '100%'}}
        center={center}
        zoom={zoom}
      >
        <Marker lat={lat} lon={lng} />
      </Map>
    </Segment>
  );
};

export default EventDetailedMap;
