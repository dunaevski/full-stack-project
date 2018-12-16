import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import axios from "axios";
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";
import TextInput from "../../../app/common/form/TextInput";
import RadioInput from "../../../app/common/form/RadioInput";

class BasicsPage extends Component {
  state = {
    resultCity: [
      {
        text: this.props.initialValues.city || "Введите город 🏙",
        value: this.props.initialValues.city || "",
        key: "c"
      }
    ],
    city: {}
  };

  handlerGetCity = e => {
    axios
      .get(
        `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${
          e.target.value
        }`
      )
      .then(response => {
        let data = [];
        response.data.response.GeoObjectCollection.featureMember.forEach(
          (item, index) => {
            data.push({
              text: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
              value: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
              key: index
            });
          }
        );
        this.setState({
          resultCity: data
        });
      });
  };

  // SelectCity = e => {
  //   let data = Object.values(e)
  //     .slice(0, -1)
  //     .join("");
  //   this.setState({
  //     city: data
  //   });
  //   this.props.change("city", data);
  // };

  render() {
    const { pristine, submitting, handleSubmit, updateProfile } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Основное" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Имя"
          />
          <Form.Group inline>
            <label>Пол: </label>
            <Field
              name="gender"
              type="radio"
              value="male"
              label=" Мужчина"
              component={RadioInput}
            />
            <Field
              name="gender"
              type="radio"
              value="female"
              label=" Женщина"
              component={RadioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Дата рождения"
            dateFormat="YYYY-MM-DD"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
            maxDate={moment().subtract(18, "years")}
          />
          <Field
            name="city"
            type="text"
            component={PlaceInput}
            placeholder="Город"
            options={this.state.resultCity}
            defaultValue={this.props.initialValues.city}
            noResultsMessage="Ничего не найдено 😌"
            onSearchChange={this.handlerGetCity}
            // onChange={this.SelectCity}
            width={8}
          />
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Обновить профиль"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(BasicsPage);
