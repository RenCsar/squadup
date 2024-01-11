import styled from "styled-components";
import { TButtonProps } from "../../../utils/types";
import { Container as sharedButtonStyles } from "../Button/Button.Styled";

export const Container = styled(sharedButtonStyles)<TButtonProps>`
  & button {
    padding: 10px 15px;
    &:hover {
      transform: scale(1.009);
    }
  }
`;