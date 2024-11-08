import React, { useState } from "react";
import nodata from "../images/nodatafound.png";
import "../stylefiles/container styles/Certificates.css";

import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const Certificates = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => {
            return (
              <div>
                <Tag color={"green"} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
                <Tag color={"green"} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              </div>
            );
          })}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
export default Certificates;
{
  /* <img src={nodata} alt="nodata" /> */
}
