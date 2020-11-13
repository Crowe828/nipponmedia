import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.title}>
        <Grid item xs={6}>
          <h1>Anime's Watched</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>Anime WishList</h1>
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
          <h1>Favorite Characters</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>Favorite Manga</h1>
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
  );
}
