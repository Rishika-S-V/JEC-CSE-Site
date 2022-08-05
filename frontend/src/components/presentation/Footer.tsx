import navigationData from "../../data/navigationData.json";

import { ReactComponent as EnvelopeIcon } from "../../assets/icons/envelope-solid.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-solid.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/map-location-dot-solid.svg";
import { ReactComponent as YtIcon } from "../../assets/icons/youtube-brands.svg";
import { ReactComponent as FbIcon } from "../../assets/icons/square-facebook-brands.svg";
import { ReactComponent as JecLogoWhite } from "../../assets/imgs/jec-logo-white.svg";

import footerImg from "../../assets/imgs/footer.jpeg";
import { NavLink } from "react-router-dom";

type FooterProps = {
  classes?: string;
};

const Footer = ({ classes }: FooterProps) => {
  const logoSize = "5rem";
  return (
    <footer
      className={
        "relative flex w-full flex-col-reverse justify-between gap-4 bg-gray-900 bg-cover bg-top bg-no-repeat fill-gray-50 stroke-gray-500 p-4 pb-10 text-gray-50 md:flex-row md:gap-2 lg:pb-4" +
        " " +
        classes
      }
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${footerImg})`,
      }}
    >
      {/* footer contact */}
      <div className="stroke md:item-start flex flex-col items-center gap-2 md:gap-4">
        <a className="flex items-center justify-center gap-2 text-sm md:w-full md:justify-start">
          <EnvelopeIcon className="stroke w-6 md:w-8" />
          <p className="">Mail Us</p>
        </a>
        <div className="flex items-center justify-center gap-2 text-sm md:w-full md:justify-start">
          <PhoneIcon className="stroke w-6 md:w-8" />
          <div className="flex flex-col">
            <p className="">9234568255</p>
            <p className="">9658462147</p>
          </div>
        </div>
        <a className="flex items-center justify-center gap-2 text-sm md:w-full md:justify-start">
          <MapIcon className="stroke min-w[1.5rem] w-6 md:w-8 md:min-w-[2rem]" />
          <div>
            <p className="">ADDRESS</p>
            <div className="text-xs font-light ">
              <p>Jaya Engineering college, Chennai-6000024.</p>
              <p>Thiruninravur, Chennai-6000024.</p>
            </div>
          </div>
        </a>
      </div>

      {/* footer middle */}
      <div className="flex flex-col items-center justify-center gap-6">
        {/* footer nav */}
        <nav className="flex flex-wrap items-center justify-center gap-4">
          {navigationData.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className="footer-navlink hover:active"
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>
        {/* footer social media */}
        <div className=" flex items-center justify-center gap-8">
          <a href="#" aria-label="YouTube Channel">
            <YtIcon className="w-8" />
          </a>
          <a href="#" aria-label="Facebook Page">
            <FbIcon className="w-6" />
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center justify-center text-center">
        <JecLogoWhite className="lg-w-44 h-28 w-28 stroke-0 md:h-32 md:w-32 lg:h-44 lg:w-44" />
        <div className="flex flex-col items-center">
          <p>
            Approved by AICTE, New Delhi, Affilliated&nbsp;to
            Anna&nbsp;University, Chennai
          </p>
          <p>A Telugu Minority Institute</p>
        </div>
      </div>
      <p className="absolute bottom-4 left-4 text-xs">
        Copyright @ 2022 | Jaya Engineering College, Chennai.
      </p>
    </footer>
  );
};

export default Footer;
