import React from 'react';
import { createBrowserRouter } from 'react-router';

import { authLoader } from './authLoader';
import { LayoutMenu } from './LayoutMenu';
import { LazyLoad } from './LazyLoad';

/**
 * 定义页面路由
 */
export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: LazyLoad(React.lazy(() => import('../pages/welcome/Welcome'))),
  // },
  {
    path: '/',
    loader: authLoader,
    element: <LayoutMenu />,
    children: [
      {
        path: '/',
        element: LazyLoad(React.lazy(() => import('../pages/welcome/Welcome'))),
      },
      {
        path: '/user',
        element: LazyLoad(React.lazy(() => import('../pages/user/User'))),
      },
      {
        path: '/role',
        element: LazyLoad(React.lazy(() => import('../pages/role/Role'))),
      },
    ],
  },
]);
