import React, { PureComponent } from 'react';
import { Panel, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import commentsAction from '../actions/commentsActions';
import getDataComments from '../middlewares/commentsMiddleware';

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

class HomeCard extends PureComponent {
  showComments = async (id, history) => {
    const { comments } = this.props;
    const response = await getDataComments(id);
    comments(response.data);
    history.push('/comments');
  };

  render() {
    const { post, history } = this.props;
    return (
      <div>
        <Panel bsSize="small" style={styles.item}>
          <Panel.Heading>{post.title}</Panel.Heading>
          <Panel.Body style={styles.bodyPanel}>
            {post.body}
            <Button bsStyle="danger" onClick={() => this.showComments(post.id, history)}>
              Learn more
            </Button>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  comments: data => dispatch(commentsAction(data))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(HomeCard)
);
