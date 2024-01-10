import styled from "styled-components";
import { TBackgroundProps } from "../../../utils/types";

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const HeaderStyled = styled.div<TBackgroundProps>`
  ${flexCenter}
  justify-content: space-between;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "var(--bg-header)"};
  width: 100%;
  height: 70px;
  padding-inline: var(--padding-lateral);
  color: var(--font-color-header);
  user-select: none;

  & .logo-container {
    ${flexCenter}
    cursor: pointer;

    & a {
      height: 37px;
      width: 100%;

      & img {
        width: 140px;
        height: 37px;
      }
    }
  }

  & nav ul {
    ${flexCenter}
    gap: 20px;
    font-size: 16px;
    font-weight: bold;
    height: 100%;

    & li a {
      padding: 10px;
      transition: var(--transition);
      height: 100%;
      border-radius: var(--border-radius-sm);
      cursor: pointer;

      &:hover {
        transition: var(--transition);
        color: var(--azul-claro);
        background-color: var(--branco);
      }
    }
  }

  @media (max-width: 500px) {
    padding-inline: var(--padding-lateral-mobile);
  }
`;