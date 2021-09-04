import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://media-exp1.licdn.com/dms/image/C4D03AQHwMPI5yk32kw/profile-displayphoto-shrink_800_800/0/1615317722916?e=1635984000&v=beta&t=qAk4wQ5TBdIvtNu3uFL_QqIhkqoyJAy0JPfE-J1rfuc" />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
