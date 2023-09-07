import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAutModal] = useState(false);

    const onToogleModal = useCallback(() => {
        setIsAutModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToogleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToogleModal}>
                fsdfsdf fs fsdfs fsd fsd  fsdfsdf fs fsdfs fsd fsd fsdfsdf fs fsdfs fsd fsd fsdfsdf fs fsdfs fsd fsd fsdfsdf fs fsdfs fsd fsd fsdfsdf fs fsdfs fsd fsd fsdfsdf fs fsdfs fsd fsd
            </Modal>
        </div>
    );
};

export default Navbar;
