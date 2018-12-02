import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventFrom extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null)
      this.setState({
        event: this.props.selectedEvent
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log("current ", this.props.selectedEvent);
    console.log("next ", nextProps.selectedEvent);
    if (nextProps.selectedEvent !== this.props.selectedEvent)
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
  }

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) this.props.updateEvent(this.state.event);
    else this.props.createEvent(this.state.event);
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { handleCancel } = this.props;
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
          <Button onClick={handleCancel} type="button" negative>
            Отмена
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventFrom;
