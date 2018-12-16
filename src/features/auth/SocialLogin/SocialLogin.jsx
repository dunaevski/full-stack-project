import React from "react";
import { Icon, Button } from "semantic-ui-react";

const SocialLogin = ({ socialLogin }) => {
  return (
    <div>
      <Button
        onClick={() => socialLogin("facebook")}
        type="button"
        style={{ marginBottom: "10px" }}
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Вход при помощи Facebook
      </Button>

      <Button
        onClick={() => socialLogin("google")}
        type="button"
        fluid
        color="google plus"
      >
        <Icon name="google plus" />
        Вход при помощи Google
      </Button>
    </div>
  );
};

export default SocialLogin;
