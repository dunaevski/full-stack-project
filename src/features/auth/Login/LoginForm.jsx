import React from "react";
import { connect } from "react-redux";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { login } from "../authActions";

const actions = {
  login
};

const LoginForm = ({ login, handleSubmit }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(login)}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="Пароль"
        />
        <Button fluid size="large" color="teal">
          Вход
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
