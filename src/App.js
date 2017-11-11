import React, { Component } from 'react';
import NewsPost from './NewsPost';

let id = 0;

function getId() {
  return ++id;
}

class App extends Component {
  state = {
    newsInput: '',
    news: []
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({ newsInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { newsInput, news } = this.state;
      const NewsPost = { text: newsInput, id: getId() };
      this.setState({ newsInput: '', news: [...news, NewsPost] });
    }
  };

  render() {
    const { newsInput, news } = this.state;
    return (
      <div>
        <input
          value={newsInput}
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className="App">{news.map(() => <NewsPost />)}</div>
      </div>
    );
  }
}

export default App;
