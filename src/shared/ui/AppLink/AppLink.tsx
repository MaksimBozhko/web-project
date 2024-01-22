import { type FC, memo, type ReactNode } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'
import cls from './AppLink.module.scss'
import clsSidebar from '../../../widgets/Sidebar/ui/SidebarItem/SidebarItem.module.scss'
import { classNames } from '@/shared/lib/classNames'

export enum ThemeAppLink {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: ThemeAppLink
  children?: ReactNode
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const {
    to,
    className,
    children,
    theme = ThemeAppLink.PRIMARY,
    ...otherProps
  } = props

  const linkClass = ({ isActive }: any) => {
    return classNames(cls.AppLink, { [clsSidebar.active]: isActive }, [className, cls[theme]])
  }

  return (
    <NavLink
      to={to}
      className={linkClass}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
})
