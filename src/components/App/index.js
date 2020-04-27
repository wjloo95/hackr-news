import React from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { colorsDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={colorsDark}>
      <div>
        <Wrapper>
          <Title>Hacker News</Title>
          <List />
        </Wrapper>
      </div>
    </ThemeProvider>
  );
};

export default App;
