import { CSSProperties, FC } from "react";

interface Card1Props {
  text: string;
  imgUrl: string;
  style?: CSSProperties;
}

const Card1: FC<Card1Props> = ({ text, imgUrl, style }) => {
  return (
    <div
      style={style ? style : {}}
      className="group relative inline-flex h-96 w-full items-center justify-center overflow-hidden scroll-smooth rounded-md shadow-lg"
    >
      <img src={imgUrl} alt="" className="absolute h-full w-full object-fill" />
      <div className="hidden before:absolute before:inset-0 before:bg-transparent before:transition-all before:duration-300 before:content-[''] group-hover:before:bg-gray-900/90 md:block" />
      <h5
        className="relative hidden px-4 py-2 text-[0px] font-bold text-gray-100 transition-all duration-300 before:h-0 before:w-0 
      before:transition-all before:duration-300 after:h-0 after:w-0 after:transition-all after:duration-300 group-hover:text-xl group-hover:before:absolute group-hover:before:top-0 group-hover:before:left-0  group-hover:before:h-[90%]
      group-hover:before:w-1/6 group-hover:before:border-t-4 group-hover:before:border-l-4 group-hover:before:border-gray-100 group-hover:before:content-[''] group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:right-0 group-hover:after:h-[90%] group-hover:after:w-1/6 group-hover:after:translate-y-2  group-hover:after:border-b-4 group-hover:after:border-r-4 group-hover:after:border-gray-100 group-hover:after:content-[''] md:block"
      >
        {text}
      </h5>
      <h5 className="absolute left-0 right-0 bottom-0 w-full bg-gray-900/80 px-2 py-4 text-center text-xl font-bold text-gray-100 md:hidden ">
        {text}
      </h5>
    </div>
  );
};

export default Card1;
