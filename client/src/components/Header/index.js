import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    paper: {
    padding: theme.spacing(2),
    height: "100px",
    textAlign: "center",
    color: "#fff",
    background: "#3f51b5",
    fontSize: "72px",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper square className={classes.paper}>Nippon Media</Paper>
    </Grid>
  );
}
