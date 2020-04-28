import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from 'components/List';
import Grid from 'components/Grid';
import Nav from 'components/Nav';
import Loader from 'components/Loader';
import { colorsDark, colorsLight } from 'styles/palette';

import { Wrapper } from './styles';

class App extends Component {
  componentDidMount() {
    this.props.fetchStoriesFirstPage();
    this.setBodyBackgroundColor();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme) {
      this.setBodyBackgroundColor();
    }
  }

  setBodyBackgroundColor() {
    if (this.props.theme === 'light') {
      document.body.style = `background-color: ${colorsLight.background};`;
    } else {
      document.body.style = `background-color: ${colorsDark.background};`;
    }
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStories, theme, layout } = this.props;

    return (
      <ThemeProvider theme={theme === 'light' ? colorsLight : colorsDark}>
        <>
          <Nav />
          <Wrapper>
            <InfiniteScroll
              dataLength={stories.length}
              next={this.fetchStories}
              hasMore={hasMoreStories}
              loader={<Loader />}
              style={{ height: '100%', overflow: 'visible' }}
            >
              {layout === 'list' ? (
                <List stories={stories} />
              ) : (
                <Grid stories={stories} />
              )}
            </InfiniteScroll>
          </Wrapper>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
