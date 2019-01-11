import React from "react";
import { connect } from "react-redux";
import { combineValidators, isRequired } from "revalidate";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { registerUser, socialLogin } from "../authActions";
import SocialLogin from "../SocialLogin/SocialLogin";

const actions = {
  registerUser,
  socialLogin
};

const validate = combineValidators({
  displayName: isRequired({ message: "Имя обязательно" }),
  email: isRequired({ message: "Email обязателен" }),
  password: isRequired({ message: "Пароль обязателен" })
});

const RegisterForm = ({
  handleSubmit,
  registerUser,
  socialLogin,
  error,
  invalid,
  submitting
}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Имя"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Пароль"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Button
            disabled={invalid || submitting}
            fluid
            size="large"
            color="teal"
          >
            Регистрация
          </Button>
          <Divider horizontal>или</Divider>
          <SocialLogin socialLogin={socialLogin}/>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "registerForm", validate })(RegisterForm));
