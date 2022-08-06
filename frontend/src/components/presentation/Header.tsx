import navigationData from "../../data/navigationData.json";

import { ReactComponent as Bars } from "../../assets/icons/bars-solid.svg";

import { FC } from "react";
import { NavLink } from "react-router-dom";

type HeaderProps = {
  type?: "DEFAULT" | "HOME";
  classes?: string;
  title?: string;
};

type HeaderProps_ = { classes?: string; title?: string };

const HomeHeader: FC<HeaderProps_> = ({ classes }) => {
  return (
    <header
      className={
        "flex items-center justify-center bg-primary/80 py-2 text-gray-50 sm:justify-end sm:px-4" +
        " " +
        classes
      }
    >
      <ul className="flex flex-wrap justify-center gap-2 text-sm sm:gap-4 sm:text-base">
        {navigationData
          .filter((nav) => nav.isOnHome)
          .map((nav, i) => (
            <li key={i} className="font-semibold underline underline-offset-4">
              <NavLink to={nav.to}>{nav.text}</NavLink>
            </li>
          ))}
      </ul>
    </header>
  );
};

const DefaultHeader: FC<HeaderProps_> = ({ classes, title }) => {
  return (
    <header
      className={
        "relative flex items-center justify-center bg-primary fill-gray-50 p-2 font-semibold text-gray-50" +
        " " +
        classes
      }
    >
      <Bars
        className="absolute top-1/2 left-2 w-5 -translate-y-1/2 cursor-pointer sm:left-4"
        role="button"
        onClick={(e) => {
          console.log(e.target);
        }}
      />
      <h1>{title}</h1>
    </header>
  );
};

const Header: FC<HeaderProps> = ({ type = "DEFAULT", classes, title }) => {
  if (type === "DEFAULT")
    return <DefaultHeader classes={classes} title={title} />;

  return <HomeHeader />;
};

export default Header;
