import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 350,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  pot: {
    marginTop: 0,
  },
});

export default function AnimeCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img
        className={classes.pot}
        src={"https://via.placeholder.com/300x150"}
        alt={"placeholder"}
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.pot, classes.pos} size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
