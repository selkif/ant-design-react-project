import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

function Contact() {
  return (
    <div
      id="contact"
      className="block contactBlock py-12 px-0 border-b border-gray-300 bg-gray-100"
    >
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="titleHolder text-center pb-8 mb-12">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
        </div>
        <Form
          name="normal_login"
          className="login-form mx-auto max-w-xl"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder="Full Name" className="w-full" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Email Address" className="w-full" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input placeholder="Telephone" className="w-full" />
          </Form.Item>
          <Form.Item name="subject">
            <Input placeholder="Subject" className="w-full" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea placeholder="Message" className="w-full min-h-24" />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              noStyle
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox className="w-full">
                I agree with terms and conditions.
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
