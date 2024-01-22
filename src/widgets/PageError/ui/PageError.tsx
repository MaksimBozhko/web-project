import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/classNames'
import cls from './pageError.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation('about')
  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      {/* {console.log(t('Произошла ошибка'))} */}
      {t('Произошла ошибка')}
      <Button onClick={reloadPage}>
        {t('Обновите страницу')}
      </Button>
    </div>
  )
}
