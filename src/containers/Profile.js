import React, { useState } from "react";
import "../stylefiles/container styles/Profile.css";
import profile from "../images/profile1.jpg";
import { Avatar, Divider, Image, notification, Popover } from "antd";
import {
  CheckCircleOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";

function Profile() {
  //------------------------------State to manage personal details (non-editable)-------------------
  const [personal] = useState({
    Name: "Varugu Rupendhar Reddy",
    mail: "varugurupendharreddy@gmail.com",
    registerNumber: 1234556789,
    dept: "Computer Science",
    batch: "2021-2025",
    college: "Student Career Engineering College",
  });
  // ----------------------------- ---------  Academic details  -----------------------------
  const [academic, setAcademic] = useState({
    "UG School Name": "Student Career Engineering College",
    "Degree Name": "BE",
    Branch: "Computer Science",
    "Year of Passing": 2025,
    "current Semister": 7,
    cgpa: 8.0,
    sem1: 8.0,
    sem2: 8.0,
    sem3: 8.0,
    sem4: 8.0,
    sem5: 8.0,
    sem6: 8.0,
    sem7: "NA",
    sem8: "NA",
    "School Name": "Sri chaitanya School",
    ssc: 7.0,
    "College Name": "Student Career Engineering College",
    hsc: 7.0,
  });
  const [editingField, setEditingField] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAcademic((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Function to toggle editing for a specific field
  const openNotification = () => {
    notification.open({
      message: "The changes will be verified by the mentor and then saved!",
      description: "",
      icon: (
        <CheckCircleOutlined style={{ color: "green", fontSize: "20px" }} />
      ),
      placement: "bottomRight",
    });
  };
  const toggleEdit = (field) => {
    if (editingField === field) {
      // Save changes and exit edit mode
      setEditingField(null);
      openNotification();
    } else {
      // Enter edit mode for specific field
      setEditingField(field);
    }
  };
// ------------------------------------------placement-info--------------------------------------------------
  const [placement, setPlacement] = useState({
    Status: "Placed",
  });
  return (
    <div id="profile-div">
      <div id="student-info">
        <div id="personal">
          {/* Section Heading */}
          <h2>Personal Details</h2>

          {/* Personal details table */}
          <table id="personal">
            <tbody>
              {Object.entries(personal).map(([key, value]) => (
                <tr key={key}>
                  {/* Column for label */}
                  <td>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>
                  </td>
                  {/* Column for value */}
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Profile picture section */}
        <div id="dp">
          <Avatar id="dp-img" src={<Image src={profile} />} />
        </div>
      </div>
      <Divider plain></Divider>
      <div id="academic-info">
        <h2>Academic Details</h2>
        <table>
          <tbody>
            {Object.entries(academic).map(([key, value]) => (
              <tr key={key}>
                <td>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                </td>
                <td>
                  {editingField === key ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                    />
                  ) : (
                    value
                  )}
                </td>
                <td>
                  <button
                    onClick={() => toggleEdit(key)}
                    style={{
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    {editingField === key ? (
                      <SaveOutlined />
                    ) : (
                      <Popover
                        content={
                          "After Editing click on save to send the request to the mentor"
                        }
                        title="Title"
                        placement="topLeft"
                      >
                        <EditOutlined />
                      </Popover>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Divider plain></Divider>
      <div id="placement-info">
        
      </div>
    </div>
  );
}

export default Profile;
