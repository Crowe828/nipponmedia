import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
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
    width: 55,
    minWidth: 55,
    marginLeft: 10,
    marginRight: 10,
  },
  category: {
    marginLeft: 0,
  },
  formControl: {
    height: 55,
    width: 100,
    minWidth: 80,
    marginLeft: 10,
  },
});

export default function Search(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    console.log(event.target.value.toLowerCase());
    setCategory(event.target.value);
  };

  return (
    <div className={classes.container}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
        }}
      >
        <input
          placeholder="Search for an Anime or Manga!"
          name="search"
          onChange={props.handleInputChange}
          className={classes.bar}
          style={{
            fontSize: "16px",
            border: "solid",
            borderRadius: "4px",
            borderWidth: "1px",
            borderColor: "#cac6c6",
            backgroundColor: "#cfd8dc",
            paddingLeft: "15px",
          }}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="dropdown">Type</InputLabel>
          <Select
            labelId="dropdown"
            id="select"
            value={category}
            onChange={handleChange}
            label="Type"
          >
            <MenuItem value="anime">Anime</MenuItem>
            <MenuItem value="manga">Manga</MenuItem>
          </Select>
        </FormControl>
        <button
          type="submit"
          className={classes.button}
          onClick={(e) => props.handleFormSubmit(e, category)}
          style={{
            color: "white",
            backgroundColor: "#81c784",
            border: "none",
            borderRadius: "4px",
          }}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
