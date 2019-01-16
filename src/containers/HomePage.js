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

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    getPosts()
      .then((response) => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => console.log('error ', error));
  };

  renderItem = post => <HomeCard post={post} />;

  render() {
    const { posts } = this.state;
    const postsRendered = posts.map(post => this.renderItem(post));
    return <div style={styles.container}>{postsRendered}</div>;
  }
}
