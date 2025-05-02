import React from 'react';
import styled from 'styled-components';
import { Bio } from '../utils/Constants';
import SectionHeading from './SectionHeading';

const AboutContainer = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 960px) {
    padding: 60px 0;
  }

  @media (max-width: 640px) {
    padding: 50px 0;
  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
  
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const AboutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const HighlightedText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading>About Me</SectionHeading>
      
      <AboutContent>
        <AboutDetailsContainer>
          <AboutText>
            Hello! I'm <HighlightedText>Sibivarshan M</HighlightedText>, a passionate software engineer and Computer Science student currently pursuing BTech at Amrita Vishwa Vidyapeetham.
          </AboutText>
          
          <AboutText>
            My journey in technology has been driven by my fascination with solving complex problems and building efficient solutions. I specialize in <HighlightedText>Full Stack Development</HighlightedText>, <HighlightedText>Machine Learning</HighlightedText>, and <HighlightedText>Edge Computing</HighlightedText>.
          </AboutText>
          
          <AboutText>
            I have experience working with various technologies including Python, C/C++, Node.js, React.js, and databases like MySQL. My approach combines strong technical skills with effective communication and project management to deliver user-centric solutions.
          </AboutText>
          
          <AboutText>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously enhancing my knowledge in data structures and algorithms.
          </AboutText>
        </AboutDetailsContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
