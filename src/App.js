import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Quotes from "./Components/Quotes";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  const [quotes, setQuotes] = useState("");
  const year = new Date().getFullYear();

  function getQuote() {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      })
      .catch((error) => alert(error));
  }

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <main className="main">
      <Header />
      <Quotes getQuote={getQuote} quotes={quotes} />
      <Footer year={year} />
    </main>
  );
}
