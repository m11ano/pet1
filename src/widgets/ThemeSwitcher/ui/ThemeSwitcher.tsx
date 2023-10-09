import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button } from '@/shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';
import { ButtonTheme } from '../../../shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toogleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
