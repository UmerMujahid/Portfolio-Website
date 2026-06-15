import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body || "#0d0e12"};
    color: ${({ theme }) => theme.text || "#e8eaf2"};
    font-family: 'Inter', 'Google Sans Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.25s linear, color 0.25s linear;
    min-height: 100vh;
  }

  /* Neon amber link color for the app */
  a {
    color: ${({ theme }) => theme.imageHighlight || "#ffb000"};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.jacketColor || "#00f0ff"};
  }
`;
