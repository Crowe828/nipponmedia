import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
    backgroundColor: "black",
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "300px",
    width: "93%",
    marginLeft: "3%",
  },
  saved: {
    marginTop: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    display: "flex",
    textAlign: "center",
  },
}));

export const UserDashboard = () => {
  const classes = useStyles();
  // access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
  const [mangas, setMangas] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getMangas();
    getAnimes();
  }, []);

  const getMangas = () => {
    API.getManga()
      .then((res) => {
        console.log("functionManga", res);
        setMangas(res);
      })
      .catch((err) => console.log(err));
  };
  const getAnimes = () => {
    API.getAnime()
      .then((res) => {
        console.log("functionAnime", res);
        setAnimes(res);
      })
      .catch((err) => console.log(err));
  };
  const deleteAnime = (animeId) => {
    console.log(animeId);
    API.deleteAnime(animeId).then((res) => {
      console.log("function delete anime", res);
    });
  };


  return (
    <>
      <div style={{ marginBottom: "50px" }}>
        <Grid item xs={12}>
          <div
            style={{
              textAlign: "center",
              color: "#000",
              backgroundColor: "#78909c",
              padding: "1px",
            }}
          >
            <h2 style={{ fontSize: "48px", margin: "10px" }}>User Dashboard</h2>
            <h3 style={{ fontSize: "24x", marginBottom: "50px" }}>
              Welcome, {user ? user.email : ""}
            </h3>
          </div>
        </Grid>
        <Grid container className={classes.title}>
          <Grid item xs={6}>
            <h1>Favorite Anime:</h1>
          </Grid>
          <Grid item xs={6}>
            <h1>Favorite Manga:</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.saved}>
          <Grid item xs={6}>
            <div
              className="ui massive divided list"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              {animes.data &&
                animes.data.map((result) => (
                  <div className="item" key={result._id}>
                    <img
                      className="ui avatar image tiny"
                      src={result.img}
                      alt={result.titleEn}
                    />
                    <div className="content">
                      <div className="header">{result.titleJp}</div>
                      <div className="description">{result.titleEn}</div>
                      <div className="description">
                        Age Rating: {result.ageRating}
                      </div>
                      <button onClick={() => deleteAnime(result._id)}>
                        {" "}
                        x{" "}
                      </button>
                    </div>
                  </div>
                ))}
              {animes.data &&
                console.log("data from console log in component", animes.data)}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div
              className="ui massive divided list"
              style={{ marginLeft: "20px", marginRight: "20px" }}
            >
              {mangas.data &&
                mangas.data.map((result) => (
                  <div className="item" key={result._id}>
                    <img
                      className="ui avatar image tiny"
                      src={result.img}
                      alt={result.titleEn}
                    />
                    <div className="content">
                      <div className="header">{result.titleJp}</div>
                      <div className="description">{result.titleEn}</div>
                      {result.ageRating === null ? (
                        <div className="description">Age Rating: N/A</div>
                      ) : (
                        <div className="description">
                          Age Rating: {result.ageRating}
                        </div>
                      )}
                    </div>
                    <button> x </button>
                  </div>
                ))}
              {mangas.data &&
                console.log("data from console log in component", mangas.data)}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserDashboard;
