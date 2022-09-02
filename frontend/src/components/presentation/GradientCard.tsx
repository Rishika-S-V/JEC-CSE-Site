import { FC, useState } from "react";

type Props = {
  image: string;
  hoverImage: string;
  width: string;
};

const GradientCard: FC<Props> = ({ image, hoverImage, width }) => {
  const [ishover, setIshover] = useState(false);
  const style = { backgroundImage: `url('${ishover ? hoverImage : image}')` };
  return (
    <div className="background-animate inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 shadow-xl">
      <div
        className={
          "aspect-[4/3] rounded-xl bg-cover bg-center bg-no-repeat transition-all duration-500 " +
          width
        }
        style={style}
        onMouseEnter={() => setIshover((prev) => !prev)}
        onMouseLeave={() => setIshover((prev) => !prev)}
      ></div>
    </div>
  );
};
{
  /* <img src={img} alt="" /> */
}
export default GradientCard;
