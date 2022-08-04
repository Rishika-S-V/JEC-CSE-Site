import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";

const Nav = styled.div`
  background: rgba(10, 38, 98, 0.8);
  min-height: 2.2rem;
  min-width: 94.8rem;
  max-width: 50rem;
  max-height: 2.8rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  font-size: 2rem;
  height: 80px;
  display: flexbox;
  text-decoration: none;
  color: #ffffff;
  margin-left: 150px;
`;

const Header = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className="Nav">
          <NavIcon to="#" className="NavIcon">
            <h6 class="head1">
              <Link className="inactive" to="/">
                Home
              </Link>
            </h6>
            <h6 class="head1">
              <NavLink
                className="inactive"
                activeClassName="active"
                to="/Academic"
              >
                Academic Council
              </NavLink>
            </h6>
            <h6 class="head1">
              <NavLink
                className="inactive"
                activeClassName="active"
                to="/Programmes"
              >
                Programmes Offered
              </NavLink>
            </h6>
            <h6 class="head1">
              {" "}
              <NavLink
                to="/Achievements"
                activeClassName="active"
                className="inactive"
              >
                {" "}
                Achievements
              </NavLink>
            </h6>
          </NavIcon>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Header;
