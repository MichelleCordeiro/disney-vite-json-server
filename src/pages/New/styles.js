import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }

`

export const Form = styled.form`
  max-width: 700px;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.6rem;
    
    h1 {
      font-family: 'Roboto Slab', serif;
      font-size: 2.8rem;
    }

    a {
      font-style: 2rem;
      color: ${({ theme }) => theme.COLORS.GREEN_50};
    }
  }

  Textarea {
    margin-bottom: 3rem;
  }

  Section {
    margin-bottom: 0;

    .tags {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      
      div {
        min-width: 270px;
        margin-bottom: 1.2rem;
        padding: 0;
        
        input {
          font-size: 1.5rem;
          width: 100%;
          border-radius: 10px;
          cursor: pointer;
        }
      }

      .isActive {
        background-color: ${({ theme }) => theme.COLORS.GREEN_100} !important;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        
        input{
          color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
      }
    }
  }

`