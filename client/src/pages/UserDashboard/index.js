import React, { useEffect, useState } from "react";
import { Header, Message } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: "10px",
    backgroundColor: "black",
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    width: "93%",
    marginLeft: "3%",
  },
  saved: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    display: "flex",
    textAlign: "center",
  },
}));

export const UserDashboard = (props) => {
  const classes = useStyles();
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
  const [mangas, setMangas] = useState();
  const [animes, setAnimes] = useState();

  useEffect(() => {
    getMangas();
    getAnimes();
    console.log("use effect", mangas);
  }, []);

  const getMangas = () => {
    API.getManga()
      .then((res) => {
        console.log("functionManga", res);
        setMangas(res);
      })
      .catch((err) => console.log(err));
  };
  const getAnimes = () => {
    API.getAnime()
      .then((res) => {
        console.log("functionAnime", res);
        setAnimes(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Message className="message-container" size="huge" secondary="true">
          <Header size="huge"> User Dashboard </Header>
          <p>Welcome {user ? user.email : ""}</p>
        </Message>
        <Grid container className={classes.title}>
          <Grid item xs={6}>
            <h1>Anime's Watched</h1>
          </Grid>
          <Grid item xs={6}>
            <h1>Anime's Watching:</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.saved}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>

        <Grid container className={classes.title}>
          <Grid item xs={6}>
            <h1>Favorite Anime:</h1>
          </Grid>
          <Grid item xs={6}>
            <h1>Favorite Manga:</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.saved}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>characters here</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserDashboard;
