import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import "./style.css";

// Styling for the search bar and categories
const useStyles = makeStyles({
  bar: {
    width: 650,
    height: 55,
    fontSize: "16px",
    border: "solid",
    borderRadius: "4px",
    borderWidth: "1px",
    borderColor: "#cac6c6",
    backgroundColor: "#cfd8dc",
    paddingLeft: "15px",
  },
  container: {
    marginTop: 15,
    width: "100%",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    height: 55,
    width: 55,
    minWidth: 55,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
    border: "none",
    borderRadius: 4,
    backgroundColor: "#81c784",
    "&:hover": {
      backgroundColor: "#66bb6a",
    },
    "&:active": {
      backgroundColor: "#4caf50",
    },
  },
  formControl: {
    height: 55,
    width: 100,
    minWidth: 80,
    marginLeft: 10,
  },
});

// Passing handle inputchange and handle formsubmit via props. also using handleChange
// to grab the value of the category for the details page

export default function Search(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
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
          placeholder="Select a category and search!"
          name="search"
          onChange={props.handleInputChange}
          className={classes.bar}
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
        <Button
          disableElevation
          className={classes.button}
          variant="contained"
          type="submit"
          /* binding an anonymous funciton to the handleformsubmit so it doesnt call unless clicked
          grabbing category and the event in order to determine whether its Anime or Manga*/
          onClick={(e) => props.handleFormSubmit(e, category)}
        >
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
}
