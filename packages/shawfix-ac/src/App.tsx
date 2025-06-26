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
          colorPrimary: '#8a4fe8',
          colorLink: '#8a4fe8',
          colorInfo: '#8a4fe8',
        },
        components: {
          Menu: {
            darkItemBg: '#000',
            darkItemHoverColor: '#7D33FF',
          },
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
