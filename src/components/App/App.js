import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

const App = (props) => {
  useEffect(() => {
    props.fetchStoriesFirstPage();
  }, [props]);

  const { stories } = props;
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News</Title>
          <List stories={stories} />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
