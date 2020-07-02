import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    marginTop: "80px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    width: "700px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: "10px",
  },
  divider: {
    height: "28px",
    margin: "4px",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search Tenor"
          inputProps={{ "aria-label": "Search Tenor" }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
