import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ImageCard from './ImageCard';

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  margin: 20px;
  justify-items: center;
`;

export default function ImageList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
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
    return <div></div>;
  }

  if (!loading && data !== null) {
    const images = data.results.map((item) => (
      <ImageCard
        key={item.id}
        src={item.media['0'].tinygif.url}
        hqUrl={item.media['0'].gif.url}
        url={item.url}
      />
    ));
    return <Grid>{images}</Grid>;
  }
}
