import React, { memo } from 'react';
import Helmet from 'react-helmet/lib/Helmet';
import Form from 'Components/Forms/AddForm';
import CardList from 'Components/CardList';
import { useSelector } from 'react-redux';

export const Main = () => {
  const cards = useSelector(state => state.cards.ids.map(id => {
    const allCards = state.cards.entities;

    return allCards[id];
  }));

  return (
    <div>
      <Helmet>
        <title>Main</title>
        <meta property="og:title" content="Main"/>
        <meta name="twitter:title" content="Main"/>
        <meta name="og:image:alt" content="Main"/>
        <link rel="canonical" href="https://test.com" />
        <meta property="og:url" content="https://test.com" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Test" />
        <meta property="og:type" content="page" />
        <meta name="description" content="Main" />
        <meta property="og:description" content="Main" />
      </Helmet>

      <Form />

      <CardList
        cards={cards}
      />
    </div>
  );
};

export default memo(Main);
