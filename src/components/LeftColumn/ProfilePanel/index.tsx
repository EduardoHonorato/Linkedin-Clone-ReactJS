import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQFw1D7MEkOzGg/profile-displaybackgroundimage-shrink_200_800/0/1516996508483?e=1635984000&v=beta&t=3Qxbnp7RKZ01gGPRIqG-0qY8wZnBXcIM2SaPkEidJpM"
          alt=""
          className="profile-cover"/>

        <img
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHwMPI5yk32kw/profile-displayphoto-shrink_800_800/0/1615317722916?e=1635984000&v=beta&t=qAk4wQ5TBdIvtNu3uFL_QqIhkqoyJAy0JPfE-J1rfuc"
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
