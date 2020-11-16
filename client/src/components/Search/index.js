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
          placeholder=" Search for an Anime or Manga!"
          name="search"
          onChange={props.handleInputChange}
          className={classes.bar}
          style={{
            fontSize: "16px",
            border: "solid",
            borderRadius: "4px",
            borderWidth: "1px",
            borderColor: "#cac6c6",
          }}
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="input">Age</InputLabel>
          <Select
            onChange={handleChange}
            value={category}
            labelId="categoryLabel"
            id="select"
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
          backgroundColor: "#f44336",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Search
      </button> 
      </form>
    </div>
  );
}
