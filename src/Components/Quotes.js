import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

const Quotes = (props) => {
  return (
    <div className="container">
      <div className="App" id="quote-box">
        <section className="text">
          <h2 className="quote-text" id="text">
            {props.quotes.text}
          </h2>
          <p id="author" className="author-text">
            <span>- {props.quotes.author}</span> <span>author</span>
          </p>
        </section>
        <section className="btn-box">
          <button
            onClick={props.getQuote}
            className="btn btn-primary quote-btn"
            id="new-quote"
          >
            <FaQuoteLeft className="icons" />
            New Quote
          </button>
          <a
            className="quote-btn"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${props.quotes.text}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icons" />
            Tweet Quote
          </a>
        </section>
      </div>
    </div>
  );
};

export default Quotes;
