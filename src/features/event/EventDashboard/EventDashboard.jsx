import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import cuid from 'cuid'
import EventList from '../EventList/EventList'
import EventFrom from '../EventFrom/EventFrom'

const eventsDashboard = [
  {
    id: '1',
    title: 'Путишествие по Лондону',
    date: '2018-03-27T11:00:00+00:00',
    category: 'культура',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Лондон, Великобритания',
    venue: "Лондонский Тауэр, Сент-Катарина и Ваппинг, Лондон",
    hostedBy: 'Алекс',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Алекс',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Соер',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Поездка в Панч и Джуди Паб',
    date: '2018-03-28T14:00:00+00:00',
    category: 'напитки',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Лондон, Великобритания',
    venue: 'Пунч и Джуди, улица Генриетта, Лондон, Великобритания',
    hostedBy: 'Соер',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Соер',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Алекс',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {


  state = {
    events: eventsDashboard,
    isOpen: false 
  }
 
  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
    })
  }

  handleCancel = () =>  {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div>
        <Grid>
            <Grid.Column  width={10}>
                <EventList events={this.state.events}/>
            </Grid.Column>
            <Grid.Column  width={6}>
              <Button onClick={this.handleFormOpen} positive content="Создать Событие" />
              {this.state.isOpen && 
               <EventFrom createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />}
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard
