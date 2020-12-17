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
      // If the user is a member the can click this link to go to the login page
      <div>
        <i className="address card icon"></i>Already a member?{" "}
        <Link to="/login">Login here</Link>
      </div>
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
            Create an Account
          </Header>
          <h3>
            Sign up today and join fans all over the world to discuss all of
            your favorite anime and manga. It's completely free to join!
          </h3>
          <h4>
            We promise to never use or sell your information in any way without
            your consent.
          </h4>
          {/* Email/pasword form */}
          <UserForm
            renderMessage={renderFormMessage}
            buttonText="LET'S GO!"
            onSubmit={onFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
