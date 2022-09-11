import React from "react";
import "../assets/styles/QuoteBox.css";
import Quotes from "../assets/quotes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quotesIndex: -1,
      text: "Blue = Rolemadelen",
      author: "2b",
    };

    this.populateNewQuote = this.populateNewQuote.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    let q = JSON.parse(JSON.stringify(Quotes));

    this.setState({
      quotes: q.results
    });
  }

  populateNewQuote() {
    if (this.state.quotes.length === 0) {
      console.log("quotes list is empty");
      return;
    }

    let index = Math.floor(Math.random() * this.state.quotes.length);
    while (this.state.quotesIndex === index) {
      index = Math.floor(Math.random() * this.state.quotes.length);
    }

    this.setState({
      quotesIndex: index,
    });

    const quote = this.state.quotes[index];

    document.querySelector("#text").style.opacity = "0";
    document.querySelector("#author").style.opacity = "0";

    setTimeout(() => {
      this.setState({
        text: quote.content,
        author: quote.author,
      });

      document.querySelector("#text").style.opacity = "1";
      document.querySelector("#author").style.opacity = "1";

      let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      document.querySelector(
        "#quote-box"
      ).style.boxShadow = `0 0 10px 1px ${color}`;

      document.querySelector(
        "#new-quote"
      ).style.boxShadow = `0 0 1px 1px ${color}`;

      document.querySelector("#text > svg").style.color = color;
      document.querySelector("#tweet-quote").style.backgroundColor = color;
    }, 300);
  }

  render() {
    const params = {
      text: `${encodeURIComponent('"' + this.state.text + '"')}`,
      author: `${encodeURIComponent(this.state.author)}`,
    };

    return (
      <div id="quote-box">
        <div id="text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p>{this.state.text}</p>
        </div>
        <p id="author">{this.state.author}</p>
        <a
          id="tweet-quote"
          target={"_blank"}
          href={`https://twitter.com/intent/tweet?text=${params.text} - ${params.author}`}
        >
          <i className={"fa fa-twitter"}></i>
        </a>
        <button id="new-quote" onClick={this.populateNewQuote}>
          <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
      </div>
    );
  }
}
