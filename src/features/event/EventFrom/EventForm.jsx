import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import moment from 'moment'
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import { Segment, Form, Button, Header, Grid } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Напитки", value: "drinks" },
  { key: "culture", text: "Культура", value: "culture" },
  { key: "film", text: "Фильмы", value: "film" },
  { key: "food", text: "Еда", value: "food" },
  { key: "music", text: "Музыка", value: "music" },
  { key: "travel", text: "Путишествие", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "Нзавание события обязательно" }),
  category: isRequired({ message: "Пожалуйста, выберете категорию" }),
  description: composeValidators(
    isRequired({ message: "Пожалуйста, введите описание" }),
    hasLengthGreaterThan(4)({
      message: "Описание должно быть минимум 5 знаков"
    })
  )(),
  city: isRequired({ message: "Город обязательное поле" }),
  venue: isRequired({ message: "Место обязательное поле" }),
  date: isRequired({ message: "Дата обязательное поле" })
});

class EventForm extends Component {
  onFormSubmit = values => {
    values.date = moment(values.date).format()
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Катя"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Описание События" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Название события"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                // multiple={true}
                options={category}
                placeholder="О чём ваше событие (категория)"
              />
              <Field
                name="description"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Раскажите нам о вашем событии"
              />
              <Header sub color="teal" content="Описание Проведения События" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Город"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Место"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Дата"
              />
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Подтвердить
              </Button>
              <Button
                onClick={this.props.history.goBack}
                type="button"
                negative
              >
                Отмена
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
