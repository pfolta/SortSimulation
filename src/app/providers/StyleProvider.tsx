import "inter-ui";
import React, { ReactNode, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { useDarkMode, useDispatch, useSelector } from "@/app/hooks";
import { setTheme } from "@/app/store";
import { themes } from "@/app/theme";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;

        font: inherit;

        margin: 0;
        padding: 0;

        cursor: default;
        user-select: none;
    }

    html {
        font: normal 400 14px/1.4 "Inter", system-ui;
    }

    @supports (font-variation-settings: normal) {
        html {
            font-family: "Inter var", system-ui;
        }
    }

    body {
        background-color: ${({ theme }) => theme.colors[theme.body.background]};
        color: ${({ theme }) => theme.colors[theme.body.color]};
    }
`;

interface StyleProviderProps {
    children?: ReactNode;
}

const StyleProvider = ({ children }: StyleProviderProps): JSX.Element => {
    const { theme } = useSelector((state) => state.settings);
    const isDarkMode = useDarkMode();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTheme(isDarkMode ? "dark" : "light"));
    }, [isDarkMode, dispatch]);

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default StyleProvider;
