import React, { Component } from 'react'
import {Button ,Container, Menu} from 'semantic-ui-react'

class NavBar extends Component {
  render() {
    return (
           <Menu inverted fixed="top">
             <Container>
               <Menu.Item header>
                 <img src="assets/logo.png" alt="logo" />
                 Re-vents
               </Menu.Item>
               <Menu.Item name="События" />
               <Menu.Item>
                 <Button floated="right" positive inverted content="Создать событие" />
               </Menu.Item>
               <Menu.Item position="right">
                 <Button basic inverted content="Вход" />
                 <Button basic inverted content="Регистрация" style={{marginLeft: '0.5em'}} />
               </Menu.Item>
             </Container>
           </Menu>
    )
  }
}

export default  NavBar