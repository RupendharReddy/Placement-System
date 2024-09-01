import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
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
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Dashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

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
          <div style={{ paddingTop: "10px" }}>
            <Menu
              style={{}}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
            />
          </div>
          <div style={{display: "flex", justifyContent: "center", paddingTop: "10px", marginTop:"40px",}}>
            <Button style={{color:"white"}} type="primary" onClick={()=>navigate("/")}>Sign Out</Button>
          </div>
        </Sider>
      </div>
      <Layout
        style={{
          marginInlineStart: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          >
          <div style={{
            position:"fixed",
            alignItems:"center",
            display:"flex",
            justifyContent:"center",                         
           }}>
            <h2>Dashboard ...................................</h2>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
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
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? "more" : "..."}
                    <br />
                  </React.Fragment>
                )
              )
            }
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
