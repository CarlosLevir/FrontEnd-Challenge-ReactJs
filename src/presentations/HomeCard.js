import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import commentsAction from '../actions/commentsActions';

const styles = {
  item: {
    height: 200,
    maxWidth: 400,
    margin: 5
  },
  bodyPanel: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

const showComments = (id, history) => {
  commentsAction(id);
  history.push('/comments');
};

const HomeCard = withRouter(({ post, history }) => (
  <div>
    <Panel bsSize="small" style={styles.item}>
      <Panel.Heading>{post.title}</Panel.Heading>
      <Panel.Body style={styles.bodyPanel}>
        {post.body}
        <Button bsStyle="danger" onClick={() => showComments(post.id, history)}>
          Learn more
        </Button>
      </Panel.Body>
    </Panel>
  </div>
));

const mapDispatchToProps = dispatch => ({
  commentsAction: id => dispatch(commentsAction(id))
});

export default connect(mapDispatchToProps)(HomeCard);
