import React from 'react';
import styled from 'styled-components';
import SectionHeading from './SectionHeading';
import { Bio } from '../utils/Constants';
import { FiMail } from 'react-icons/fi';

const ContactContainer = styled.div`
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

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 600px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 15px;
`;

const ContactInfoDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 30px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => `${theme.primary}20`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
`;

const ContactInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const ContactInfoValue = styled.a`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionHeading>Contact Me</SectionHeading>
      
      <ContactWrapper>
        <ContactInfo>
          <div>
            <ContactInfoTitle>Let's Talk</ContactInfoTitle>
            <ContactInfoDesc>
              Feel free to reach out to me for any questions, project collaborations, 
              or just to say hello. I'm always open to discussing new opportunities and ideas.
            </ContactInfoDesc>
          </div>
          
          <ContactInfoItem>
            <ContactInfoIcon>
              <FiMail />
            </ContactInfoIcon>
            <ContactInfoText>
              <ContactInfoLabel>Email</ContactInfoLabel>
              <ContactInfoValue href={`mailto:${Bio.email}`}>{Bio.email}</ContactInfoValue>
            </ContactInfoText>
          </ContactInfoItem>
        </ContactInfo>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
