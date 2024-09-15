import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../stylefiles/Home.css";
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
import Dashboard from "../containers/Dashboard";
import Jobs from "../containers/Jobs";
import DailyChallenges from "../containers/DailyChallenges";
import Certificates from "../containers/Certificates";
import Support from "../containers/Support";
import Tests from "../containers/Tests";
import Profile from "../containers/Profile";

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

const Home = () => {
  const [container,setContainer] = useState({name:"Dashboard"});
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  const handleItem = (e) => {
    setContainer({name:items[e.key - 1].label});
  };
  // const location=useLocation();
  // console.log(location.state.Mailid);
  
  const renderContent=()=>{
    switch(container.name){
      case "Dashboard":
        return <Dashboard />
      case "Jobs":
        return <Jobs/>
      case "Daily Challenges":
        return <DailyChallenges/>
      case "Certificates":
        return <Certificates/>
      case "Support":
        return <Support/>
      case "Tests":
        return <Tests/>
      case "Profile":
        return <Profile/>
      default:
        return <Dashboard/>
    }
  }
  // const location=useLocation();
  // const Mailid = location.state || {};

  useEffect(() => {
    console.log(container.name);
  }, [container]);
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
              <h2>{container.name}</h2>
            </div>
            <div className="avatar">
              <BellOutlined
                className="topicons bell"
                onClick={() => console.log("bell clicked")}
              />
              <div className="profileicon" onClick={()=>setContainer({name:"Profile"})}>
                <UserOutlined className="topicons " /> <b>Profile</b>
              </div>
            </div>
          </div>

          {/* </Header> */}
        </div>
        <Content
          style={{
            // overflow: "initial",
            margin: "70px 10px 2px 10px",
            // backgroundColor:"antiquewhite",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              // background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}

          </div>
          <div style={{ height: "100px" }}>
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
