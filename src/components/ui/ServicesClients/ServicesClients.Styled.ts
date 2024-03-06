import styled from "styled-components";
import IndicadorProjetos from "./../../../assets/indicador-projetos.svg";
import IndicadorWeb from "./../../../assets/indicador-web.svg";
import IndicadorDesign from "./../../../assets/indicador-design.svg";
import { interactionOff } from "../../../utils/globalStyles";
import { TServiceListProps } from "../../../utils/types";

export const Container = styled.div`
  display: flex;
  background-color: var(--bg-section-branco);
  width: 320px;
  min-height: 375px;
  border-radius: var(--border-radius-sm);
  padding: 30px 20px;
  flex-direction: column;
  gap: 15px;

  & .header-card-container {
    ${interactionOff}
    display: flex;
    align-items: center;
    gap: 15px;
    min-height: 60px;

    & p {
      font-size: 17px;
      font-weight: bold;
    }

    & .font-web {
      background: linear-gradient(135deg, #032650 0%, #f43c86 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & .font-projetos {
      background: linear-gradient(135deg, #032650 0%, #45d3a1 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & .font-design {
      background: linear-gradient(135deg, #032650 0%, #7e57c2 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  & .list-container {
    display: flex;
    height: 100%;
  }

  @media (max-width: 330px) {
    padding: 20px 10px;
  }
`;

export const StyledListItem = styled.ul<TServiceListProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;

  & li {
    margin-left: 25px;
    list-style-image: ${(props) =>
      props.type === "projetos"
        ? `url(${IndicadorProjetos})`
        : props.type === "web"
        ? `url(${IndicadorWeb})`
        : `url(${IndicadorDesign})`};
  }
`;