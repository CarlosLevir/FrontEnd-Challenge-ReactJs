import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const styles = {
  item: {
    height: 200,
    maxWidth: 400,
    margin: 5
  }
};

const HomeCard = ({ post }) => (
  <div key={post.id}>
    <Panel bsSize="small" style={styles.item}>
      <Panel.Heading>{post.title}</Panel.Heading>
      <Panel.Body style={{ display: 'flex', flexWrap: 'wrap' }}>
        {post.id}
        {post.userId}
        {post.body}
        <Button bsStyle="danger">Learn more</Button>
      </Panel.Body>
    </Panel>
  </div>
);

export default HomeCard;
