import { createGlobalStyle } from 'styled-components';

export const AppGlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${({ theme }) => theme.colors.secondary10};
        margin: ${({ theme }) => theme.spacing.none};
        padding: ${({ theme }) => theme.spacing.none};
    }
`;
