import React from "react";
import { Form, Label, Dropdown } from "semantic-ui-react";

const PlaceInput = ({
  onSearchChange,
  input: { onChange },
  options,
  defaultValue,
  placeholder,
  noResultsMessage,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <Dropdown
        selection
        search
        fluid
        onSearchChange={onSearchChange}
        onChange={(param, data) => onChange(data.value)}
        defaultValue={defaultValue}
        noResultsMessage={noResultsMessage}
        placeholder={placeholder}
        options={options}
      />

      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default PlaceInput;
