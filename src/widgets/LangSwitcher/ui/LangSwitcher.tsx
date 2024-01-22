import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Button, ThemeButton } from '@/shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'
import { classNames } from '@/shared/lib/classNames'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(({ className, short = true }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const toggle = () => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
    >
      {short ? t('Короткий язык') : t('Язык')}
    </Button>
  )
})
