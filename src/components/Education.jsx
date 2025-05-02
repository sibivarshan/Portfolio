import React from 'react';
import styled from 'styled-components';
import { education } from '../utils/Constants';
import SectionHeading from './SectionHeading';
import { FaGraduationCap } from 'react-icons/fa';

const EducationContainer = styled.div`
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

const EducationList = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const EducationItem = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  padding: 30px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    border-radius: 5px 0 0 5px;
  }
`;

const SchoolDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const School = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SchoolIcon = styled.div`
  background: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Date = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => `${theme.primary}10`};
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: 500;
`;

const Degree = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 10px;
`;

const Grade = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 15px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.5;
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <SectionHeading>Education</SectionHeading>
      
      <EducationList>
        {education.map((edu) => (
          <EducationItem key={edu.id}>
            <SchoolDetails>
              <School>
                <SchoolIcon>
                  <FaGraduationCap />
                </SchoolIcon>
                {edu.school}
              </School>
              <Date>{edu.date}</Date>
            </SchoolDetails>
            <Degree>{edu.degree}</Degree>
            <Grade>{edu.grade}</Grade>
            <Description>{edu.desc}</Description>
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
