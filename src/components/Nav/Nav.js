import React from 'react';

import {
  Header,
  Spacer,
  NavSection,
  NavText,
  Content,
  Icon,
  Logo,
  ExternalLink,
} from './styles';

const Nav = ({ theme, layout, setLayout, setTheme }) => (
  <>
    <Header>
      <Content>
        <NavSection>
          <ExternalLink href="https://gitconnected.com" target="_blank">
            <Logo src="https://apprecs.org/gp/images/app-icons/300/64/com.ifdefined.hackernews.jpg" />{' '}
            <NavText>Hackr News</NavText>
          </ExternalLink>
        </NavSection>
        <NavSection>
          {layout === 'list' ? (
            <Icon onClick={() => setLayout('grid')}>
              <i className="fas fa-th-list" />
            </Icon>
          ) : (
            <Icon onClick={() => setLayout('list')}>
              <i className="fas fa-th-large" />
            </Icon>
          )}
          {theme === 'light' ? (
            <Icon onClick={() => setTheme('dark')} type="sun">
              <i className="fas fa-sun"></i>
            </Icon>
          ) : (
            <Icon onClick={() => setTheme('light')} type="moon">
              <i className="fas fa-moon"></i>
            </Icon>
          )}
          <Icon>
            <i className="fas fa-heart"></i>
          </Icon>
          <Icon>
            <i className="fas fa-user"></i>
          </Icon>
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </>
);

export default Nav;
