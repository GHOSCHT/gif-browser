import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: '345px',
    marginTop: '10px',
  },
  media: {
    height: '345px',
  },
});

function downloadImage(url) {
  const fs = require('fs');
  const request = require('request');

  var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename));
    });
  };

  const app = require('electron').remote;
  var dialog = app.dialog;

  const dialogOptions = {
    title: 'Save GIF',
    filters: [
      { name: 'Image', extensions: ['gif'] },
      { name: 'All Files', extensions: ['*'] },
    ],
  };

  const fileName = dialog.showSaveDialogSync(dialogOptions);
  if (fileName !== undefined) {
    download(url, fileName);
  }
}

export default function Image(props) {
  const classes = useStyles();
  const shell = require('electron').shell;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => shell.openExternal(props.url)}>
        <CardMedia className={classes.media} image={props.src} />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" onClick={() => downloadImage(props.hqUrl)}>
          Download
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => navigator.clipboard.writeText(props.hqUrl)}>
          Copy to Clipboard
        </Button>
      </CardActions>
    </Card>
  );
}
