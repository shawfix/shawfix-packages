import { Button, Layout, Menu, type MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/',
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    key: '/user',
    label: '用户管理',
    icon: <UserOutlined />,
  },
  {
    key: '/role',
    label: '角色管理',
    icon: <TeamOutlined />,
  },
];

export function LayoutMenu(): React.ReactNode {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  const onClick: MenuProps['onClick'] = (e) => {
    const key = e.key;

    if (pathname === key) {
      return;
    }

    navigate(key);
  };

  return (
    <Layout className="w-full h-full">
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <Menu
          className="h-full"
          theme="light"
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
          onClick={onClick}
        ></Menu>
      </Sider>
      <Layout>
        <Header className="px-0!">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="p-2 bg-gray-100">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
