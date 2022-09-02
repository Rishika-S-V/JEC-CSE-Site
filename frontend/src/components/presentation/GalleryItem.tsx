import { FC } from "react";

interface GalleryItemProps {
  title: string;
  images: string[];
}

const GalleryItem: FC<GalleryItemProps> = ({ title, images }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-4xl font-bold text-gray-800">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image, ind) => (
          <img
            key={ind}
            src={image}
            className="aspect-video w-11/12 rounded-md shadow-sm transition-all hover:scale-105 hover:shadow-lg sm:w-[45%] md:w-[30%]"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryItem;
