import { classNames } from '@/shared/lib/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/router'
import { Sidebar } from '@/widgets/Sidebar'
import { Navbar } from '@/widgets/Navbar'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Sidebar/>
      <div>
        <Navbar />
        <AppRouter/>
      </div>
    </div>
  )
}
