import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentsCard from '../presentations/CommentsCard';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class CommentsPage extends Component {
  renderItem = (comment, key) => <CommentsCard comment={comment} key={key} />;

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { comments } = this.props.comments;
    const renderedComments = comments.map((comment, key) => this.renderItem(comment, key));
    return <div style={styles.container}>{renderedComments}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsPage);
