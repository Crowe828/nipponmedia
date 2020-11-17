import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Signup() {
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
          <h1>Create An Account</h1>
          <h3>
            Sign up today and join fans all over the world to discuss all of
            your favorite anime and manga. It's completely free to join!
          </h3>
          <form className="signup" style={{ fontSize: "18px" }}>
            <TextField
              type="email"
              id="emailInput"
              variant="outlined"
              label="Email"
              style={{ margin: 8 }}
              placeholder="Email"
              helperText="e.g. imperfect-cell@dbz.com"
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
              helperText="Make sure it's super sneaky."
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
            <h4>
              We promise to never use or sell your information in any way
              without your consent.
            </h4>
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
              Let's go!
            </Button>
          </form>
          <Link to="/login">
            <p>Already a member? Login here.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
