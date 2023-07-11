import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10rem;
  
  > a {
    width: 48%;
    
    #btnBack {
      background-color: ${({ theme }) => theme.COLORS.GREEN_50};
    }
  }
  
`