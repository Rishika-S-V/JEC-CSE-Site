import navigationData from "../../data/navigationData.json";

import { ReactComponent as Bars } from "../../assets/icons/bars-solid.svg";
import { ReactComponent as XMark } from "../../assets/icons/xmark-solid.svg";

import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { overlay, panel } from "../../animation/Header";

interface HeaderProps {
  variant?: "DEFAULT" | "HOME";
  classes?: string;
  title?: string;
}

interface HomeHeaderProps extends HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface DefaultHeaderProps extends HeaderProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}
interface NavigationModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationModal: FC<NavigationModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="fixed inset-0 ">
      <Dialog.Overlay
        as={motion.div}
        variants={overlay}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed inset-0 bg-gray-700/80"
      />

      <Dialog.Panel
        as={motion.nav}
        variants={panel}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="relative flex h-screen w-11/12 flex-col gap-4 bg-secondary fill-gray-50 p-4 text-gray-50 sm:w-fit"
      >
        <XMark
          className="ml-2 w-5 cursor-pointer"
          role="button"
          onClick={(e) => {
            setIsOpen(false);
          }}
        />
        <ul className="flex w-60 flex-col gap-2">
          {navigationData.map((nav, i) => (
            <li key={i} className="">
              <NavLink className="navModal-navLink hover:active" to={nav.to}>
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

const HomeHeader: FC<HomeHeaderProps> = ({
  classes,
  isNavOpen,
  setIsNavOpen,
}) => {
  return (
    <header
      className={
        "flex items-center justify-start bg-primary/80 px-4 py-2 text-gray-50 sm:justify-end sm:px-4" +
        " " +
        classes
      }
    >
      <Bars
        className=" w-5 cursor-pointer fill-gray-50 sm:hidden"
        role="button"
        onClick={(e) => {
          setIsNavOpen((prev) => !prev);
        }}
      />
      <ul className="hidden flex-wrap justify-center gap-2 text-sm sm:flex sm:gap-4 sm:text-base">
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

const DefaultHeader: FC<DefaultHeaderProps> = ({
  classes,
  title,
  isNavOpen,
  setIsNavOpen,
}) => {
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
          setIsNavOpen((prev) => !prev);
        }}
      />
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
};

const Header: FC<HeaderProps> = ({ variant = "DEFAULT", classes, title }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {variant === "DEFAULT" ? (
        <DefaultHeader
          classes={classes}
          title={title as string}
          isNavOpen={navOpen}
          setIsNavOpen={setNavOpen}
        />
      ) : (
        <HomeHeader
          classes={classes}
          isNavOpen={navOpen}
          setIsNavOpen={setNavOpen}
        />
      )}

      <AnimatePresence>
        {navOpen && <NavigationModal isOpen={navOpen} setIsOpen={setNavOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
