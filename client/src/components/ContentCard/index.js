import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

// Material-UI Styling
const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
  pot: {
    marginTop: 0,
  },
  popover: {
    pointerEvents: "none",
  },
});

export default function ContentCard(props) {
  const classes = useStyles();

  return (
    <div style={{ padding: 30 }}>
      {/* Grid displaying all cards */}
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginBottom: "25px" }}
      >
        {/*IMPORTANT: this link below is how we determine the details page, it grabs the type 
      and id from the state and that will determine how the API call is executed */}
        {props.results.map((result) => (
          <Grid item xs={12} sm={6} md={3} align="center" key={result.id}>
            <Link
              to={`/${result.type}/${result.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card style={{ color: "white", backgroundColor: "#263238" }}>
                {/* A popup instructing the user to click to go to the details page */}
                <Tooltip
                  title={
                    <React.Fragment>
                      <Typography style={{ fontSize: "18px" }}>
                        Click for more details!
                      </Typography>
                      <Typography style={{ fontSize: "14px" }}>
                        View synopsis, rating, and more.
                      </Typography>
                    </React.Fragment>
                  }
                  arrow
                  TransitionComponent={Zoom}
                >
                  <img
                    className={classes.pot}
                    src={result.attributes.posterImage.large}
                    alt={result.attributes.titles.en}
                    style={{ width: "100%" }}
                  />
                </Tooltip>
                {/* Titles in English/Japanese */}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {result.attributes.titles.en}
                  </Typography>
                  <Typography className={classes.pos}>
                    {result.attributes.titles.ja_jp}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
