import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IInfrastructureItem } from "../types/Infrastructured";
import { InfrastructureItem } from "../components/presentation";

const Infrastructure: FC = () => {
  const [apiData, setApiData] = useState<IInfrastructureItem[]>();

  useEffect(() => {
    axios.get("infrastructure/", {}).then((res) => {
      setApiData(res.data);
    });
  }, []);

  return (
    <div className="my-6 flex flex-col gap-7 px-4">
      <div className="mx-auto flex flex-wrap justify-center gap-3">
        {apiData &&
          apiData.map((inf) => (
            <a
              key={`breadcrumb-inf-${inf.id}`}
              className="rounded bg-secondary px-4 py-2 font-semibold text-gray-100"
              href={`#inf-${inf.id}`}
            >
              {inf.title}
            </a>
          ))}
      </div>
      {apiData &&
        apiData.map((inf) => {
          return (
            <InfrastructureItem
              HTMLId={`inf-${inf.id}`}
              key={inf.id}
              description={inf.description}
              title={inf.title}
              images={inf.images}
            />
          );
        })}
    </div>
  );
};

export default Infrastructure;
