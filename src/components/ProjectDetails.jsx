import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 20px;
  backdrop-filter: blur(5px);
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  border-radius: 16px;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bgLight};
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 6px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(90deg);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid ${({ theme }) => theme.textSecondary}20;
`;

const ProjectContent = styled.div`
  padding: 32px;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 24px;
`;

const TechStack = styled.div`
  margin-bottom: 24px;
`;

const TechStackTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 12px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  padding: 6px 14px;
  background: ${({ theme }) => `${theme.primary}20`};
  color: ${({ theme }) => theme.primary};
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  ${({ primary, theme }) => 
    primary ? 
      `
      background: ${theme.primary};
      color: ${theme.buttonText};
      
      &:hover {
        background: ${theme.buttonHover};
        transform: translateY(-3px);
      }
      ` : 
      `
      background: transparent;
      color: ${theme.primary};
      border: 1.5px solid ${theme.primary};
      
      &:hover {
        background: ${theme.primary}20;
        transform: translateY(-3px);
      }
      `}
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const { project } = openModal;
  const modalRef = useRef(null);
  
  useEffect(() => {
    // Prevent scrolling of body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle click outside to close modal
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    
    // Handle ESC key to close modal
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  
  const closeModal = () => {
    setOpenModal({ state: false, project: null });
  };
  
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    },
  };
  
  return (
    <ModalOverlay
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
    >
      <ModalContainer 
        ref={modalRef}
        variants={modalVariants}
      >
        <CloseButton onClick={closeModal}>
          <FaTimes />
        </CloseButton>
        
        <ProjectImage 
          src={project.image || 'https://via.placeholder.com/800x400?text=Project+Image'} 
          alt={project.title}
        />
        
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          
          <TechStack>
            <TechStackTitle>Technologies Used</TechStackTitle>
            <TagsContainer>
              {project.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
          </TechStack>
          
          <ProjectLinks>
            {project.github && (
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub Repository
              </ProjectLink>
            )}
            {project.webapp && (
              <ProjectLink primary href={project.webapp} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectDetails;
