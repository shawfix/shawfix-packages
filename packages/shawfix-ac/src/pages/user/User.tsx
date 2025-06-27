import { Button, Form, Input, Row, Space, Table, type FormProps, type TableProps } from 'antd';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';

type FieldType = {
  query: string;
};

type UserType = {
  id: string;
  name: string;
  email: string;
  createdTime: string;
  modifiedTime: string;
  status: number;
};

const dataSource = Array.from({ length: 46 }).map<UserType>((_, i) => ({
  key: i,
  id: i + '',
  name: `Shawfix${i}`,
  email: 'shawfix@gmail.com',
  createdTime: '2025-06-26 18:20',
  modifiedTime: '2025-06-26 18:20',
  status: 1,
}));

const columns: TableProps<UserType>['columns'] = [
  {
    title: '用户名',
    dataIndex: 'name',
    key: 'name',
    width: 180,
    fixed: 'left',
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
  },
  {
    title: '创建时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
  },
  {
    title: '修改时间',
    dataIndex: 'modifiedTime',
    key: 'modifiedTime',
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
  const [selectedRows, setSelectedRows] = useState<UserType[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[], newSelectedRows: UserType[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedRows(newSelectedRows);
  };
  const rowSelection: TableRowSelection<UserType> = {
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
        <Table<UserType>
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
          scroll={{ x: 'max-content', y: 55 * 7 }}
        ></Table>
      </div>
    </div>
  );
}
