import React from "react";
import { Grid, Menu, Header } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
  return (
    <div>
      <Grid.Column width={4}>
        <Menu vertical>
          <Header
            icon="user"
            attached
            inverted
            color="grey"
            content="Профиль"
          />
          <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
          <Menu.Item as={NavLink} to='/settings/about'>Обо Мне</Menu.Item>
          <Menu.Item as={NavLink} to='/settings/photos'>Мои Фото</Menu.Item>
        </Menu>
        <Grid.Row />
        <Menu vertical>
          <Header
            icon="settings"
            attached
            inverted
            color="grey"
            content="Аккаунт"
          />
          <Menu.Item as={NavLink} to='/settings/account'>Моя Аккаунт</Menu.Item>
        </Menu>
      </Grid.Column>
    </div>
  );
};

export default SettingsNav;
