import React, { memo }  from 'react';
import Helmet from 'react-helmet/lib/Helmet';
import CardList from 'Components/CardList';
import { useSelector } from 'react-redux';

export const Favourite = () => {
  const cards = useSelector(state => {
    const favourite = [];

    state.cards.ids.forEach(id => {
      const allCards = state.cards.entities;

      if (allCards[id].isFavourite) {
        favourite.push(allCards[id]);
      }
    });

    return favourite;
  });

  return (
    <div>
      <Helmet>
        <title>Favourite</title>
        <meta property="og:title" content="Favourite"/>
        <meta name="twitter:title" content="Favourite"/>
        <meta name="og:image:alt" content="Favourite"/>
        <link rel="canonical" href="https://test.com" />
        <meta property="og:url" content="https://test.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Favourite" />
        <meta property="og:type" content="page" />
        <meta name="description" content="Favourite" />
        <meta property="og:description" content="Favourite" />
      </Helmet>

      <h1
        style={{
          padding: '0 10px'
        }}
      >
        Favourite:
      </h1>

      <CardList
        cards={cards}
      />
    </div>
  );
};

export default memo(Favourite);
