import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GREEN_50};
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 3rem auto 0;

  > div:nth-child(2) {
    margin-top: 4rem;
  }

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  > div:nth-child(5) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  margin: -124PX auto 3.2rem;

  position: relative;

  > img{
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  >  label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_200};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

`