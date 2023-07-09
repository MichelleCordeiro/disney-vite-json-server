import styled from 'styled-components';

export const Container = styled.section`
  margin: 1rem 0 2.8rem;

  > h3 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 1rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`