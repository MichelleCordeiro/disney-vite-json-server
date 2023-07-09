import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  
  margin-bottom: 0.8rem;
  padding-right: 1.6rem;
  border-radius: 10px;

  > button {
    background: none;
    border: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }
`