import styled from "styled-components";
import { flexCenter } from "../../../utils/globalStyledComponents";

export const Container = styled.div`
  background-color: var(--bg-section-claro);
  min-height: calc(100vh - var(--header-height));
  ${flexCenter}
  padding-inline: var(--padding-lateral);

  & .container-geral {
    background-color: var(--bg-section-branco);
    border-radius: var(--border-radius-md);
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-block: 20px;

    & .title-container {
      display: flex;
      align-items: flex-end;
      gap: 5px;
      color: var(--font-color-secondary);
    }

    & .btn-container {
      width: 120px;
    }
  }

  @media (max-width: 960px) {
    padding-inline: var(--padding-lateral-mobile);
  }
`;