import React, { Component } from "react";
import { connect } from "react-redux";
import cuid from "cuid";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventFrom extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Название События</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="Имя"
            />
          </Form.Field>
          <Form.Field>
            <label>Дата</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={event.date}
              type="date"
              placeholder="Дата События"
            />
          </Form.Field>
          <Form.Field>
            <label>Город</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="Город проведения события"
            />
          </Form.Field>
          <Form.Field>
            <label>Место</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
              placeholder="Введите место события"
            />
          </Form.Field>
          <Form.Field>
            <label>Организатор</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder="Введите имя организатора"
            />
          </Form.Field>
          <Button positive type="submit">
            Подтвердить
          </Button>
          <Button onClick={this.props.history.goBack} type="button" negative>
            Отмена
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventFrom);
