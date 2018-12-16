import React from "react";
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import {
  combineValidators,
  matchesField,
  isRequired,
  composeValidators
} from "revalidate";
import TextInput from "../../../app/common/form/TextInput";

const validate = combineValidators({
  newPassword1: isRequired({ message: "Пожалуйста, введите пароль" }),
  newPassword2: composeValidators(
    isRequired({ message: "Пожалуйста, подтвердите пароль" }),
    matchesField("newPassword1")({ message: "Пароли не совподают" })
  )()
});

const AccountPage = ({
  error,
  invalid,
  submitting,
  handleSubmit,
  updatePassword,
  providerId
}) => {
  return (
    <Segment>
      <Header dividing size="large" content="Учётная Запись" />
      {providerId && providerId === "password" && (
        <div>
          <Header color="teal" sub content="ИЗМЕНИТЬ ПАРОЛЬ" />
          <p>
            Используйте эту форму для обновления настроек вашей учетной записи
          </p>
          <Form onSubmit={handleSubmit(updatePassword)}>
            <Field
              width={8}
              name="newPassword1"
              type="password"
              pointing="left"
              inline={true}
              component={TextInput}
              basic={true}
              placeholder="Новый пароль"
            />
            <Field
              width={8}
              name="newPassword2"
              type="password"
              inline={true}
              basic={true}
              pointing="left"
              component={TextInput}
              placeholder="Подтвердите пароль"
            />
            {error && (
              <Label basic color="red">
                {error}
              </Label>
            )}
            <Divider />
            <Button
              disabled={invalid || submitting}
              size="large"
              positive
              content="Обновить пароль"
            />
          </Form>
        </div>
      )}

      {providerId && providerId === "facebook.com" && (
        <div>
          <Header color="teal" sub content="Facebook Account" />
          <p>
            Пожалуйста, посетите Facebook, чтобы обновить настройки вашей
            учетной записи
          </p>
          <Button type="button" color="facebook">
            <Icon name="facebook" />В Facebook 🚀
          </Button>
        </div>
      )}

      {providerId && providerId === "google.com" && (
        <div>
          <Header color="teal" sub content="Google Account" />
          <p>
            Пожалуйста, посетите Google, чтобы обновить настройки вашего
            аккаунта
          </p>
          <Button type="button" color="google plus">
            <Icon name="google plus" />В Google 🚀
          </Button>
        </div>
      )}
    </Segment>
  );
};

export default reduxForm({ form: "account", validate })(AccountPage);
