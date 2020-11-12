import React from "react";
import SearchBar from "material-ui-search-bar";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bar: {
    width: 850,
    height: 50,
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  filter: {
    height: 50,
    width: 350,
  },
});

export default function Search() {
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
      <SearchBar className={classes.bar} />
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
    </div>
  );
}

const animeManga = [{ title: "Manga" }, { title: "Anime" }];
