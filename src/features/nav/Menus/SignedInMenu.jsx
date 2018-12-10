import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedInMenu = ({ signOut, currentUser }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text={currentUser}>
        <Dropdown.Menu>
          <Dropdown.Item text="Создать Событие" icon="plus" />
          <Dropdown.Item text="Мои События" icon="calendar" />
          <Dropdown.Item text="Мои Друзья" icon="users" />
          <Dropdown.Item text="Моя Страница" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Настройки"
            icon="settings"
          />
          <Dropdown.Item onClick={signOut} text="Выйти" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
