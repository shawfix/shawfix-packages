import React from 'react';
import { createBrowserRouter } from 'react-router';

import { lazyLoad } from './LazyLoad';

/**
 * 定义页面路由
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: lazyLoad(React.lazy(() => import('../pages/welcome/Welcome'))),
  },
]);
