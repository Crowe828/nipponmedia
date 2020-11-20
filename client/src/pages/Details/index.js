import React, { Component } from "react";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import API from "../../utils/API";

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
    textAlign: "center",
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
    height: "100%",
    borderRadius: "5px",
    marginBottom: "10px",
    marginRight: "5px",
  },
  card: {
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: ".5px .5px 1px 1px",
    backgroundColor: "#263238",
    color: "beige",
  },
  cardSmall: {
    borderRadius: "10px",
    marginTop: "20px",
    marginLeft: "2px",
    boxShadow: ".5px .5px 1px 1px",
    backgroundColor: "#263238",
    color: "beige",
  },
  btnGroup: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-around",
  },
  wrap: {
    backgroundColor: "transparent",
    height: "auto",
    width: "auto",
  },
  display: {
    display: "flex",
    justifyContent: "center",
    height: "800px",
  },
  title: {
    fontSize: "24px",
  },
});

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      type: null,
      savedAnimes: [],
      savedMangas: [],
    };
  }
  // this will be the function to save the anime to the anime collection
  handleSaveAnime = (anime) => {
    let obj = {
      titleEn: anime.titles.en,
      titleJp: anime.titles.ja_jp,
      img: anime.posterImage.small,
      synopsis: anime.synopsis,
      startDate: anime.startDate,
      endDate: anime.endDate,
      rank: anime.popularityRank,
      ageRating: anime.ageRating,
      episodeCount: anime.episodeCount,
      episodeLength: anime.episodeLength,
    };

    API.saveAnime(obj)
      .then((savedAnime) =>
        this.setState({
          savedAnimes: this.state.savedAnimes.concat([savedAnime]),
        })
      )
      .catch((err) => console.error(err));
  };
  //
  handleSaveManga = (manga) => {
    let obj = {
      titleEn: manga.titles.en,
      titleJp: manga.titles.ja_jp,
      img: manga.posterImage.small,
      synopsis: manga.synopsis,
      startDate: manga.startDate,
      endDate: manga.endDate,
      rank: manga.popularityRank,
      ageRating: manga.ageRating,
    };

    API.saveManga(obj)
      .then((savedManga) =>
        this.setState({
          savedMangas: this.state.savedMangas.concat([savedManga]),
        })
      )
      .catch((err) => console.error(err));
  };

  //this pulls the type and id of the anime from the App.js state
  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/" + window.location.pathname)
      .then((response) => {
        console.log("axios", response.data.data);
        this.setState({ response: response, type: response.data.data.type });
        console.log("type: " + this.state.type);
      });
  }

  // will render anime detail, manga detail, or nothing depending on state
  render() {
    const { classes } = this.props;
    if (this.state.type === "manga") {
      return (
        <main className={classes.main}>
          <div className={(classes.center, classes.title, classes.textCenter)}>
            {this.state.response.data.data.attributes.titles.en}
          </div>
          <div className={(classes.title, classes.textCenter)}>
            {" "}
            {this.state.response.data.data.attributes.titles.ja_jp}
          </div>
          {this.state.response.data.data.attributes.ageRating === null ? (
            <div className={classes.center}>Age Guide: No rating</div>
          ) : (
            <div className={classes.center}>
              Age Guide: {this.state.response.data.data.attributes.ageRating}{" "}
            </div>
          )}

          <div className={classes.display}>
            <img
              className={classes.imageSize}
              src={this.state.response.data.data.attributes.posterImage.large}
              alt={this.state.response.data.data.attributes.titles.en}
            />
            <Card className={(classes.textCenter, classes.wrap)}>
              <CardContent className={classes.wrap}>
                <Grid className={classes.spaceBetween} container spacing={3}>
                  <Grid item xs={12}>
                    <Typography className={classes.synopsis}>
                      Synopsis: <br />
                      {this.state.response.data.data.attributes.synopsis}
                    </Typography>
                  </Grid>
                  <Grid className={classes.spaceBetween} container spacing={3}>
                    <Grid className={classes.card} item xs={5}>
                      <Typography>
                        Start date:{" "}
                        {this.state.response.data.data.attributes.startDate}{" "}
                      </Typography>
                    </Grid>
                    <Grid className={classes.card} item xs={5}>
                      {this.state.response.data.data.attributes.endDate ==
                      null ? (
                        <Typography component={"span"}>
                          End Date: TBD
                        </Typography>
                      ) : (
                        <Typography component={"span"}>
                          End Date:{" "}
                          {this.state.response.data.data.attributes.endDate}
                        </Typography>
                      )}
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={2}>
                      <Typography>
                        Status:{" "}
                        {this.state.response.data.data.attributes.status}
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={3}>
                      <Typography>
                        Reader Rating:{" "}
                        {this.state.response.data.data.attributes.averageRating}
                        /100
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={3}>
                      <Typography>
                        Rank among Manga's:{" "}
                        {
                          this.state.response.data.data.attributes
                            .popularityRank
                        }
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={2}>
                      <Typography>
                        {this.state.response.data.data.attributes.nsfw ===
                        null ? (
                          <Typography>NSFW: Safe</Typography>
                        ) : (
                          <Typography>
                            NSFW:{" "}
                            {this.state.response.data.data.attributes.nsfw}
                          </Typography>
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <div className={classes.btnGroup}>
                  <Button variant="contained" color="primary">
                    Reading
                  </Button>
                  <Button variant="contained" color="secondary">
                    Read
                  </Button>
                  <Button
                    onClick={() =>
                      this.handleSaveManga(
                        this.state.response.data.data.attributes
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
                  >
                    Save as Favorite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <br />
        </main>
      );
    } else if (this.state.type === "anime") {
      return (
        <main className={classes.main}>
          <div className={(classes.center, classes.title, classes.textCenter)}>
            {this.state.response.data.data.attributes.titles.en}
          </div>
          <div className={(classes.title, classes.textCenter)}>
            {" "}
            {this.state.response.data.data.attributes.titles.ja_jp}
          </div>
          <div className={classes.center}>
            Age Guide: {this.state.response.data.data.attributes.ageRating}{" "}
          </div>
          <div className={classes.display}>
            <img
              className={classes.imageSize}
              src={this.state.response.data.data.attributes.posterImage.large}
              alt={this.state.response.data.data.attributes.titles.en}
            />
            <Card className={(classes.textCenter, classes.wrap)}>
              <CardContent className={classes.wrap}>
                <Grid className={classes.spaceBetween} container spacing={3}>
                  <Grid item xs={12}>
                    <Typography>
                      Synopsis: <br />
                      {this.state.response.data.data.attributes.synopsis}
                    </Typography>
                  </Grid>
                  <Grid className={classes.spaceBetween} container spacing={3}>
                    <Grid className={classes.card} item xs={5}>
                      <Typography>
                        Start date:{" "}
                        {this.state.response.data.data.attributes.startDate}{" "}
                      </Typography>
                    </Grid>
                    <Grid className={classes.card} item xs={5}>
                      {this.state.response.data.data.attributes.endDate ==
                      null ? (
                        <Typography component={"span"}>
                          End Date: TBD
                        </Typography>
                      ) : (
                        <Typography component={"span"}>
                          End Date:{" "}
                          {this.state.response.data.data.attributes.endDate}
                        </Typography>
                      )}
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={2}>
                      <Typography>
                        Status:{" "}
                        {this.state.response.data.data.attributes.status}
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={3}>
                      <Typography>
                        Viewer Rating:{" "}
                        {this.state.response.data.data.attributes.averageRating}
                        /100
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={3}>
                      <Typography>
                        Rank among Anime's:{" "}
                        {
                          this.state.response.data.data.attributes
                            .popularityRank
                        }
                      </Typography>
                    </Grid>
                    <Grid className={classes.cardSmall} item xs={2}>
                      <Typography>
                        NSFW: {this.state.response.data.data.attributes.nsfw}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <div className={classes.btnGroup}>
                  <Button variant="contained" color="primary">
                    Watching
                  </Button>
                  <Button variant="contained" color="secondary">
                    Watched
                  </Button>
                  <Button
                    onClick={() =>
                      this.handleSaveAnime(
                        this.state.response.data.data.attributes
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
                  >
                    Save as Favorite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <br />
        </main>
      );
    } else {
      return (
        <div className="ui active dimmer">
          <Loader className="ui massive text">Loading...</Loader>
        </div>
      );
    }
  }
}

//exporting with styles since this is a Class component
export default withStyles(styles, { withTheme: true })(Details);
