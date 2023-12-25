import styled from "styled-components";
import { TButtonProps } from "../../../utils/types";

export const Container = styled.div<TButtonProps>`
  & a {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "var(--azul-claro)"};
    color: ${(props) =>
      props.color ? props.color : "var(--font-color-primary)"};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "var(--border-radius-sm)"};
    border-radius: var(--border-radius-sm);
    padding: 10px 15px;
    font-weight: bold;
    transition: var(--transition);

    &:hover {
      transition: var(--transition);
      transform: scale(1.009);
      background-color: ${(props) =>
        props.backgoundColorHover
          ? props.backgoundColorHover
          : "var(--azul-escuro)"};
      color: ${(props) =>
        props.colorHover ? props.colorHover : "var(--font-color-primary)"};
    }
  }
`;