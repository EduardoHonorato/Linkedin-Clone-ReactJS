import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <img
          src="/media/cover.jpg"
          alt=""
          className="profile-cover"/>

        <img
          src="/media/profile.jpg"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Eduardo Honorato</h1>
        <h2>Front-End Developer (React Native & React JS) @SIGCORP</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
