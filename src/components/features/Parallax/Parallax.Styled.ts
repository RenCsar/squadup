import styled from 'styled-components';
import Empresa from '../../../assets/empresa.webp';

export const ParallaxContainer = styled.div`
  position: relative;
  background-image: ${`url(${Empresa})`};
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  min-height: 500px;
`;