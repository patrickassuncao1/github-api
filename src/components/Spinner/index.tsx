import React from 'react';
import { ContainerSpinner } from './style';


const LoadingSpinner: React.FC = () => {
  return (
    <ContainerSpinner >
      <span></span><span></span><span></span><span></span>
    </ContainerSpinner>
  );
}

export default LoadingSpinner;