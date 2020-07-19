import React, { useState, useEffect } from 'react';
import { quotes } from './quotes';
import styled from 'styled-components';

const s = {};

s.wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  max-width: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function QuoteBox() {
  const [quote, setQuote] = useState({ text: 'test', author: 'test' });

  const getRandomQuote = (quotes) => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  useEffect(() => {
    getRandomQuote(quotes);
  });

  const { text, author } = quote;

  return (
    <s.wrapper id="quote-box">
      <h4 id="text">{text}</h4>
      <h5 id="author">{author}</h5>
      <button
        id="new-quote"
        onClick={() => {
          getRandomQuote(quotes);
        }}
      >
        Get another!
      </button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet this!
      </a>
    </s.wrapper>
  );
}
