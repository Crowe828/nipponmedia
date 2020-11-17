import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Login() {
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
          <h1>Welcome Back!</h1>
          <h3>
            As a valued member of Nippon Media, we would like to thank you for
            believing in our mission. We hope we add a small amount of value to
            your daily life!
          </h3>
          <form className="login" style={{ fontSize: "18px" }}>
            <TextField
              type="email"
              id="emailInput"
              variant="outlined"
              label="Email"
              style={{ margin: 8 }}
              placeholder="Email"
              helperText="e.g. perfect-cell@dbz.com"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              type="password"
              id="passwordInput"
              variant="outlined"
              label="Password"
              style={{ margin: 8 }}
              placeholder="Password"
              helperText="We hope you remember your password, because we sure don't."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div
              style={{ display: "none" }}
              id="alert"
              className="alert alert-danger"
              role="alert"
            >
              <span
                className="glyphicon glyphicon-exclamation-sign"
                aria-hidden="true"
              />
              <span className="sr-only">Error: </span>
              <span className="msg" />
            </div>
            <h4>Hurry up and login, Wall Rose has already been breached!</h4>
            <Button
              variant="contained"
              size="large"
              style={{
                color: "white",
                backgroundColor: "#81c784",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Login
            </Button>
          </form>
          <Link to="/signup">
            <p>New to Nippon Media? Sign up for a free account here.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
