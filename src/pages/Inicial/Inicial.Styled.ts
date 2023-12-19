import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  .header-container {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 3;
  }

  .banner,
  .footer {
    display: flex;
    position: inherit;
    z-index: 2;
  }

  .socials-fixed {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;