import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Input, Button, Select, Table, Space, Popconfirm } from "antd";
import { getOrder, createOrder, updateOrder, deleteOrder } from "./api/api";

import axios from "axios";

const { Option } = Select;

const orderOptions = [
  "frontend web Developer ",
  " backend Developer",
  "senior developer",
];

const Employee = () => {
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading: ordersLoading,
    isError: ordersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getOrder,
  });

  const { mutate: createData } = useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries("users"); // Use "orders" here
      form.resetFields();
    },
  });

  const { mutate: updateData } = useMutation({
    mutationFn: updateOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] }); // Use "orders" here
      setEditingRecord(null);
      form.resetFields();
    },
  });

  const { mutate: deleteData } = useMutation({
    mutationFn: deleteOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleCreate = (values) => {
    createData(values);
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue({
      name: record.name,
      lastName: record.lastName,
      email: record.email,
      role: record.role,
    });
  };

  const handleUpdate = (values) => {
    updateData({ id: editingRecord.id, ...values });
  };

  const handleDelete = (id) => {
    deleteData(id);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => {
              handleDelete(record.id);
            }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  if (ordersLoading) {
    return <div>Loading orders...</div>;
  }

  if (ordersError) {
    return <div>Error loading orders: {ordersError.message}</div>;
  }

  return (
    <div className=" w-full h-full mx-auto   flex flex-col items-center justify-center">
      <div className=" w-full max-w-[500px] bg-purple-50 mt-[60px] p-6">
        <div className="mt-12 ">
          <h2 className="text-center">Employees</h2>
        </div>
        <Form
          className="w-[400px] pt-10 mt-5"
          form={form}
          onFinish={editingRecord ? handleUpdate : handleCreate}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label=""
            rules={[{ required: true, message: "Please select an order!" }]}
          >
            <Select>
              {orderOptions.map((role) => (
                <Option key={role} value={role}>
                  {role}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? "Update" : "Create"}
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        className="mt-8 w-auto "
        dataSource={users}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
};

export default Employee;
