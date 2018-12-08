import React, { Component } from "react"; // Добовление React
import { connect } from "react-redux"; // Добовляем connect Redux
import { Grid } from "semantic-ui-react"; // Добовление элементов из semantic-ui-react
import EventList from "../EventList/EventList"; // Добовление комппонента EventList
import { deleteEvent } from "../eventActions";

// // раньше
// var sum = function() {
//   return [].reduce.call(arguments, function(m, n) {
//     return m + n;
//   }, 0);
// }

// // сейчас
// var sum = (...args) => args.reduce((m, n) => m + n, 0);

const mapState = state => ({
  events: state.events
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  // Удаление события из EventList
  handleDeleteEvent = eventId => () => {
    //Redux удаление
    this.props.deleteEvent(eventId);
  };
  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList
              deleteEvents={this.handleDeleteEvent} // Передаём метод в компонент
              events={events} // Передаём события из State
            />
          </Grid.Column>
          <Grid.Column width={6} />
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
