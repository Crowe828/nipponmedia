import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import "./style.css";

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
  },
});

export default function Search(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form style={{ display: "inline-flex", justifyContent: "center" }}>
        <input
          placeholder="Search for an Anime or Manga!"
          name="search"
          onChange={props.handleInputChange}
          className={classes.bar}
        />
        <button className={classes.button} onClick={props.handleFormSubmit}>
          Search
        </button>
        <FormControl className={classes.formControl}>
          <InputLabel id="input">Age</InputLabel>
          <Select
            onChange={handleChange}
            value={category}
            labelId="categoryLabel"
            id="select"
          >
            <MenuItem value="Anime">Anime</MenuItem>
            <MenuItem value="Manga">Manga</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
}
