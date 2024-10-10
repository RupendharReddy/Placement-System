import React, { useState, useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const Support = () => {
  const [componentVariant, setComponentVariant] = useState('outlined');

  useEffect(() => {
    // Configure the message component position
    message.config({
      top: 100, // distance from the top
      duration: 2, // duration the message will display for
      maxCount: 1, // only show one message at a time
    });
  }, []);

  const onFinish = (values) => {
    // Display a success message
    message.success('Email sent successfully! We will get back to you soon', 2);
    console.log('Form values:', values); // Optionally log the form values
  };

  return (
    <Form
      {...formItemLayout}
      variant={componentVariant}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 20,
        maxWidth: 800,
      }}
      initialValues={{
        variant: componentVariant,
      }}
      onFinish={onFinish} // Set the onFinish prop
    >
      <h2>Share your problem with us</h2>
      {/* Email Input */}
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please enter a valid email!',
          },
        ]}
        style={{ marginTop: 50 }}
      >
        <Input />
      </Form.Item>

      {/* Subject Input */}
      <Form.Item
        label="Subject"
        name="Subject"
        rules={[
          {
            required: true,
            message: 'Please enter the subject!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      {/* Description TextArea */}
      <Form.Item
        label="Description"
        name="Description"
        rules={[
          {
            // required: true,
            message: 'Please enter a description!',
          },
        ]}
      >
        <Input.TextArea style={{ height: '200px' }} /> {/* Adjust height if needed */}
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Support;
