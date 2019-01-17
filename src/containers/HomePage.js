import React, { Component } from 'react';
import { getPosts } from '../services/api';
import HomeCard from '../presentations/HomeCard';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount = async () => {
    const response = await getPosts();
    this.setState({
      posts: response.data
    });
  };

  renderItem = post => <HomeCard post={post} key={post.id} />;

  render() {
    const { posts } = this.state;
    const postsRendered = posts.map(post => this.renderItem(post));
    return <div style={styles.container}>{postsRendered}</div>;
  }
}

export default HomePage;
