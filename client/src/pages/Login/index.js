import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import UserForm from "../../components/UserForm";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

const Login = (props) => {
  // access to the isAuthenticated property from the auth reducer state
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  });

  const renderFormMessage = () => {
    return (
      <>
        <i className="user plus icon"></i>Not a member?{" "}
        <Link to="/register">Sign up for a free account</Link>
      </>
    );
  };

  const onFormSubmit = (formVal) => {
    dispatch(loginUser(formVal));
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
            Welcome Back!
          </Header>
          <h3>
            As a valued member of Nippon Media, we would like to thank you for
            believing in our mission. We hope we add a small amount of value to
            your daily life!
          </h3>
          <h4>Hurry up and login, Wall Rose has already been breached!</h4>
          <UserForm
            renderMessage={renderFormMessage}
            buttonText="LOGIN"
            onSubmit={onFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
