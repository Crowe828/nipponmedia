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

export default function AnimeCard(props) {
  const classes = useStyles();

  return (
    <div>
      {props.results.map((result) => (
        <Card key={JSON.stringify(result.attributes.titles.en)} className={classes.root}>
          <img
            className={classes.pot}
            src={result.attributes.posterImage.tiny}
            alt={result.attributes.titles.en}
          />
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {result.attributes.ageRatingGuide}
            </Typography>
            <Typography variant="h5" component="h2">
              {result.attributes.titles.en}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {result.attributes.titles.ja_jp}
            </Typography>
            <Typography variant="body2" component="p">
              {result.attributes.synopsis}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={(classes.pot, classes.pos)} size="small">
              Learn
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
