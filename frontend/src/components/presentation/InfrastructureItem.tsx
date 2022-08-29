import { FC } from "react";
import { IInfrastructureItem } from "../../types/Infrastructured";
import { HorizontalScroll } from "../container";
import tailwindData from "../../data/tailwind.json";

const InfrastructureItem: FC<Partial<IInfrastructureItem>> = ({
  title,
  description,
  images,
}) => {
  const vw = Math.ceil(visualViewport.width);
  const bp = tailwindData.breakpoints;
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <HorizontalScroll>
        {images?.map((img, i) => (
          <img
            className="inline-flex aspect-video rounded-lg object-cover object-center"
            src={img}
            style={{
              minWidth: "fit",
              width:
                vw <= bp.sm
                  ? "80%"
                  : vw <= bp.md
                  ? "60%"
                  : vw <= bp.lg
                  ? "40%"
                  : vw <= bp["2xl"]
                  ? "30%"
                  : "20%",
              height: "10rem",
            }}
          />
        ))}
      </HorizontalScroll>
      <p className="mx-auto max-w-6xl px-3 text-gray-600 xl:px-0">
        {description}
      </p>
    </div>
  );
};

export default InfrastructureItem;
