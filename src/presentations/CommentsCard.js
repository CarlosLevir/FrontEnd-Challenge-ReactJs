import React from 'react';
import { Panel } from 'react-bootstrap';

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

const Comments = ({ comment }) => (
  <div>
    <Panel bsSize="small" style={styles.item}>
      <Panel.Heading>{comment.name}</Panel.Heading>
      <Panel.Body style={styles.bodyPanel}>
        Email:
        {' '}
        {comment.email}
        {' '}
        {comment.body}
      </Panel.Body>
    </Panel>
  </div>
);

export default Comments;
