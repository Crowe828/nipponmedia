import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles({
  root: {
    width: 284,
    height: 600,
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
  popover: {
    pointerEvents: "none",
  },
});

export default function AnimeCard(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            <Link to={`/${result.id}`} style={{ textDecoration: "none" }}>
              <Card style={{ color: "white", backgroundColor: "#263238" }}>
                <img
                  className={classes.pot}
                  src={result.attributes.posterImage.small}
                  alt={result.attributes.titles.en}
                  style={{ width: "100%" }}
                />
                <CardContent>
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    <Typography className={classes.title} gutterBottom>
                      {result.attributes.ageRatingGuide}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {result.attributes.titles.en}
                    </Typography>
                    <Typography className={classes.pos}>
                      {result.attributes.titles.ja_jp}
                    </Typography>
                  </Typography>
                </CardContent>
              </Card>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Typography
                  style={{
                    padding: "24px",
                    fontSize: "22px",
                    color: "white",
                    backgroundColor: "#455a64",
                  }}
                >
                  Click to learn more!
                </Typography>
              </Popover>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
