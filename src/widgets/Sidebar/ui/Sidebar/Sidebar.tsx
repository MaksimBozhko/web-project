import { useMemo, useState } from 'react'
import cls from './sidebar.module.scss'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { type SidebarItemType } from '../../model/types/types'
import { VStack } from '@/shared/ui/Stack'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button/Button'
import { classNames } from '@/shared/lib/classNames'
import { RoutePath } from '@/shared/config/routerConfig'
import MainIcon from 'icons/home.svg'
import AboutIcon from 'icons/about.svg'

const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.profile,
    Icon: MainIcon,
    text: 'Профиль'
  },
  {
    path: RoutePath.articles,
    Icon: MainIcon,
    text: 'Статьи'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте'
  }
]

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => { setCollapsed(!collapsed) }

  const itemsList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed])

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <VStack role="navigation" gap="8" className={cls.items}>
        {itemsList}
      </VStack>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={toggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.XL}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  )
}
