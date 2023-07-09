import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  
  height: 5.6rem;
  border: 0;
  padding: 1.6rem;
  margin-top: 1.6rem;
  
  border-radius: 1rem;
  font-weight: 500;

  &disabled {
    opacity: 0.5;
    cursor: wait;
  }
  background-color: ${({ theme }) => theme.COLORS.GREEN_200 };
`