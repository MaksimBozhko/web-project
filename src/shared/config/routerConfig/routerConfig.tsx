import { type RouteProps } from 'react-router-dom'
import { About } from '@/pages/about'
import { Articles } from '@/pages/articles'
import { Profile } from '@/pages/profile'
import { NotFoundPage } from '@/pages/NotFound'

export enum AppRoutes {
  PROFILE = 'profile',
  ABOUT = 'about',
  ARTICLES = 'articles',
  ARTICLES_CREATE = 'articles_create',
  ARTICLES_EDIT = 'articles_edit',
  ARTICLE_DETAILS = 'article_details',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/profile', // + id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.ARTICLES_CREATE]: '/articles/new',
  [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ADMIN_PANEL]: '/admin_panel',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: RouteProps[] = [
  {
    path: RoutePath.profile,
    element: <Profile/>
  },
  {
    path: RoutePath.articles,
    element: <Articles/>
  },
  {
    path: RoutePath.about,
    element: <About/>
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  }
]
