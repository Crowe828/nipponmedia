import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css"

const useStyles = makeStyles({
  bar: {
    width: 650,
    height: 50,
  },
  container: {
    width: "100%",
    marginTop: 15,
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  filter: {
    height: 40,
    width: 250,
    
  },
  button: {
    height: 55,
    marginLeft: 10,
    marginRight: 10,
  },
  category: {
    marginLeft: 0,
  }
});

export default function Search(props) {
  const classes = useStyles();
  const options = animeManga.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });
  return (
    <div className={classes.container}>
      <form style={
        {display: "inline-flex", justifyContent: "center"}
      }>
        <input placeholder="Search for an Anime or Manga!" name="search" onChange={props.handleInputChange} className={classes.bar} />
        <button className={classes.button} onClick={props.handleFormSubmit}>Search</button>
        <Autocomplete className={classes.filter}
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              className={classes.filter}
              {...params}
              label="Category"
              variant="outlined"
            />
          )}
        />
      </form>
    </div>
  );
}

const animeManga = [{ title: "Manga" }, { title: "Anime" }];
