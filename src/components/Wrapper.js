import {
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  Switch,
  useNavigate,
} from "react-router-dom";
import logo from "../images/logo.png";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Dashboard from "../containers/Dashboard";
import DailyChallenges from "../containers/DailyChallenges";
import Jobs from "../containers/Jobs";
import Tests from "../containers/Tests";
import Certificates from "../containers/Certificates";
import Support from "../containers/Support";
import Profile from "../containers/Profile";

const items = [
  {
    icon: BarChartOutlined,
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    icon: UploadOutlined,
    path: "/daily-challenges",
    name: "Daily Challenges",
  },
  {
    icon: UserOutlined,
    path: "/jobs",
    name: "Jobs",
  },
  {
    icon: VideoCameraOutlined,
    path: "/tests",
    name: "Tests",
  },
  {
    icon: AppstoreOutlined,
    path: "/certificates",
    name: "Certificates",
  },
  {
    icon: TeamOutlined,
    path: "/suport",
    name: "Suport",
  },
].map((item, index) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.name,
}));
function Wrapper() {
  const [container, setContainer] = useState({ name: "Daily Challenges" });
  const navigate = useNavigate();
  const handleItem = (e) => {
    console.log(e, e.key);
    navigate(e.key);
    console.log(items[0]);
  };
  return (
    <Layout hasSider>
      <div className="top-header">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
          <h1 onClick={() => navigate("/")}>Career Hub</h1>
        </div>
        <div className="header">
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h2>{container.name}</h2>
          </div>
          <div className="avatar">
            <div
              className="profileicon"
              onClick={() => navigate("/profile")}
            >
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Sider className="sider">
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
      <Layout id="content-layout">
        <Content className="content">
          <div className="page-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/daily-challenges" element={<DailyChallenges/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/tests" element={<Tests/>}/>
            <Route path="/certificates" element={<Certificates/>}/>
            <Route path="/suport" element={<Support/>} />
            <Route path="/profile" element={<Profile/>} /> 
          </Routes>
        </div>
          <div style={{ height: "100px" }}></div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Wrapper;
