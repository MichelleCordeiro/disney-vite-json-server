import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 105px 150px auto 64px 64px;
  grid-template-areas:
    "brand header"
    "menu search"
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
`

export const Search = styled.div`
  grid-area: search;
  padding: 6.4rem 8rem;
  /* margin-bottom: 5rem; */
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 8rem;
  overflow-y: auto;

  .cards {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 2rem;
  }  
`

export const Person = styled.button`
  width: 35rem;
  height: 15rem;
  padding: 2.2rem;
  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
  
  
  &:hover {
    transform: scale(1.05);
    transition: transform 300ms;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    
    > h2 {
      flex: 1;
      font-family: 'Roboto sLAB', 'serif';
      font-size: 2.rem;
      font-weight: 700;
      text-align: left;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
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

export const Tag = styled.span`
  font-size: 1.6rem;
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`
