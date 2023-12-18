import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 2000px;

  .header-container {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9;
  }

  .socials-fixed {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }
`;