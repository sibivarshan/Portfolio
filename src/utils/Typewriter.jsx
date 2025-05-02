import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-10px); }
`;

const AnimatedWord = styled.span`
  display: inline-block;
  animation: ${fadeInOut} ${props => props.duration}ms ease-in-out forwards;
`;

const Typewriter = ({ words, duration = 4000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setKey(prev => prev + 1); // Change key to restart animation
    }, duration);
    
    return () => clearTimeout(timer);
  }, [currentWordIndex, words, duration]);

  return (
    <AnimatedWord 
      className="highlight" 
      key={key} 
      duration={duration}
    >
      {words[currentWordIndex]}
    </AnimatedWord>
  );
};

export default Typewriter;
