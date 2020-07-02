import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "345px",
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  media: {
    height: "345px",
  },
});

export default function Image(props) {
  const classes = useStyles();
  const shell = require("electron").shell;

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => shell.openExternal(props.url)}>
        <CardMedia className={classes.media} image={props.src} />
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          onClick={() => shell.openExternal(props.url)}
        >
          Download
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => navigator.clipboard.writeText(props.src)}
        >
          Copy to Clipboard
        </Button>
      </CardActions>
    </Card>
  );
}
