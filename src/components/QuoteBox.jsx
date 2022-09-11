import React from "react";
import axios from "axios";
import "../assets/styles/QuoteBox.css";

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
    this.populateNewQuote();
  }

  populateNewQuote() {
    // const quoteURL = "https://api.quotable.io/random";

    // axios.get(quoteURL).then((response) => {
    //   this.setState({
    //     text: response.data.content,
    //     author: response.data.author,
    //   });
    // });

    this.setState({
      text: "If you have knowledge, let others light their candles in it.",
      author: "Margaret Fuller",
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <i className="fa fa-quote-left"></i>
          <p>{this.state.text}</p>
        </div>
        <p id="author">{this.state.author}</p>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          tweet
        </a>
        <button id="new-quote" onClick={this.populateNewQuote}>
          new quote
        </button>
      </div>
    );
  }
}

export default QuoteBox;
