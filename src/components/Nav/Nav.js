import React from 'react';

import {
  Header,
  Spacer,
  NavSection,
  Content,
  Icon,
  Logo,
  ExternalLink,
} from './styles';

const Nav = ({ theme, setTheme }) => (
  <div>
    <Header>
      <Content>
        <NavSection>
          <ExternalLink href="https://gitconnected.com" target="_blank">
            <Logo src="https://gitconnected.com/public/meta/favicon/gc-fav.png" />{' '}
            gitconnected
          </ExternalLink>
        </NavSection>
        <NavSection>
          {theme === 'light' ? (
            <Icon onClick={() => setTheme('dark')}>
              <i className="fas fa-moon" />
            </Icon>
          ) : (
            <Icon onClick={() => setTheme('light')}>
              <i className="fas fa-sun" />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </div>
);

export default Nav;
