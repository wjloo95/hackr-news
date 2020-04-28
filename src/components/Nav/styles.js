import styled from 'styled-components';
import { tablet, mobile } from 'styles/mediaQueries';

const HEIGHT = 80;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: ${HEIGHT}px;
  color: ${({ theme }) => theme.text};
  width: 100%;
  box-shadow: 0 1px 0 0 black;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet} {
    max-width: 96%;
  }
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

export const NavText = styled.span`
  font-size: 25px;
  line-height: 40px;
`;

export const Icon = styled.div.attrs((props) => ({
  type: props.type,
}))`
  margin-left: 12px;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) =>
    props.type === 'sun'
      ? '#f1c40f'
      : props.type === 'moon'
      ? '#8e44ad'
      : 'inherit'};
`;

export const Logo = styled.img`
  height: 40px;
  border-radius: 2px;
  margin-right: 15px;
`;

export const Spacer = styled.div`
  height: ${HEIGHT}px;
`;

export const ExternalLink = styled.a`
  display: flex;
`;

export const LinkWrapper = styled.div`
  display: flex;
`;

export const SocialLink = styled.a`
  margin-left: 16px;
  i {
    color: ${({ theme }) => theme.text};
  }
  ${mobile} {
    margin-left: 0;
    margin-right: 16px;
  }
`;
