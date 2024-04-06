import styled from "styled-components";
import { TSocialProps } from "../../../types/types";

export const Container = styled.div<TSocialProps>`
  display: flex;
  flex-direction: ${(props) => (props.isfooter ? "row" : "column")};
  padding-inline: 20px;

  & svg {
    width: ${(props) => (props.isfooter ? "40px" : "30px")};
    height: ${(props) => (props.isfooter ? "40px" : "30px")};
    fill: ${(props) =>
      props.isfooter ? "var(--branco)" : "var(--azul-claro)"};

    &:hover {
      fill: ${(props) =>
        props.isfooter
          ? "var(--azul-escuro)"
          : props.backgroundcolor == "var(--bg-section-claro)"
          ? "var(--azul-escuro)"
          : "var(--branco)"};
    }
  }
`;