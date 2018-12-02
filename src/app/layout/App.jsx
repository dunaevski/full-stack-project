import React, { Component } from 'react'
import { Container } from 'semantic-ui-react' // Добавление элемента с semantic-ui-reac
import EventDashboard from '../../features/event/EventDashboard/EventDashboard' // Доавление компонента 
import NavBar from '../../features/nav/NavBar/NavBar' // Доавление компонента 



class App extends Component {
  render() {
    return (
     <div>
      <NavBar/>
      <Container className="main">
         <EventDashboard />
      </Container>
     </div>
    );
  }
}

export default App;



