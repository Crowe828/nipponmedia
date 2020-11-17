import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const styles = () => ({
  main: {
    fontFamily: "PT Sans Narrow, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "50px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-around",
  },
  textCenter: {
    textAlign: "center",
  },
  imageSize: {
    width: "35%",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  card: {
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: ".5px .5px 1px 1px",
    backgroundColor: "#263238",
    color: "white",
  },
  cardSmall: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "10px",
    boxShadow: ".5px .5px 1px 1px",
    backgroundColor: "#263238",
    color: "white",
  },
  btnGroup: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-around",
  },
});

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
  }

  //this pulls the type and id of the anime from the App.js state
  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/" + window.location.pathname)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ response });
      });
  }


  render() {
    const { classes } = this.props;
    if (this.state.response == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <main className={classes.main}>
          <div className={classes.center}>
            {this.state.response.data.data.attributes.titles.en}
          </div>
          <div className={classes.center}>
            {" "}
            {this.state.response.data.data.attributes.titles.ja_jp}
          </div>
          <div className={classes.center}>
            Age Guide: {this.state.response.data.data.attributes.ageRating}{" "}
          </div>
          <div className={classes.center}>
            <img
              className={classes.imageSize}
              src={this.state.response.data.data.attributes.posterImage.large}
              alt={this.state.response.data.data.attributes.titles.en}
            />
          </div>
          <Card className={classes.textCenter}>
            <CardContent>
              <Grid className={classes.spaceBetween} container spacing={3}>
                <Grid item xs={12}>
                  <Typography>
                    Synopsis: <br />
                    {this.state.response.data.data.attributes.synopsis}
                  </Typography>
                </Grid>
                <Grid className={classes.card} item xs={5}>
                  <Typography>
                    Start date:{" "}
                    {this.state.response.data.data.attributes.startDate}{" "}
                  </Typography>
                </Grid>
                <Grid className={classes.card} item xs={5}>
                  <Typography>
                    End date: {this.state.response.data.data.attributes.endDate}
                  </Typography>
                </Grid>
                <Grid className={classes.cardSmall} item xs={2}>
                  <Typography>
                    Episodes:{" "}
                    {this.state.response.data.data.attributes.episodeCount}{" "}
                  </Typography>
                </Grid>
                <Grid className={classes.cardSmall} item xs={2}>
                  <Typography>
                    Viewer Rating:{" "}
                    {this.state.response.data.data.attributes.averageRating}/100
                  </Typography>
                </Grid>
                <Grid className={classes.cardSmall} item xs={2}>
                  <Typography>
                    Rank among Animes:{" "}
                    {this.state.response.data.data.attributes.popularityRank}
                  </Typography>
                </Grid>
                <Grid className={classes.cardSmall} item xs={2}>
                  <Typography>
                    NSFW: {this.state.response.data.data.attributes.nsfw}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.btnGroup}>
            <Button variant="contained" color="primary">
              Watching
            </Button>
            <Button variant="contained" color="secondary">
              Watched
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<SaveIcon />}
            >
              Save as Favorite
            </Button>
          </div>
        </main>
      );
    }
  }
}

//exporting with styles since this is a Class component

export default withStyles(styles, { withTheme: true })(Details);
