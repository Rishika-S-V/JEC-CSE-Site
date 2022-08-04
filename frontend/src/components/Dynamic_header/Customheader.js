import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SidebarData";
import SubMenu from "../SubMenu";
import { IconContext } from "react-icons/lib";
import "./Customheader.css";

const Nav = styled.div`
  background: #0a2662;
  min-height: 2.2rem;
  min-width: 94.5rem;
  max-width: 50rem;
  max-height: 4.8rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flexbox;
  text-decoration: none;
  color: #ffffff;

  justify-content: center;
  align-items: center;
  text-align-last: right;
  text-align: center;
  left: 500px;
`;

const SidebarNav = styled.nav`
  background: #7e1018;
  width: 250px;
  min-height: 100rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Customheader = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav id="Custom-Nav">
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
            <h6 class="custom-head">
              {" "}
              <NavLink to={props.path} id="custom-head-title">
                {" "}
                <h1>{props.header}</h1>
              </NavLink>
            </h6>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose class="iclose" onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Customheader;
