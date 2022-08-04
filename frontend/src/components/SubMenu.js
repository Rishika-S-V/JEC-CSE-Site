import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 10px;
  font-weight: 900px;
  text-decoration: none;
  font-size: 18px;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div></div>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
