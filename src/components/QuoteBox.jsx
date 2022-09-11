import React from "react";
import axios from "axios";
import "../assets/styles/QuoteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      author: "",
    };

    this.populateNewQuote = this.populateNewQuote.bind(this);
  }

  componentDidMount() {
    const quoteURL = "https://api.quotable.io/random";

    axios.get(quoteURL).then((response) => {
      this.setState({
        text: response.data.content,
        author: response.data.author,
      });
    });
  }

  populateNewQuote() {
    const quoteURL = "https://api.quotable.io/random";

    document.querySelector("#text").style.opacity = "0";
    document.querySelector("#author").style.opacity = "0";

    axios.get(quoteURL).then((response) => {
      this.setState({
        text: response.data.content,
        author: response.data.author,
      });
    });

    setTimeout(() => {
      document.querySelector("#text").style.opacity = "1";
      document.querySelector("#author").style.opacity = "1";

      let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.querySelector(
        "#quote-box"
      ).style.boxShadow = `0 0 20px 0 ${color}`;
      document.querySelector(
        "#new-quote"
      ).style.boxShadow = `0 0 1px 1px ${color}`;
      document.querySelector("#text > svg").style.color = color;
      document.querySelector("#tweet-quote").style.backgroundColor = color;
    }, 500);
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <p>{this.state.text}</p>
        </div>
        <p id="author">{this.state.author}</p>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            '"' + this.state.text + '"'
          )} by ${encodeURIComponent(this.state.author)}`}
        >
          <i className={"fa fa-twitter"}></i>
        </a>
        <button id="new-quote" onClick={this.populateNewQuote}>
          <FontAwesomeIcon icon={faArrowsRotate} />
          {/* new quote */}
        </button>
      </div>
    );
  }
}

export default QuoteBox;
