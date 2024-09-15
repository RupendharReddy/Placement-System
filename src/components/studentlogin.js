import React, { useState } from 'react';
import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EyeInvisibleTwoTone, EyeTwoTone, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import '../stylefiles/Studentlogin.css';

export default function StudentLogin() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState({
    Mail: "",
    Password: "",
  });

  const navigate=useNavigate();
  const onChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const openNotification = () => {
    notification.open({
      message: "Login Successful",
      description: '',
      icon: <CheckCircleOutlined style={{ color: 'green', fontSize: '20px' }} />,
      // icon: <CloseCircleOutlined style={{ color: 'green', fontSize: '20px' }} />,
      placement: 'bottomRight',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    openNotification();
    navigate("/Home");
    // navigate("/Home",{state:{Mailid:login.Mail}});
    console.log(login);
  };

  return (
    <div className='login'>
      <form className="loginform" onSubmit={onSubmit}>
        <label>
          <h3>Email Id</h3>
          <input
            required
            type="email"
            placeholder="Enter Email"
            name="Mail"
            onChange={onChange}
          />
        </label>
        <label>
          <br />
          <h3>Password</h3>
          <input
            required
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            name="Password"
            onChange={onChange}
          />
          <Button
            type='text'
            className='eye'
            onClick={() => setShow(!show)}
          >
            {show ? <EyeTwoTone /> : <EyeInvisibleTwoTone />}
          </Button>
          <br />
        </label>
        <Button className='submit' type="primary" htmlType="submit">Login</Button>
      </form>
    </div>
  );
}
