import React, { type FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = Object.values(Theme).includes(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
    ? localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
    : Theme.LIGHT;

interface ThemeProdiverProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProdiverProps> = (props) => {
    const {
        initialTheme,
        children,
    } = props;

    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
