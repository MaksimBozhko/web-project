import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'
import { classNames } from '@/shared/lib/classNames'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  // const [isAuthModal, setIsAuthModal] = useState(false);
  // const authData = useSelector(getUserAuthData);

  // const onCloseModal = useCallback(() => {
  //   setIsAuthModal(false);
  // }, []);
  //
  // const onShowModal = useCallback(() => {
  //   setIsAuthModal(true);
  // }, []);

  const content = (
    <>
      <LangSwitcher className={cls.lang}/>
      <ThemeSwitcher />
    </>
  )

  // if (authData) {
  //   return (
  //     <header className={classNames(cls.Navbar, {}, [className])}>
  //       {/*<Text*/}
  //       {/*  className={cls.appName}*/}
  //       {/*  title={t('Ulbi TV App')}*/}
  //       {/*  theme={ThemeText.INVERTED}*/}
  //       {/*/>*/}
  //       <HStack
  //         gap="24"
  //       >
  //         {content}
  //         <NotificationButton />
  //         <AvatarDropDown className={cls.dropDown} />
  //       </HStack>
  //     </header>
  //   );
  // }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      {content}
      <Button
        theme={ThemeButton.CLEAR}
        // onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        // onClick={onShowModal}
      >
        {t('Регистрация')}
      </Button>
      {/* { isAuthModal && ( */}
      {/*  <LoginModal */}
      {/*    isOpen={isAuthModal} */}
      {/*    onClose={onCloseModal} */}
      {/*  /> */}
      {/* )} */}
    </header>
  )
})
