import React from 'react';
import styled from 'styled-components';
import { skills } from '../utils/Constants';
import SectionHeading from './SectionHeading';

const SkillsContainer = styled.div`
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

const SkillsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

const SkillCategory = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 20px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 4px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 14px 22px;
  }
  
  @media (max-width: 500px) {
    padding: 12px 16px;
  }
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  
  @media (max-width: 500px) {
    width: 32px;
    height: 32px;
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SectionHeading>Skills</SectionHeading>
      
      <SkillsContent>
        {skills.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillImage src={skill.image} alt={skill.name} />
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
