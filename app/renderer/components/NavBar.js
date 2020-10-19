import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useSelector, useDispatch } from 'react-redux/';
import { toggleDarkMode } from '../actions';

export default function NavBar() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkModeReducer);
  const shell = require('electron').shell;

  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="h6" noWrap style={{ width: 300 }}>
          GIF Browser
        </Typography>

        <div style={{ width: '100%' }} />

        <Tooltip title="Developer on GitHub">
          <IconButton onClick={() => shell.openExternal('https://github.com/GHOSCHT')}>
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Developer on Twitter">
          <IconButton onClick={() => shell.openExternal('https://twitter.com/GHOSCHT')}>
            <TwitterIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Toggle light/dark theme">
          <IconButton onClick={() => dispatch(toggleDarkMode())}>
            {isDarkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
