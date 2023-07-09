import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding: 2.2rem;
  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;
    font-family: 'Roboto sLAB', 'serif';
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    margin-top: 2.4rem;

    display: flex;
  }
`