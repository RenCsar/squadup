import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;

  & svg {
    width: 30px;
    height: 30px;

    &:hover {
      fill: var(--azul-escuro);
    }
  }
`;