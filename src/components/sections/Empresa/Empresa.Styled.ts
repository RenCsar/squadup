import styled from "styled-components";

export const Container = styled.div`
  & .container-geral {    
    background: rgba(0, 0, 0, 0.5);
    padding-inline: calc(var(--padding-lateral) + 40px);
    padding-block: 50px;
    height: 500px;
    color: var(--font-color-primary);
    display: flex;
    align-items: center;

    & .text-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 500px;
      gap: 20px;
      width: 550px;
      font-weight: bold;
      font-size: 20px;
      text-align: justify;

      & h1 {
        font-size: 35px;
      }
    }
  }

  @media (max-width: 650px) {
    & .container-geral {
      padding-inline: calc(var(--padding-lateral) + 40px); 
    }
  }

  @media (max-width: 570px) {
    & .container-geral {
      padding-inline: var(--padding-lateral-mobile);  
      & .text-container {        
        font-size: 17px;
      }
    }
  }
`;