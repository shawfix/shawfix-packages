import {
  Avatar,
  Button,
  Form,
  Input,
  Row,
  Space,
  Table,
  Tag,
  type FormProps,
  type TableProps,
} from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';

import { EnabledEn } from '../../enums/EnabledEn';

import { RolesMock } from '../../mocks/RolesMock';
import { UsersMock } from '../../mocks/UsersMock';

import type { UserResponse } from '../../models/response/UserResponse';

type FieldType = {
  query: string;
};

const dataSource = UsersMock;

const columns: TableProps<UserResponse>['columns'] = [
  {
    title: '用户',
    dataIndex: 'user',
    key: 'user',
    width: 240,
    fixed: 'left',
    render: (_, record) => (
      <Space size="middle">
        {record.avatar ? (
          <Avatar src={record.avatar} />
        ) : (
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
        )}
        <span>{record.name}</span>
      </Space>
    ),
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 250,
    fixed: 'left',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 150,
    render: (_, record) =>
      record.status === EnabledEn.Enabled ? (
        <Tag color="#87d068">启用</Tag>
      ) : (
        <Tag color="default">停用</Tag>
      ),
  },
  {
    title: '角色',
    dataIndex: 'roles',
    key: 'roles',
    width: 320,
    render: (_, record) => (
      <Space className="flex-wrap max-w-80">
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
        {Object.entries(RolesMock).map(([key, value]) => {
          return record.access & value ? <Tag color="default">{key}</Tag> : null;
        })}
      </Space>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'createdDate',
    key: 'createdDate',
  },
  {
    title: '修改时间',
    dataIndex: 'modifiedDate',
    key: 'modifiedDate',
  },
  {
    title: '操作',
    key: 'action',
    fixed: 'right',
    render: (_, _record) => (
      <Space size="middle">
        <a>编辑</a>
        <a className="text-rose-500! hover:text-rose-300!">删除</a>
      </Space>
    ),
  },
];

export default function User(): React.ReactNode {
  const [form] = Form.useForm();

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<UserResponse[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[], newSelectedRows: UserResponse[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedRows(newSelectedRows);
  };
  const rowSelection: TableRowSelection<UserResponse> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (e) => {
    console.log('e', e.query);
  };

  const onReset = () => {
    form.setFieldsValue({ query: '' });
  };

  const addUser = () => {
    console.log('shawfix addUser');
  };

  const deleteUsers = () => {
    console.log('shawfix selectedRows', selectedRows);
  };

  return (
    <div className="flex flex-col gap-6 px-4 py-6 w-full h-full bg-white rounded-lg">
      <Form
        name="userSearchFormControls"
        form={form}
        layout="inline"
        onFinish={onFinish}
        initialValues={{ query: '' }}
      >
        <Form.Item name="query" label="搜索条件">
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button type="default" htmlType="button" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <div className="flex flex-col gap-2">
        <Row>
          <Space>
            <Button type="primary" onClick={addUser}>
              新增
            </Button>
            <Button type="default" onClick={deleteUsers}>
              删除
            </Button>
          </Space>
        </Row>
        <Table<UserResponse>
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
          scroll={{ x: 'max-content', y: 55 * 7 }}
        ></Table>
      </div>
    </div>
  );
}
