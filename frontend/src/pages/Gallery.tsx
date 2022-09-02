import { FC } from "react";
import { GalleryItem } from "../components/presentation";
import gallery from "../data/gallery.json";

const Gallery: FC = () => {
  return (
    <div className="mx-4 my-8 flex flex-col gap-8">
      {Object.entries(gallery).map(([title, images], i) => (
        <GalleryItem key={i} title={title} images={images} />
      ))}
    </div>
  );
};

export default Gallery;
