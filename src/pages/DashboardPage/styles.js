import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 105px auto 64px 64px;
  grid-template-areas:
    "brand header"
    "menu content"
    "dashboard content"
    "newperson content"
  ;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`

export const Menu = styled.ul`
  grid-area: menu;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 6.4rem;
  text-align: center;

  > li {
    margin-bottom: 2.4rem;
  }

  .isActive {
    color: ${({ theme }) => theme.COLORS.GREEN_200};
  }
`

export const Content = styled.div`
  grid-area: content;
  width: 100%;
  /* height: 50%; */
  
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto ;
  grid-template-areas:
    "pie bar"
  ;

  .graphs {
    display: grid;
    
    grid-template: "pie bar";
    width: 100%;
    
    .pie {
      grid-area: pie;
      
      .recharts-surface {
        background: #c942ff;
      }
    }
  
    .bar {
      grid-area: bar;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      padding-top: 11rem;
      
      .recharts-surface {
        border: gray 1px solid;
        border-radius: 10px;
      } 
    }
  }
`

export const Dashboard = styled(Link)`
  grid-area: dashboard;

  background-color: ${({ theme }) => theme.COLORS.GREEN_50};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: bold;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.8rem;
  }
`

export const NewPerson = styled(Link)`
  grid-area: newperson;

  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: bold;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.8rem;
  }
`
