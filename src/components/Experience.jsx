import React from 'react';
import styled from 'styled-components';
import { experiences } from '../utils/Constants';
import SectionHeading from './SectionHeading';
import { FiExternalLink } from 'react-icons/fi';

const ExperienceContainer = styled.div`
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

const TimelineContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: ${({ theme }) => theme.timeline};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  
  &:nth-child(odd) {
    left: 0;
    
    &::after {
      right: -12px;
    }
  }
  
  &:nth-child(even) {
    left: 50%;
    
    &::after {
      left: -12px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.primary};
    border: 4px solid ${({ theme }) => theme.bg};
    top: 20px;
    border-radius: 50%;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 60px;
    padding-right: 20px;
    left: 0 !important;
    
    &::after {
      left: 8px !important;
    }
  }
`;

const ExperienceCard = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Company = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
`;

const Date = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
  line-height: 1.5;
`;

const SkillsUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Skill = styled.span`
  padding: 6px 14px;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.primary};
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <SectionHeading>Experience</SectionHeading>
      
      <TimelineContainer>
        {experiences.map((experience) => (
          <TimelineItem key={experience.id}>
            <ExperienceCard>
              <RoleTitle>{experience.role}</RoleTitle>
              <CompanyInfo>
                <Company>{experience.company}</Company>
                <Date>{experience.date}</Date>
              </CompanyInfo>
              <Description>{experience.desc}</Description>
              <SkillsUsed>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>{skill}</Skill>
                ))}
              </SkillsUsed>
              {experience.link && (
                <LinkButton href={experience.link} target="_blank">
                  View Project <FiExternalLink />
                </LinkButton>
              )}
            </ExperienceCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;
