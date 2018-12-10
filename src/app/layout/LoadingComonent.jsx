import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComonent = ({ inverted }) => {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content="Загрузочка..." />
    </Dimmer>
  );
};

export default LoadingComonent;
