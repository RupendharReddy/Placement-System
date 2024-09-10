import React from "react";
import "../stylefiles/container styles/Dashboard.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import profile from "../images/profile1.jpg";
import wallpaper from "../images/wallpaper.jpg";
function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <div className="stu-details">
        <img src={wallpaper} alt="wallpaper"/>
          <Avatar className="profileimage"
            src={
              <Image 
                src={profile}
                // style={{
                //   width: 32,
                // }}
              />
            }
          />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
