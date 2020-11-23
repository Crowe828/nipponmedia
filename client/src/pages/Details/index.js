import React, { Component } from "react";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StarsIcon from "@material-ui/icons/Stars";
import TheatersIcon from "@material-ui/icons/Theaters";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Alert from "@material-ui/lab/Alert";
import API from "../../utils/API";
import UserDashboard from "../UserDashboard";

// Material-UI Styling
const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  spaceBetween: {
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  animeImage: {
    height: "551px",
    width: "390px",
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
    marginTop: "30px",
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

  alert() {
    return (
      <Alert variant="outlined" severity="success">
        Successfully added!
      </Alert>
    );
  }

  // Will render anime details, manga details, or nothing depending on state
  render() {
    const { classes } = this.props;
    {
      /*this will render mangas if clicked on a manga from the main page */
    }
    if (this.state.type === "manga") {
      return (
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              style={{
                fontWeight: "bold",
                fontSize: "48px",
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              {/* Page titles English/Japanese */}
              {this.state.response.data.data.attributes.titles.en}
              <br />
              {this.state.response.data.data.attributes.titles.ja_jp}
            </Grid>
            {/* Manga cover */}
            <Grid
              item
              xs={12}
              sm={5}
              md={4}
              lg={3}
              style={{ textAlign: "center" }}
            >
              <img
                className={classes.mangaImage}
                src={this.state.response.data.data.attributes.posterImage.large}
                alt={this.state.response.data.data.attributes.titles.en}
              />
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Synopsis:
              </Typography>
              {/* If there is no age rating, say so*/}
              {this.state.response.data.data.attributes.ageRating === null ? (
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "normal",
                  }}
                >
                  Age Guide: No rating
                </div>
              ) : (
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "normal",
                  }}
                >
                  Age Guide: {/* If there is, display it */}
                  {this.state.response.data.data.attributes.ageRating}
                </div>
              )}
              <Typography
                style={{
                  fontSize: "18px",
                }}
              >
                {/* Snyopsis */}
                {this.state.response.data.data.attributes.synopsis}
              </Typography>
            </Grid>
          </Grid>
          <CardContent>
            <Grid className={classes.spaceBetween} container spacing={3}>
              <Grid className={classes.card} item xs={5}>
                <Typography>
                  Start date: {/* When the manga started */}
                  {this.state.response.data.data.attributes.startDate}{" "}
                </Typography>
              </Grid>
              <Grid className={classes.card} item xs={5}>
                {/* If the manga has not ended say TBD. If it has, display the end date */}
                {this.state.response.data.data.attributes.endDate == null ? (
                  <Typography component={"span"}>End Date: TBD</Typography>
                ) : (
                  <Typography component={"span"}>
                    End Date: {this.state.response.data.data.attributes.endDate}
                  </Typography>
                )}
              </Grid>
              <Grid className={classes.cardSmall} item xs={4} sm={2}>
                <Typography>
                  Status:{" "}
                  {/* Is the manga still being made or has it finished */}
                  {this.state.response.data.data.attributes.status}
                </Typography>
              </Grid>
              <Grid className={classes.cardSmall} item xs={4} sm={2}>
                <Typography>
                  {/* Reader rating out of 100 */}
                  Reader Rating:{" "}
                  {this.state.response.data.data.attributes.averageRating}
                  /100
                </Typography>
              </Grid>
              <Grid className={classes.cardSmall} item xs={4} sm={2}>
                {/* Popularity */}
                <Typography>
                  Rank among Manga:{" "}
                  {this.state.response.data.data.attributes.popularityRank}
                </Typography>
              </Grid>
              <Grid className={classes.cardSmall} item xs={4} sm={2}>
                {this.state.response.data.data.attributes.nsfw === null ? (
                  // If it's NSFW, say so. If it is, display that as well
                  <Typography>NSFW: Safe</Typography>
                ) : (
                  <Typography>
                    NSFW: {this.state.response.data.data.attributes.nsfw}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <div className={classes.btnGroup}>
              {/* Buttons to save manga */}
              <Button
                onClick={() =>
                  this.handleSaveManga(this.state.response.data.data.attributes)
                }
                variant="contained"
                color="primary"
                size="large"
                startIcon={<StarsIcon />}
              >
                Favorite
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<MenuBookIcon />}
              >
                Reading
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CheckCircleIcon />}
              >
                Read
              </Button>
            </div>
          </CardContent>
        </div>
      );
    } else if (this.state.type === "anime") {
      {
        /*returning animes if clicked on an anime from the main page */
      }
      return (
        <>
          {/* Cover image */}
          <img
            src={this.state.response.data.data.attributes.coverImage.large}
            alt={this.state.response.data.data.attributes.titles.en}
            style={{ width: "100%" }}
          />
          <div className={classes.root}>
            <Grid container spacing={6}>
              <Grid
                item
                xs={12}
                style={{
                  fontWeight: "bold",
                  fontSize: "48px",
                  lineHeight: "normal",
                  textAlign: "center",
                }}
              >
                {/* Page titles English/Japanese */}
                {this.state.response.data.data.attributes.titles.en}
                <br />
                {this.state.response.data.data.attributes.titles.ja_jp}
              </Grid>
              {/* Anime poster art */}
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                style={{ textAlign: "center" }}
              >
                <img
                  className={classes.animeImage}
                  src={
                    this.state.response.data.data.attributes.posterImage.large
                  }
                  alt={this.state.response.data.data.attributes.titles.en}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={8}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  Synopsis:
                </Typography>
                {/* Age rating */}
                {this.state.response.data.data.attributes.ageRating === null ? (
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    Age Guide: No rating
                  </div>
                ) : (
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      lineHeight: "normal",
                    }}
                  >
                    Age Guide:{" "}
                    {this.state.response.data.data.attributes.ageRating}
                  </div>
                )}
                <Typography
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {this.state.response.data.data.attributes.synopsis}
                </Typography>
              </Grid>

              <CardContent>
                <Grid className={classes.spaceBetween} container spacing={3}>
                  <Grid className={classes.card} item xs={5}>
                    {/* Anime start/end date */}
                    <Typography>
                      Start date:{" "}
                      {this.state.response.data.data.attributes.startDate}{" "}
                    </Typography>
                  </Grid>
                  <Grid className={classes.card} item xs={5}>
                    {this.state.response.data.data.attributes.endDate ==
                    null ? (
                      <Typography component={"span"}>End Date: TBD</Typography>
                    ) : (
                      <Typography component={"span"}>
                        End Date:{" "}
                        {this.state.response.data.data.attributes.endDate}
                      </Typography>
                    )}
                  </Grid>

                  <Grid className={classes.cardSmall} item xs={4} sm={2}>
                    <Typography>
                      {/* Is the anime finished or not */}
                      Status: {this.state.response.data.data.attributes.status}
                    </Typography>
                  </Grid>
                  <Grid className={classes.cardSmall} item xs={4} sm={2}>
                    <Typography>
                      Viewer Rating: {/* Rating out of 100 */}
                      {this.state.response.data.data.attributes.averageRating}
                      /100
                    </Typography>
                  </Grid>
                  <Grid className={classes.cardSmall} item xs={4} sm={2}>
                    <Typography>
                      {/* Popularity */}
                      Rank among Anime:{" "}
                      {this.state.response.data.data.attributes.popularityRank}
                    </Typography>
                  </Grid>
                  <Grid className={classes.cardSmall} item xs={4} sm={2}>
                    {this.state.response.data.data.attributes.nsfw === null ? (
                      // NSFW or not
                      <Typography>NSFW: Safe</Typography>
                    ) : (
                      <Typography>
                        NSFW: {this.state.response.data.data.attributes.nsfw}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
                <div className={classes.btnGroup}>
                  {/* Streaming Links */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<OndemandVideoIcon />}
                    href={this.state.response2.data.data[0].attributes.url}
                    rel="noreferrer noopener"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    Watch
                  </Button>
                  {/* Favorite */}
                  <Button
                    onClick={() =>
                      this.handleSaveAnime(
                        this.state.response.data.data.attributes
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<StarsIcon />}
                  >
                    Favorite
                  </Button>
                  {/* Watching */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<TheatersIcon />}
                  >
                    Watching
                  </Button>
                  {/* Watched */}
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<CheckCircleIcon />}
                  >
                    Watched
                  </Button>
                </div>
              </CardContent>
            </Grid>
          </div>
        </>
      );
    } else {
      return (
        // Spinner animation plays while details page is loading
        <div className="ui active dimmer">
          <Loader className="ui massive text">Loading...</Loader>
        </div>
      );
    }
  }
}

// Exporting with styles since this is a Class component
export default withStyles(styles, { withTheme: true })(Details);
