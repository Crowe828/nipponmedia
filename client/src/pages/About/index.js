import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

// Material-UI styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    minHeight: 250,
    lineHeight: "normal",
    padding: theme.spacing(3),
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: theme.palette.text.secondary,
    backgroundColor: "#607d8b",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="about">
      <h1 className="heading">About</h1>
      <p className="paragraph">
        Anime is one of the most, if not the most, prominent form of
        entertainment in Japan. For the past few decades, both anime and manga
        have globally expanded with millions of fans throughout the world.
        Growing up watching shows such as Dragonball Z, Yu Yu Hakusho, Sailor
        Moon, and Naruto are what inspired us to create this website.
      </p>
      <h2 className="heading">What is Anime?</h2>
      <p className="paragraph">
        Anime is a form of Japanese film or telvision. Unlike American cartoons
        that are largely aimed at children, anime is not. There is anime for all
        ages, from childhood, to adolescence, even into adulthood! In fact, the
        influence of anime can be felt throughout the world, shows such as
        Avatar: The Last Airbender were heavily influenced by Anime.
      </p>
      <h2 className="heading">What is Manga?</h2>
      <p className="paragraph">
        Manga is a Japanese style of book that lies somewhere in between Comic
        Book and novel. They are typically black and white, and because it is
        Japanese, you read them right-to-left! While not always the case, manga
        is typically what anime is based on. Series such as Naruto, One Piece,
        and Bleach have led to some of the most popular anime of all time!
      </p>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Paper variant="outlined" className={classes.paper}>
              {/* Contact info */}
              <h1 className="heading">Developed By</h1>
              <div>
                <div style={{ fontStyle: "italic" }}>Christian Rowe</div>
                <a
                  href="https://github.com/Crowe828"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="listLink"
                >
                  <GitHubIcon /> GitHub
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/christiantrowe/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="listLink"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
              <br />
              <div>
                <div style={{ fontStyle: "italic" }}>Brandon Green</div>
                <a
                  href="https://github.com/BrandonGreenOAB"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="listLink"
                >
                  <GitHubIcon /> GitHub
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/brandon-d-green/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="listLink"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </Paper>
          </Grid>
          {/* GitHub repo link */}
          <Grid item xs={12} sm={6}>
            <a
              href="https://github.com/Crowe828/nipponmedia"
              rel="noreferrer noopener"
              target="_blank"
              className="repo"
            >
              <Paper
                variant="outlined"
                className={classes.paper}
                style={{ fontSize: "28px" }}
              >
                GitHub Repo
                <br />
                <GitHubIcon style={{ fontSize: "160px", padding: "25px" }} />
              </Paper>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
