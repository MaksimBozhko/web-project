import React, { memo } from 'react'
import { AppLink, ThemeAppLink } from '@/shared/ui/AppLink/AppLink'
import cls from './SidebarItem.module.scss'
import { type SidebarItemType } from '../../model/types/types'
import { classNames } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()

  if (item.authOnly) {
    return null
  }
  return (
    <div className={classNames('', { [cls.collapsed]: collapsed })}>
      <AppLink
        theme={ThemeAppLink.SECONDARY}
        to={item.path}
        className={classNames(cls.item)}
      >
        <item.Icon className={cls.icon}/>
        <span className={classNames(cls.link)}>
          {t(item.text)}
        </span>
      </AppLink>
    </div>
  )
})
