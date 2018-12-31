import React, { Component } from "react"; // Добовление React
import { connect } from "react-redux"; // Добовляем connect Redux
import { firestoreConnect } from "react-redux-firebase";
import { Grid, Loader } from "semantic-ui-react"; // Добовление элементов из semantic-ui-react
import EventList from "../EventList/EventList"; // Добовление комппонента EventList
import { getEventsForDashboard } from "../eventActions";
import LoadingComonent from "../../../app/layout/LoadingComonent";
import EventActivity from "../EventActivity/EventActivity";

const query = [
  {
    collection: "activity",
    orderBy: ["timestamp", "desc"],
    limit: 5
  }
];

// // раньше
// var sum = function() {
//   return [].reduce.call(arguments, function(m, n) {
//     return m + n;
//   }, 0);
// }

// // сейчас
// var sum = (...args) => args.reduce((m, n) => m + n, 0);

const mapState = state => ({
  events: state.events,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  state = {
    moreEvents: false,
    loadingInitial: true,
    loadedEvents: [],
    contextRef: {}
  };

  async componentDidMount() {
    let next = await this.props.getEventsForDashboard();

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreEvents: true,
        loadingInitial: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.events !== nextProps.events) {
      this.setState({
        loadedEvents: [...this.state.loadedEvents, ...nextProps.events]
      });
    }
  }

  getNextEvents = async () => {
    const { events } = this.props;
    let lastEvent = events && events[events.length - 1];
    let next = await this.props.getEventsForDashboard(lastEvent);
    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreEvents: false
      });
    }
  };

  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { loading, activities } = this.props;
    const { moreEvents, loadedEvents } = this.state;
    if (this.state.loadingInitial) return <LoadingComonent inverted={false} />;
    return (
      <div>
        <Grid>
          <Grid.Column width={11}>
            <div ref={this.handleContextRef}>
              <EventList
                loading={loading}
                moreEvents={moreEvents}
                getNextEvents={this.getNextEvents}
                events={loadedEvents} // Передаём события из State
              />
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <EventActivity
              activities={activities}
              contextRef={this.state.contextRef}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Loader active={loading} />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect(query)(EventDashboard));
