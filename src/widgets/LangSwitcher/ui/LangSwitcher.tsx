import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { ButtonTheme } from '../../../shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string,
    short?: boolean,
}

export const LangSwitcher = memo((props : LangSwitcherProps) => {
    const {
        className,
        short = false,
    } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
