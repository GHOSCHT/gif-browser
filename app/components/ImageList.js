import React, { useState, useEffect, Component } from "react";
import ImageCard from "./ImageCard";
import { GridList } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  innerFlex: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "space-evenly",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
  },
}));

export default function ImageList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const classes = useStyles();
  const search = useSelector((state) => state.searchReducer);

  useEffect(() => {
    async function fetchAPI() {
      const searchTerm = search;
      const itemLimit = 50;
      const url = `https://api.tenor.com/v1/search?q=${searchTerm}&limit=${itemLimit}`;
      const response = await fetch(url);
      const apiData = await response.json();
      setLoading(false);
      setData(apiData);
    }
    fetchAPI();
  }, [search]);

  if (loading || (!loading && data === undefined)) {
    return <div>loading...</div>;
  }

  if (!loading && data !== null) {
    const images = data.results.map((item) => (
      <ImageCard
        key={item.id}
        src={item.media["0"].tinygif.url}
        hqUrl={item.media["0"].gif.url}
        url={item.url}
      />
    ));
    return <div className={classes.innerFlex}>{images}</div>;
  }
}
