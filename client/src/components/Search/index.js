import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bar: {
    width: 850,
    height: 50,
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: 15,
  },
  filter: {
    height: 50,
    width: 350,
  },
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
      <form>
        <input name="search" onChange={props.handleInputChange} className={classes.bar} />
        <button onClick={props.handleFormSubmit}>Search</button>
        <Autocomplete
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              className={classes.filter}
              {...params}
              label="With categories"
              variant="outlined"
            />
          )}
        />
      </form>
    </div>
  );
}

const animeManga = [{ title: "Manga" }, { title: "Anime" }];
