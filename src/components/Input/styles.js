import styled from 'styled-components';

// container como div e não como input pq um icone será passado como propriedade no index.jsx
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`
