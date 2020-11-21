import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 225,
    padding: theme.spacing(2),
    textAlign: "center",
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
          <Grid item xs={6}>
            <Paper
              variant="outlined"
              className={classes.paper}
              style={{ textAlign: "left" }}
            >
              <h2 className="heading">Developed By</h2>
              <ul className="list">
                <li>
                  Christian Rowe
                  <ul>
                    <li>
                      <a
                        href="https://github.com/Crowe828"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="listLink"
                      >
                        <GitHubIcon /> GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/christiantrowe/"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="listLink"
                      >
                        <LinkedInIcon /> LinkedIn
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Brandon Green
                  <ul>
                    <li>
                      <a
                        href="https://github.com/BrandonGreenOAB"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="listLink"
                      >
                        <GitHubIcon /> GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/brandon-d-green/"
                        rel="noreferrer noopener"
                        target="_blank"
                        className="listLink"
                      >
                        <LinkedInIcon /> LinkedIn
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <a
              href="https://github.com/Crowe828/nipponmedia"
              rel="noreferrer noopener"
              target="_blank"
              className="repo"
            >
              <Paper variant="outlined" className={classes.paper}>
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
