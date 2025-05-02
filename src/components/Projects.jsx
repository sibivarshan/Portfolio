import React from 'react';
import styled from 'styled-components';
import { projects } from '../utils/Constants';
import SectionHeading from './SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsContainer = styled.div`
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

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ProjectImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const ProjectDetails = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 16px;
  flex: 1;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tag = styled.span`
  padding: 5px 12px;
  background-color: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ViewAllButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 35px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: scale(1.05);
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const handleOpenModal = (project) => {
    setOpenModal({ state: true, project });
  };

  return (
    <ProjectsContainer id="projects">
      <SectionHeading>Projects</SectionHeading>
      
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            onClick={() => handleOpenModal(project)}
          >
            <ProjectImageContainer>
              <ProjectImage 
                src={project.image || 'https://via.placeholder.com/300x200?text=Project+Image'} 
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
              />
            </ProjectImageContainer>
            <ProjectDetails>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsContainer>
                {project.tags.slice(0, 4).map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
                {project.tags.length > 4 && <Tag>+{project.tags.length - 4}</Tag>}
              </TagsContainer>
              <LinksContainer>
                {project.github && (
                  <ProjectLink 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Github"
                  >
                    <FiGithub />
                  </ProjectLink>
                )}
                {project.webapp && (
                  <ProjectLink 
                    href={project.webapp} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Live Demo"
                  >
                    <FiExternalLink />
                  </ProjectLink>
                )}
              </LinksContainer>
            </ProjectDetails>
          </ProjectCard>
        ))}
      </ProjectGrid>
      
      <ViewAllButton href="https://github.com/sibivarshan" target="_blank" rel="noopener noreferrer">
        View All Projects <FiExternalLink />
      </ViewAllButton>
    </ProjectsContainer>
  );
};

export default Projects;
