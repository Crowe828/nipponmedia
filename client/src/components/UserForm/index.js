import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Message, Segment, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { clearErrors } from "../../actions/authActions";

const UserForm = (props) => {
  const error = useSelector((state) => state.errors);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(
    (dispatch) => {
      if (error.message) {
        setErrorMessage(error.message);
        dispatch(clearErrors());
      }
    },
    [dispatch, error]
  );

  return (
    // Form for both login and signup pages
    <>
      <Form onSubmit={props.handleSubmit(props.onSubmit)} size="large">
        <Segment className="ui orange raised">
          {/* Enter users email */}
          <Field name="email" component={renderInput} label="Email" />
          {errorMessage ? (
            <Label className="alertMssg" basic color="red">
              {errorMessage}
            </Label>
          ) : (
            ""
          )}
          {/* Enter user password */}
          <Field name="password" component={renderInput} label="Password" />
          {/* Submit button, features an arrow animation on hover */}
          <Button
            className="ui vertical animated"
            tabIndex="0"
            fluid
            size="large"
          >
            <div className="visible content">{props.buttonText}</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </Button>
        </Segment>
      </Form>
      <Message className="ui floating">{props.renderMessage()}</Message>
    </>
  );
};

const renderInput = ({ input, label }) => {
  return (
    <div className="field">
      <div className="ui fluid left icon input">
        <input
          {...input}
          autoComplete="off"
          placeholder={label}
          type={`${input.name === "email" ? "text" : "password"}`}
        />
        <i
          aria-hidden="true"
          className={`${input.name === "email" ? "user" : "lock"} icon`}
        ></i>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "userform",
})(UserForm);
