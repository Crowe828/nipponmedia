import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import "semantic-ui-react";

// Material-UI styles
const useStyles = makeStyles({
  saved: {
    marginTop: "10px",
    width: "100%",
  },
});

export const UserDashboard = () => {
  const classes = useStyles();
  // Access to the currentUser property from the auth reducer state
  const user = useSelector((state) => state.auth.currentUser);
  const [mangas, setMangas] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getMangas();
    getAnimes();
  }, []);

  // Get manga from the db
  const getMangas = () => {
    API.getManga()
      .then((res) => {
        console.log("functionManga", res);
        setMangas(res);
      })
      .catch((err) => console.log(err));
  };
  // Get anime from db
  const getAnimes = () => {
    API.getAnime()
      .then((res) => {
        console.log("functionAnime", res);
        setAnimes(res);
      })
      .catch((err) => console.log(err));
  };
  // Delete manga from db
  const deleteManga = (mangaId) => {
    console.log(mangaId);
    API.deleteManga(mangaId).then((res) => {
      getMangas();
    });
  };
  // Delete anime from db
  const deleteAnime = (animeId) => {
    console.log(animeId);
    API.deleteAnime(animeId).then((res) => {
      getAnimes();
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
              {/* Displays users email */}
              Welcome, {user ? user.email : ""}
            </h3>
          </div>
        </Grid>
        <Grid container className={classes.saved}>
          <Grid item xs={12} md={6}>
            <div
              className="ui massive divided list"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
                Your Favorite Animes:
              </h1>
              {animes.data &&
                animes.data.map((result) => (
                  <div
                    style={{ display: "flex" }}
                    className="item"
                    key={result._id}
                  >
                    <img
                      className="ui avatar image tiny"
                      src={result.img}
                      alt={result.titleEn}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                      className="content"
                    >
                      <div className="header">{result.titleJp}</div>
                      <div className="description">{result.titleEn}</div>
                      <div className="description">
                        Age Rating: {result.ageRating}
                      </div>
                    </div>
                    <button
                      onClick={() => deleteAnime(result._id)}
                      style={{
                        fontSize: "18px",
                        height: "50%",
                        float: "right",
                        color: "white",
                        backgroundColor: "#f44336",
                        borderColor: "#f44336",
                        borderRadius: "14px",
                      }}
                    >
                      remove
                    </button>
                  </div>
                ))}
              {animes.data &&
                console.log("data from console log in component", animes.data)}
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div
              className="ui massive divided list"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
                Your Favorite Mangas:
              </h1>
              {mangas.data &&
                mangas.data.map((result) => (
                  <div
                    className="item"
                    key={result._id}
                    style={{ display: "flex" }}
                  >
                    <img
                      className="ui avatar image tiny"
                      src={result.img}
                      alt={result.titleEn}
                    />
                    <div
                      className="content"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
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
                    {/* Delete manga button */}
                    <button
                      onClick={() => deleteManga(result._id)}
                      style={{
                        fontSize: "18px",
                        height: "50%",
                        float: "right",
                        color: "white",
                        backgroundColor: "#f44336",
                        borderColor: "#f44336",
                        borderRadius: "14px",
                      }}
                    >
                      remove
                    </button>
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
