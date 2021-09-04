import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1639008000&v=beta&t=FTMSjgp0pAaFxjHmiouRemYeqig8-nbjteiZeKCnccw" alt="Google" />
          <Column>
            <h3>Google</h3>
            <h4>22.207.562 seguidores</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://media-exp1.licdn.com/dms/image/C5622AQE6lbZQ6_3bVg/feedshare-shrink_800/0/1628722802264?e=1633564800&v=beta&t=rELRcJ49R5rj1zhITCIwMqsLv7Slwix2lWE766HNOEE"
          alt="Google Education"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
