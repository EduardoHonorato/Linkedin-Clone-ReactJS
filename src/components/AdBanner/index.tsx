import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>LinkedIn Premium - </span>
      Adquira já o plano premium e tenha muitas vantagens!
    </Container>
  );
};

export default AdBanner;
