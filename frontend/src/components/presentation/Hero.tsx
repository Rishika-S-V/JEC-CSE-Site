import { FC } from "react";

import { ReactComponent as JecLogo } from "../../assets/imgs/jec-logo.svg";
import IICLogo from "../../assets/imgs/IIC-logo.png";
import NAACLogo from "../../assets/imgs/NAAC-logo.png";
import heroImage from "../../assets/imgs/hero-image.png";

const Hero: FC = () => {
  return (
    <section
      className={
        "flex min-h-fit flex-col gap-12 bg-cover bg-top bg-no-repeat px-8 py-16 text-center text-gray-100 " +
        (visualViewport.height > 820 ? "max-h-[95vh]" : "pb-8")
      }
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-1 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <JecLogo className="asp w-40" />
          <div className="flex w-full flex-col ">
            <h1 className="text-3xl font-bold">JAYA ENGINEERING COLLEGE</h1>
            <p>
              Affiliated to Anna University, Chennai Approved by AICTE, New
              Delhi
            </p>
            <p className="text-sm">A Telugu Minority Institute</p>
          </div>
        </div>
        <div className="flex min-w-fit justify-center gap-8 rounded bg-gray-100/60 p-2 lg:gap-4">
          <img src={IICLogo} alt="IIC Logo" className="w-32" />
          <img src={NAACLogo} alt="NAA Logo" className="w-32" />
        </div>
      </div>

      <h2 className="flex flex-col text-4xl font-bold uppercase lg:gap-2 lg:text-5xl xl:text-6xl">
        <p>Department of</p>
        <p>computer science and engineering</p>
      </h2>
    </section>
  );
};

export default Hero;
