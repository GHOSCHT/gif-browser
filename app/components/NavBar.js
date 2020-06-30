import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6" noWrap>
            GIF Viewer
          </Typography>

          <div className={classes.grow} />

          <Tooltip title="Toggle light/dark theme">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <BrightnessHighIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
