import React from 'react';
import PropTypes from 'prop-types';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink from 'utils/getArticleLink';

import {
  Item,
  Card,
  Image,
  Content,
  Title,
  Source,
  ExternalLink,
} from './styles';

const GridItem = ({ url, title, id }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });

  const LINK_REL = 'nofollow noreferrer noopener';

  return (
    <ExternalLink href={link} rel={LINK_REL} target="_blank">
      <Item>
        <Card>
          <Image src="https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png" />
          <Content>
            <Title>{title}</Title>
            <Source>
              <div>{`// ${site}`}</div>
            </Source>
          </Content>
        </Card>
      </Item>
    </ExternalLink>
  );
};

GridItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GridItem;
