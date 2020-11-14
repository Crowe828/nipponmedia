import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 284,
    height: 605,
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
    <div style={{ padding: 10 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {props.results.map((result) => (
          <Grid item xs={12} sm={6} md={3} align="center" key={result.id}>
            <Card className={classes.root}>
              <Link to={`/${result.id}`}>
                <img
                  className={classes.pot}
                  src={result.attributes.posterImage.small}
                  alt={result.attributes.titles.en}
                />
              </Link>
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
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => console.log(result)}
                  className={(classes.pot, classes.pos)}
                  size="small"
                >
                  <Link to={`/${result.id}`}>Learn more</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
