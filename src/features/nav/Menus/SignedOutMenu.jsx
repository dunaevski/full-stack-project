import React from "react";
import { Button, Menu } from "semantic-ui-react"; // Добавление элементов(компонентов) из semantic-ui-react

const SignedOutMenu = ({signIn}) => {
  return (
    <Menu.Item position="right">
      <Button onClick={signIn} basic inverted content="Вход" />
      <Button
        basic
        inverted
        content="Регистрация"
        style={{ marginLeft: "0.5em" }} // Стили React
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
