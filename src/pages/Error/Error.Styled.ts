import styled from "styled-components";
import { flexCenter } from "../../utils/globalStyles";

export const Container = styled.div`
  background-color: var(--bg-section-claro);
  min-height: 100vh;
  color: var(--font-color-primary);
  ${flexCenter}
  flex-direction: column;
  gap: 20px;

  & img {
    width: 300px;
    height: 85px;
  }

  & .text-container {
    ${flexCenter}
    flex-direction: column;
    gap: 50px;

    & h1 {
      font-size: 40px;
    }
  }
`;