import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    grid-area: content;
    overflow-y: auto;
    
    display: flex;
    padding: 6.4rem 0;
  }
  `;

export const Links = styled.ul`
  list-style: none;
  
  > li {
    margin-top: 1.2rem;
    
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  `

export const Content = styled.div`
  min-width: 550px;
  height: min-content;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 7rem;
    line-height: 6rem;

    h1 {
      font-size: 4rem;
    }
  }

  > h2 {
    font-size: 3rem;
    font-weight: 500;
    padding-bottom: 2rem;
  }

  > p {
    max-width: 550px;
    text-align: justify;
    margin-bottom: 2.4rem;
    line-height: 2.5rem;
  }

`