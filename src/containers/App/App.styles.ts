import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --offWhite: #ededed;
    --maxWidth: 1200px;
    --boxShadow: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }
`;
