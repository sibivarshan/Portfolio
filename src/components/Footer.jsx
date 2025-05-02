import React from 'react';
import styled from 'styled-components';
import { Bio } from '../utils/Constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

const FooterContainer = styled.footer`
  padding: 50px 0;
  background: ${({ theme }) => theme.bgLight};
  margin-top: 20px;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 16px;
`;

const FooterLink = styled(LinkScroll)`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin: 12px 0;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
`;

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>SV</Logo>
        
        <FooterLinks>
          <FooterLink to="about" smooth={true} duration={500}>About</FooterLink>
          <FooterLink to="skills" smooth={true} duration={500}>Skills</FooterLink>
          <FooterLink to="experience" smooth={true} duration={500}>Experience</FooterLink>
          <FooterLink to="projects" smooth={true} duration={500}>Projects</FooterLink>
          <FooterLink to="education" smooth={true} duration={500}>Education</FooterLink>
          <FooterLink to="contact" smooth={true} duration={500}>Contact</FooterLink>
        </FooterLinks>
        
        <SocialIcons>
          <SocialIcon href={Bio.github} target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href={Bio.linkedin} target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href={`mailto:${Bio.email}`} aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
        
        <Copyright>
          © {year} Sibivarshan M. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
