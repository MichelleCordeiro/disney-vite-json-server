import styled from 'styled-components';
import backgroundImg from '../../assets/disney_personagens3.png';


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  `

export const Form = styled.form`
  padding: 13.6rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    line-height: 4.8rem;
    color: ${({ theme }) => theme.COLORS.GREEN_200};
    padding-bottom: 2.5rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0 4rem;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100}
  }

  > a {
    margin-top: 8rem;
    color: ${({ theme }) => theme.COLORS.GREEN_200}
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  justify-content: center;
  filter: brightness(0.7);

`