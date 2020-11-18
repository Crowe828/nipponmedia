import React from "react";
import { Header } from "semantic-ui-react";
import UserForm from "../../components/UserForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = () => {
  const dispatch = useDispatch();

  const renderFormMessage = () => {
    return (
      <>
        Already Registered ? <Link to="/login">Login</Link>
      </>
    );
  };

  const onFormSubmit = (formVal) => {
    dispatch(registerUser(formVal));
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft: "100px",
        marginRight: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <Header as="h2" secondary="true" textAlign="center">
            Create An Account
          </Header>
          <h3>
            Sign up today and join fans all over the world to discuss all of
            your favorite anime and manga. It's completely free to join!
          </h3>
          <h4>
            We promise to never use or sell your information in any way without
            your consent.
          </h4>
          <UserForm
            renderMessage={renderFormMessage}
            buttonText="Let's Go!"
            onSubmit={onFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
