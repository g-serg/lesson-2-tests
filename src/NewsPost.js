import React, { Component } from 'react';
import Comment from './Comment';
import './NewsPost.css';

let id = 0;

function getId() {
  return ++id;
}

class NewsPost extends Component {
  state = {
    commentInput: '',
    comments: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ commentInput: value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { commentInput, comments } = this.state;
      const СommentsPost = { text: commentInput, id: getId() };
      this.setState({
        commentInput: '',
        comments: [...comments, СommentsPost]
      });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    const { text } = this.props;
    const { commentInput, comments } = this.state;
    return (
      <div className="news-post">
        <p>{text}</p>
        {comments.map(({ text, id }) => (
          <Comment key={id} id={id} text={text} onDelete={this.handleDelete} />
        ))}
        <input
          className="comment-input"
          placeholder="Прокоментируем?"
          value={commentInput}
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default NewsPost;
