import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylefiles/dashboard.css";
import {
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  // display: "flex",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};
const items = [
  {
    icon: BarChartOutlined,
    name: "Dashboard",
  },
  {
    icon: UploadOutlined,
    name: "Daily Challenges",
  },
  {
    icon: UserOutlined,
    name: "Jobs",
  },
  {
    icon: VideoCameraOutlined,
    name: "Tests",
  },
  {
    icon: AppstoreOutlined,
    name: "Certificates",
  },
  {
    icon: TeamOutlined,
    name: "Suport",
  },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.name,
}));

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const handleItem = (e) => {
    console.log("e key ", e.key);
    console.log(items[e.key - 1].label);
  };

  return (
    <Layout hasSider>
      <div>
        <Sider style={siderStyle}>
          {/* className="demo-logo-vertical" */}
          <div
            style={{
              // position: "fixed",
              backgroundColor: "rgb(0 21 41)",
              display: "flex",
              justifyContent: "center",
              padding: "15px",
              borderBottom: "1px solid white",
            }}
          >
            <h1
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => window.location.reload()}
            >
              Career Hub
            </h1>
          </div>
          <div
            style={{
              padding: "20% 5px",
            }}
          >
            <Menu
              style={{}}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={items}
              onClick={handleItem}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
              marginTop: "40px",
            }}
          >
            <Button
              style={{ color: "white" }}
              type="primary"
              onClick={() => navigate("/")}
            >
              Sign Out
            </Button>
          </div>
        </Sider>
      </div>
      <Layout
        style={{
          marginInlineStart: 200,
          overflow: "none",
        }}
      >
        <div className="top-header">
          <div className="header">
            <div>
              <h2>Dashboard</h2>
            </div>
            <div className="avatar">
              <BellOutlined
                className="topicons bell"
                onClick={() => console.log("bell clicked")}
              />
              <a className="profileicon">
                <UserOutlined className="topicons profileicon" /> Profile
              </a>
            </div>
          </div>

          {/* </Header> */}
        </div>
        <Content
          style={{
            margin: "70px 2px 2px 2px",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          ></div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Design{" "}
          {new Date().getDate() +
            "-" +
            new Date().getMonth() +
            "-" +
            new Date().getFullYear()}{" "}
          Created by Ant RupendharReddy
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
