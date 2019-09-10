import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from './Card';
import axios from 'axios';
import styled from 'styled-components'

const dataUrl = 'https://0xseuk5wti.execute-api.us-east-2.amazonaws.com/api/activity_log';

export default function InfiniteScrollCard(props) {
  const [items, setItems] = useState([]);

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    try {
      const response = await axios.get(dataUrl, {});

      setItems(items.concat(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <CardContainer>
          {items.map((i, index) => (
            <Card
              title={i.title}
              description={i.timestamp}
            />
          ))}
        </CardContainer>
      </InfiniteScroll>
    </div>
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`;