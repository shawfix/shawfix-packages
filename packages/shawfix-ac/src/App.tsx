import { App as AntdApp, ConfigProvider, theme } from 'antd';
import locale from 'antd/locale/zh_CN';
import { RouterProvider } from 'react-router';

import { router } from './router';

import './App.css';

function App() {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        cssVar: true,
        hashed: false,
        token: {
          colorPrimary: '#722ed1',
          colorLink: '#722ed1',
          colorInfo: '#722ed1',
        },
        components: {
          Menu: {
            // darkItemBg: '#000',
            // darkItemHoverColor: '#7D33FF',
          },
          Layout: {
            bodyBg: 'transparent',
            headerBg: 'transparent',
            siderBg: 'transparent',
          },
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <AntdApp className="w-screen h-screen">
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
