import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Tooltip from "@material-ui/core/Tooltip";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useSelector, useDispatch } from "react-redux/";

import { toggleDarkMode } from "../actions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  iconButtons: {
    marginRight: theme.spacing(1),
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkModeReducer);
  const shell = require("electron").shell;

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" noWrap>
          GIF Browser
        </Typography>

        <div className={classes.grow} />

        <Tooltip title="Developer on GitHub">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => shell.openExternal("https://github.com/GHOSCHT")}
            className={classes.iconButtons}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Developer on Twitter">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => shell.openExternal("https://twitter.com/GHOSCHT")}
            className={classes.iconButtons}
          >
            <TwitterIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Toggle light/dark theme">
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={() => dispatch(toggleDarkMode())}
          >
            {isDarkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
