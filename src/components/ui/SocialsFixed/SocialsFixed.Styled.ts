import styled from "styled-components";
import { TSocialProps } from "../../../utils/types";

export const Container = styled.div<TSocialProps>`
  display: flex;
  flex-direction: ${(props) => (props.isFooter ? "row" : "column")};
  padding-inline: 20px;

  & svg {
    width: ${(props) => (props.isFooter ? "40px" : "30px")};
    height: ${(props) => (props.isFooter ? "40px" : "30px")};
    fill: ${(props) =>
      props.isFooter ? "var(--branco)" : "var(--azul-claro)"};

    &:hover {
      fill: ${(props) =>
        props.isFooter
          ? "var(--azul-escuro)"
          : props.backgroundcolor == "var(--bg-section-claro)"
          ? "var(--azul-escuro)"
          : "var(--branco)"};
    }
  }
`;