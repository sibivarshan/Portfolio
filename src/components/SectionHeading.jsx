import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  position: relative;
  margin-bottom: 20px;
  text-align: center;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 70px;
    background: ${({ theme }) => theme.primary};
    border-radius: 20px;
  }
`;

const SectionHeading = ({ children }) => {
  return <Heading>{children}</Heading>;
};

export default SectionHeading;
