import React, { useEffect, useState } from "react";
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
  const [mangas, setMangas] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getMangas();
    getAnimes();
    console.log("use effect", mangas);
    console.log("use effect", animes);
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
        <Grid item xs={12}>
          <div
            style={{
              textAlign: "center",
              color: "#000",
              backgroundColor: "#78909c",
              padding: "1px",
            }}
          >
            <h2 style={{ fontSize: "48px", margin: "10px" }}>User Dashboard</h2>
            <h3 style={{ fontSize: "24x" }}>
              Welcome, {user ? user.email : ""}
            </h3>
          </div>
        </Grid>
        <Grid container className={classes.title}>
          <Grid item xs={6}>
            <h1>Anime's Watched</h1>
            <p></p>
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
            {animes.data &&
              animes.data.map((result) => (
                <div>
                  <img
                    src={result.img}
                    alt={result.titleEn}
                    style={{ width: "50%" }}
                  />
                  <h1>
                    {result.titleEn}
                  </h1>
                  <h2> {result.titleJp} </h2>
                </div>
              ))}
            {animes.data &&
              console.log("data from console log in component", animes.data)}
            <Paper className={classes.paper}></Paper>
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
