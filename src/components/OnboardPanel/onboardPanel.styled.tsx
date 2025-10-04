import styled from "styled-components";


export const OnboardCard = styled.div`
  max-width: 800px;
  min-width: 800px;
  height: 500px;
  padding: 0 4rem;
  margin-left: 220px;
  /* Add bottom padding to account for fixed footer */
  padding-bottom: 24px;

  @media (max-width: 768px) {
    max-width: 100%;
    min-width: auto;
    padding: 0 1rem;
    margin-left: 0;
    height: 650px;
    /* Ensure enough bottom padding on mobile for fixed footer */
    padding-bottom: 36px;

  }
`;

export const OnboardTitle = styled.div`
  border-bottom: 1px solid var(--grey200);
  padding: 12px 0;

  h1 {
    font-size: 36px;
  }

  p {
    color: var(--grey600);
  }
`;



export const OnboardActions = styled.div`
  z-index: 90;
  background-color: var(--beige);
  -webkit-backdrop-filter: blur(25px);
  backdrop-filter: blur(25px);
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  min-height: 64px;
  max-height: 104px;
  padding: 8px 24px;
  display: flex;
  position: fixed;
  bottom: 10;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    height: 56px;
    min-height: 56px;
    max-height: 56px;
    padding: 6px 12px;
    /* on mobile keep the actions in-flow so they're directly under content */
    position: static;
    bottom: auto;
    margin-top: 12px;
    -webkit-overflow-scrolling: touch;
    /* Ensure footer doesn't block touch events above it */
    pointer-events: auto;
    
    /* Re-enable pointer events for the button */
    button {
      pointer-events: auto;
    }
  }
`;

export const OnboardActionsCta = styled.button<{ $disabled?: boolean; $loading?: boolean }>`
    background-color: ${props => 
        props.$disabled ? 'var(--grey200)' : 
        props.$loading ? 'var(--orange400)' : 'var(--orange500)'};
    color: ${props => props.$disabled ? 'var(--grey600)' : 'var(--primary-white)'};
    border: ${props => props.$disabled ? 'none' : '1px solid var(--primary-black)'};
    cursor: ${props => 
        props.$disabled ? 'not-allowed' : 
        props.$loading ? 'wait' : 'pointer'};
    letter-spacing: 0.015rem;
    white-space: nowrap;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 120px;
    margin-left: 0;
    margin-right: 0;
    font-size: 16px;
    line-height: 1.5em;
    transition: background-color 0.25s;
    display: flex;
    position: relative;
    overflow: hidden;
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 50px;
  
  span {
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    animation: bounce 1.2s infinite ease-in-out;
    
    &:nth-child(1) {
      animation-delay: -0.24s;
    }
    
    &:nth-child(2) {
      animation-delay: -0.12s;
    }
    
    &:nth-child(3) {
      animation-delay: 0s;
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }
`;