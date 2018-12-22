import React from "react";
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import RadioInput from "../../../app/common/form/RadioInput";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
// import PlaceInput from "../../../app/common/form/PlaceInput";
import SelectInput from "../../../app/common/form/SelectInput";
// import axios from 'axios'

const interests = [
  { key: "drinks", text: "Напитки", value: "Напитки" },
  { key: "culture", text: "Культура", value: "Культура" },
  { key: "film", text: "Фильмы", value: "Фильмы" },
  { key: "food", text: "Еда", value: "Еда" },
  { key: "music", text: "Музыка", value: "Музыка" },
  { key: "travel", text: "Путишествие", value: "Путишествие" }
];

// const resultCity = [
//     {
//       text:  state.firebase.city || "Введите город 🏙",
//       value: this.initialValues.city || "",
//       key: "c"
//     }
//   ]

// const handlerGetCity = e => {
//   axios
//     .get(
//       `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${
//         e.target.value
//       }`
//     )
//     .then(response => {
//       let data = [];
//       response.data.response.GeoObjectCollection.featureMember.forEach(
//         (item, index) => {
//           data.push({
//             text: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
//             value: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
//             key: index
//           });
//         }
//       );
//       this.setState({
//         resultCity: data
//       });
//     });
// };

const AboutPage = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Обо мне" />
      <p>
        Заполните свой профиль, чтобы получить максимальную отдачу от этого
        сайта
      </p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <label>Семейное положение: </label>
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="В активном поиске"
            label="  В активном поиске"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="Встречаюсь"
            label="  Встречаюсь"
          />
          <Field
            name="status"
            component={RadioInput}
            type="radio"
            value="Подарил кольцо"
            label="  Подарил кольцо"
          />
        </Form.Group>
        <Divider />
        <label>Расскажите нам о себе</label>
        <Field name="about" component={TextArea} placeholder="Обо мне" />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Выберите ваши интересы"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={TextInput}
          placeholder="Род занятий"
        />
        {/* <Field
          name="origin"
          type="text"
          component={PlaceInput}
          placeholder="Родной город"
          options={resultCity}
          // defaultValue={this.props.initialValues.city}
          noResultsMessage="Ничего не найдено 😌"
          onSearchChange={handlerGetCity}
          onChange={this.SelectCity}
          width={8}
        /> */}
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
};

export default reduxForm({
  form: "userProfile",
  enableReinitialize: true,
  destroyOnUnmount: false
})(AboutPage);