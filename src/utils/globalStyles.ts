import { createGlobalStyle } from "styled-components";

export const sectionBase = `
padding-top: var(--padding-top-header);
padding-inline: var(--padding-lateral);
`;

export const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const interactionOff = `
user-select: none;
pointer-events: none;
`;

const GlobalStyle = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li,
ol li {
  list-style: none;
}

:root {
  --branco: #F5F5F5;
  --azul-claro: #2266FF;
  --azul-escuro: #121E36;
  --verde: #79B473;
  --verde-hover: rgba(92, 167, 32, .6);
  --vermelho: rgb(242, 66, 54);
  --vermelho-hover: #a32;
  --preto: rgba(22, 22, 22, 1);
  --cinza: rgba(165, 161, 161, 1);
  --cinza-claro: #f9f9f9;

  --shadow-hover: rgba(0, 0, 0, .3);
  --border-light-gray: var(--cinza-claro);

  --bg-header: var(--azul-claro);
  --bg-body: var(--branco);
  --bg-home: var(--branco);
  --bg-section-escuro: var(--azul-escuro);
  --bg-section-claro: var(--azul-claro);
  --bg-section-branco: var(--branco);
  --bg-footer: var(--azul-claro);
  --bg-border-color: rgba(256, 256, 256, .2);

  --bg-btn-primary: var(--branco);
  --bg-btn-primary-hover: var(--azul-escuro);

  --border-radius-sm: 5px;
  --border-radius-md: 15px;

  --font-family-primary: sans-serif;
  --font-color-primary: var(--branco);
  --font-color-secondary: var(--azul-claro);
  --font-color-text: var(--azul-escuro);

  --font-color-header: var(--font-color-primary);
  --btn-font-color: var(--font-color-primary);

  --padding-lateral: 40px;
  --padding-lateral-mobile: 20px;
  --padding-top-header: 70px;
  --margin-sm: 20px;
  --margin-md: 50px;

  --header-height: 70px;

  --transition: .95s;
}

body {
  font-family: var(--font-family-primary);
  background-color: var(--bg-body);
  scroll-behavior: smooth;
}

::-webkit-scrollbar-track {
  background-color: var(--azul-escuro);
}

::-webkit-scrollbar {
  width: 6px;
  background: var(--branco);
}

::-webkit-scrollbar-thumb {
  background: var(--branco);
} 
`;

export default GlobalStyle;