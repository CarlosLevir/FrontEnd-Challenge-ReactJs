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
    const { comments } = this.props;
    const renderedComments = comments.map((comment, key) => this.renderItem(comment, key));
    return <div style={styles.container}>{renderedComments}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments
});

export default connect(mapStateToProps)(CommentsPage);
