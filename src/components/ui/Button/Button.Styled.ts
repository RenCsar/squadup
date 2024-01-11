import styled from "styled-components";
import { TButtonProps } from "../../../utils/types";

export const Container = styled.div<TButtonProps>`
  & button {
    background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "var(--azul-claro)"};
    color: ${(props) =>
    props.color ? props.color : "var(--font-color-primary)"};
    border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "var(--border-radius-sm)"};
    border-radius: var(--border-radius-sm);
    font-weight: bold;
    transition: var(--transition);    

    &:hover {
      transition: var(--transition);
      background-color: ${(props) =>
    props.backgroundcolorhover
      ? props.backgroundcolorhover
      : "var(--azul-escuro)"};
      color: ${(props) =>
    props.colorHover ? props.colorHover : "var(--font-color-primary)"};
    }
  }
`;