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
    padding: 6.4rem 0 0 0;
  }
`

export const Content = styled.div`
  min-width: 700px;
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
      font-size: 3rem;
    }

    #btnDel {
      color: ${({ theme }) => theme.COLORS.GREEN_50};
    }
  }

  > h2 {
    font-size: 2.5rem;
    font-weight: 500;
    padding-bottom: 2rem;
  }

  > p {
    max-width: 700px;
    min-height: auto;

    font-size: 1.8rem;
    text-align: start;
    line-height: 3rem;

    margin-bottom: 4rem;
  }
`
