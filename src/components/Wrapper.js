import {
  AppstoreOutlined,
  BarChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "../stylefiles/Home.css";
import { Avatar, Button, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation,Route,Routes } from "react-router-dom"; // import useLocation
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
    icon: UserOutlined,
    path: "/profile",
    name: "profile",
  },
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
    icon: TeamOutlined,
    path: "/jobs",
    name: "Jobs",
  },
  {
    icon: AppstoreOutlined,
    path: "/certificates",
    name: "Certificates",
  },
  {
    icon: VideoCameraOutlined,
    path: "/support",
    name: "Support",
  },
].map((item) => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.name,
}));

function Wrapper() {
  const [container, setContainer] = useState({ name: "Dashboard" });
  const navigate = useNavigate();
  const location = useLocation(); // useLocation to get the current route

  // Handle menu item selection
  const handleItem = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    setContainer({ name: selectedItem.label });
    navigate(e.key);
  };

  useEffect(() => {
    // Navigate to dashboard on first load
    navigate("/dashboard");
  }, []);

  return (
    <Layout>
      <div className="top-header">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => window.location.reload()} />
          <h1 onClick={() =>window.location.reload()}>Career Hub</h1>
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
            <h2 id="containername">{container.name}</h2>
          </div>
          <Button
              style={{ color: "white" }}
              type="primary"
              onClick={() => navigate("/")}
            >
              Sign Out
            </Button>
        </div>
      </div>
      <div>
        <Sider className="sider" >
          <Menu className="menu"
            theme="dark"
            // mode="inline"
            // Dynamically set defaultSelectedKeys based on the current route
            defaultSelectedKeys={[location.pathname]} // Set selected item based on the current path
            items={items}
            onClick={handleItem}
          />
        </Sider>
      </div>
      <Layout id="content-layout">
        <Content className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/daily-challenges" element={<DailyChallenges />} />
            <Route path="/jobs" element={<Jobs />} />
            {/* <Route path="/tests" element={<Tests />} /> */}
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/support" element={<Support />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Content>
      </Layout>
      <Menu
        className="footer-nav"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]} // Also update footer nav to reflect current route
        items={items}
        onClick={handleItem}
      />
    </Layout>
  );
}

export default Wrapper;
