import React, { Component } from "react";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StarsIcon from "@material-ui/icons/Stars";
import TheatersIcon from "@material-ui/icons/Theaters";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Alert from "@material-ui/lab/Alert";
import API from "../../utils/API";

// Material-UI Styling
const styles = () => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  animeImage: {
    height: "325px",
    width: "225px",
    borderRadius: "6px",
    margin: "10px",
  },
  mangaImage: {
    height: "325px",
    width: "225px",
    borderRadius: "6px",
    margin: "10px",
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
  display: {
    display: "flex",
  },
  invisible: {
    display: "none",
  },
});

class Details extends Component {
  state = {
    response: null,
    response2: null,
    type: null,
    savedAnimes: [],
    savedMangas: [],
  };

  // This is the function to save the anime to the anime collection
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

  // This is the function that saves the manga to the manga collection
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
      volumeCount: manga.volumeCount,
      savedBy: this.user,
    };

    API.saveManga(obj)
      .then((savedManga) =>
        this.setState({
          savedMangas: this.state.savedMangas.concat([savedManga]),
        })
      )
      .catch((err) => console.error(err));
  };

  // Mount two Axios calls
  // First is for all of the details
  // Second is for the streaming links
  componentDidMount() {
    axios
      .all([
        axios.get("https://kitsu.io/api/edge/" + window.location.pathname),
        axios
          .get(
            "https://kitsu.io/api/edge/" +
              window.location.pathname +
              "/streaming-links"
          )
          // Since there is no streaming links for the manga, return null when accessing the manga details page
          .catch((err) => null),
      ])
      .then(
        axios.spread((response, response2) => {
          this.setState({
            response: response,
            response2: response2,
            type: response.data.data.type,
          });
        })
      );
  }

  // Alert the user they added the anime/manga to their profile
  alert() {
    return (
      <Alert variant="outlined" severity="success">
        Successfully added!
      </Alert>
    );
  }

  render() {
    const { classes } = this.props;
    // Everything for Manga details pages
    if (this.state.type === "manga") {
      return (
        <main className={classes.main}>
          <div className={classes.display}>
            <Grid className={(classes.center, classes.wrap)}>
              <CardContent className={classes.wrap}>
                <Grid className={classes.spaceBetween} container spacing={3}>
                  <Grid item md={3}>
                    {/* Manga poster image */}
                    <img
                      className={classes.mangaImage}
                      src={
                        this.state.response.data.data.attributes.posterImage
                          .large
                      }
                      alt={this.state.response.data.data.attributes.titles.en}
                    />
                  </Grid>
                  <Grid item md={9}>
                    <Grid item xs={12}>
                      <h1
                        className={classes.center}
                        style={{
                          fontSize: "56px",
                          fontStyle: "italic",
                          lineHeight: "normal",
                        }}
                      >
                        {/* Name of manga in English/Japanese */}
                        {this.state.response.data.data.attributes.titles.en}
                        <br />
                        {this.state.response.data.data.attributes.titles.ja_jp}
                      </h1>
                    </Grid>
                    <Grid
                      className={classes.spaceBetween}
                      container
                      spacing={3}
                    >
                      <Grid className={classes.card} item xs={5}>
                        {/* When the manga started */}
                        <h4>
                          Start date:{" "}
                          {this.state.response.data.data.attributes.startDate}
                        </h4>
                      </Grid>
                      {/* If the manga has finished, display that. If not, display TBD */}
                      <Grid className={classes.card} item xs={5}>
                        {this.state.response.data.data.attributes.endDate ==
                        null ? (
                          <h4>End Date: TBD</h4>
                        ) : (
                          <h4>
                            End Date:{" "}
                            {this.state.response.data.data.attributes.endDate}
                          </h4>
                        )}
                      </Grid>
                      <Grid className={classes.cardSmall} item xs={2}>
                        {/* Current status of manga */}
                        <h4>
                          Status:{" "}
                          {this.state.response.data.data.attributes.status}
                        </h4>
                      </Grid>
                      <Grid className={classes.cardSmall} item xs={3}>
                        {/* User rating */}
                        <h4>
                          Reader Rating:{" "}
                          {
                            this.state.response.data.data.attributes
                              .averageRating
                          }
                          /100
                        </h4>
                      </Grid>
                      <Grid className={classes.cardSmall} item xs={3}>
                        {/* Rank of manga compared to other manga */}
                        <h4>
                          Rank among Manga:{" "}
                          {
                            this.state.response.data.data.attributes
                              .popularityRank
                          }
                        </h4>
                      </Grid>
                      <Grid className={classes.cardSmall} item xs={2}>
                        {/* If the manga is NSFW, display that. If not, let them know it is safe */}
                        {this.state.response.data.data.attributes.nsfw ===
                        null ? (
                          <h4>NSFW: Safe</h4>
                        ) : (
                          <h4>
                            NSFW:{" "}
                            {this.state.response.data.data.attributes.nsfw}
                          </h4>
                        )}
                      </Grid>
                    </Grid>
                    <div className={classes.btnGroup}>
                      {/* Buttons to favorite, mark as reading, or mark as read */}
                      <Button
                        onClick={() =>
                          this.handleSaveManga(
                            this.state.response.data.data.attributes
                          )
                        }
                        variant="contained"
                        color="primary"
                        style={{ fontSize: "18px" }}
                        startIcon={<StarsIcon />}
                      >
                        Favorite
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ fontSize: "18px" }}
                        startIcon={<MenuBookIcon />}
                      >
                        Reading
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ fontSize: "18px" }}
                        startIcon={<CheckCircleIcon />}
                      >
                        Read
                      </Button>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <h1
                      style={{
                        fontSize: "48px",
                        fontStyle: "italic",
                      }}
                    >
                      Synopsis
                    </h1>
                    {/* What the age rating of the manga is. If there isn't one, display that */}
                    {this.state.response.data.data.attributes.ageRating ===
                    null ? (
                      <div
                        style={{
                          fontSize: "28px",
                          fontStyle: "italic",
                          lineHeight: "normal",
                        }}
                      >
                        Age Guide: No rating
                      </div>
                    ) : (
                      <h1
                        style={{
                          fontSize: "28px",
                          fontStyle: "italic",
                          lineHeight: "normal",
                        }}
                      >
                        Age Guide:{" "}
                        {this.state.response.data.data.attributes.ageRating}
                      </h1>
                    )}
                    {/* Manga synopsis */}
                    <p
                      style={{
                        fontSize: "22px",
                      }}
                    >
                      {this.state.response.data.data.attributes.synopsis}
                    </p>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </div>
          <br />
        </main>
      );
      // Everything for anime details pages
    } else if (this.state.type === "anime") {
      return (
        <div>
          {/* Cover image for anime at the top of the page */}
          {this.state.response.data.data.attributes.coverImage === null ? (
            <div className={classes.invisible}> </div>
          ) : (
            <img
              src={this.state.response.data.data.attributes.coverImage.large}
              alt={this.state.response.data.data.attributes.titles.en}
              style={{ width: "100%" }}
            />
          )}
          <main className={classes.main}>
            <div className={classes.display}>
              <Grid className={(classes.center, classes.wrap)}>
                <CardContent className={classes.wrap}>
                  <Grid className={classes.spaceBetween} container spacing={3}>
                    <Grid item md={3}>
                      {/* Anime poster image */}
                      <img
                        className={classes.animeImage}
                        src={
                          this.state.response.data.data.attributes.posterImage
                            .large
                        }
                        alt={this.state.response.data.data.attributes.titles.en}
                      />
                    </Grid>
                    <Grid item md={9}>
                      <Grid item xs={12}>
                        <h1
                          className={classes.center}
                          style={{
                            fontSize: "56px",
                            fontStyle: "italic",
                            lineHeight: "normal",
                          }}
                        >
                          {/* Anime title in English/Japanese */}
                          {this.state.response.data.data.attributes.titles.en}
                          <br />
                          {
                            this.state.response.data.data.attributes.titles
                              .ja_jp
                          }
                        </h1>
                      </Grid>
                      <Grid
                        className={classes.spaceBetween}
                        container
                        spacing={3}
                      >
                        <Grid className={classes.card} item xs={5}>
                          {/* When the anime started */}
                          <h4>
                            Start date:{" "}
                            {this.state.response.data.data.attributes.startDate}
                          </h4>
                        </Grid>
                        <Grid className={classes.card} item xs={5}>
                          {/* Whether or not the anime has ended */}
                          {this.state.response.data.data.attributes.endDate ==
                          null ? (
                            <h4>End Date: TBD</h4>
                          ) : (
                            <h4>
                              End Date:{" "}
                              {this.state.response.data.data.attributes.endDate}
                            </h4>
                          )}
                        </Grid>
                        <Grid className={classes.cardSmall} item xs={2}>
                          {/* Current status of anime */}
                          <h4>
                            Status:{" "}
                            {this.state.response.data.data.attributes.status}
                          </h4>
                        </Grid>
                        <Grid className={classes.cardSmall} item xs={3}>
                          {/* User rating */}
                          <h4>
                            Viewer Rating:{" "}
                            {
                              this.state.response.data.data.attributes
                                .averageRating
                            }
                            /100
                          </h4>
                        </Grid>
                        <Grid className={classes.cardSmall} item xs={3}>
                          {/* Rank compared to other anime */}
                          <h4>
                            Rank among Anime:{" "}
                            {
                              this.state.response.data.data.attributes
                                .popularityRank
                            }
                          </h4>
                        </Grid>
                        {/* Whether or not the anime is NSFW */}
                        <Grid className={classes.cardSmall} item xs={2}>
                          {this.state.response.data.data.attributes.nsfw ===
                          null ? (
                            <h4>NSFW: Safe</h4>
                          ) : (
                            <h4>
                              NSFW:{" "}
                              {this.state.response.data.data.attributes.nsfw}
                            </h4>
                          )}
                        </Grid>
                      </Grid>
                      <div className={classes.btnGroup}>
                        {/* Link to website where the anime can be streamed */}
                        {this.state.response2.data.data[0].attributes.url === null ? (
                          <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<OndemandVideoIcon />}
                          rel="noreferrer noopener"
                          target="_blank"
                          style={{ color: "white", fontSize: "10px" }}
                        >
                          Unwatchable
                        </Button>
                        ) : (
                          <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<OndemandVideoIcon />}
                          href={
                            this.state.response2.data.data[0].attributes.url
                          }
                          rel="noreferrer noopener"
                          target="_blank"
                          style={{ color: "white", fontSize: "10px" }}
                        >
                          Watch
                        </Button>
                        )}
                        {/* Buttons to favorite, mark as watched, or watching */}
                        <Button
                          onClick={() =>
                            this.handleSaveAnime(
                              this.state.response.data.data.attributes
                            )
                          }
                          variant="contained"
                          color="primary"
                          style={{ fontSize: "10px" }}
                          startIcon={<StarsIcon />}
                        >
                          Favorite
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ fontSize: "10px" }}
                          startIcon={<TheatersIcon />}
                        >
                          Watching
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ fontSize: "10px" }}
                          startIcon={<CheckCircleIcon />}
                        >
                          Watched
                        </Button>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <h1
                        style={{
                          fontSize: "48px",
                          fontStyle: "italic",
                        }}
                      >
                        Synopsis:
                      </h1>
                      {/* Age rating if there is one */}
                      {this.state.response.data.data.attributes.ageRating ===
                      null ? (
                        <div
                          style={{
                            fontSize: "28px",
                            fontStyle: "italic",
                            lineHeight: "normal",
                          }}
                        >
                          Age Guide: No rating
                        </div>
                      ) : (
                        <div
                          style={{
                            fontSize: "28px",
                            fontStyle: "italic",
                            lineHeight: "normal",
                          }}
                        >
                          Age Guide:{" "}
                          {this.state.response.data.data.attributes.ageRating}
                        </div>
                      )}
                      {/* Anime synopsis */}
                      <p
                        style={{
                          fontSize: "22px",
                        }}
                      >
                        {this.state.response.data.data.attributes.synopsis}
                      </p>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </div>
            <br />
          </main>
        </div>
      );
    } else {
      return (
        // Loader while anime/manga details are being retrieved
        <div className="ui active dimmer">
          <Loader className="ui massive text">Loading...</Loader>
        </div>
      );
    }
  }
}

export default withStyles(styles, { withTheme: true })(Details);
