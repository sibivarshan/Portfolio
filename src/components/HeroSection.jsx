import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Bio } from '../utils/Constants';
import Typewriter from '../utils/Typewriter';
import { Link as LinkScroll } from 'react-scroll';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
  position: relative;
  z-index: 1;
  min-height: 100vh;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 60px 16px;
    min-height: unset;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  gap: 24px;
  animation: ${fadeIn} 1s ease forwards;
`;

const Greeting = styled.div`
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: ${({ theme }) => theme.primary};
  margin-bottom: -20px;
  font-weight: 500;
`;

const Title = styled.div`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.2;
`;

const TextLoop = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 600;
  margin-top: -10px;
  
  .highlight {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const SubTitle = styled.div`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.5;
  max-width: 700px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 16px;
  align-items: center;
  
  @media (max-width: 640px) {
    flex-wrap: wrap;
  }
`;

const Button = styled(LinkScroll)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ theme, primary }) => primary ? theme.primary : 'transparent'};
  color: ${({ theme, primary }) => primary ? theme.buttonText : theme.primary};
  padding: 12px 24px;
  border-radius: 50px;
  border: 1.8px solid ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    background: ${({ theme, primary }) => primary ? theme.buttonHover : 'rgba(100, 255, 218, 0.1)'};
  }

  @media (max-width: 640px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

const ResumeButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  padding: 12px 24px;
  border-radius: 50px;
  border: 1.8px solid ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.05);
    background: rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 640px) {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroContent>
        <Greeting>Hi, I am</Greeting>
        <Title>{Bio.name}</Title>
        <TextLoop>
          I am a <Typewriter words={Bio.roles} />
        </TextLoop>
        <SubTitle>{Bio.description}</SubTitle>
        
        <ButtonContainer>
          <Button primary="true" to="projects" smooth={true} duration={500}>
            View Projects
          </Button>
          <ResumeButton href={Bio.resume} target="_blank">
            <FiDownload /> Resume
          </ResumeButton>
        </ButtonContainer>
        
        <SocialContainer>
          <SocialIcon href={Bio.github} target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href={`mailto:${Bio.email}`} aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
        </SocialContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
