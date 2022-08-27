import navigationData from "../data/navigationData";
import tailwindData from "../data/tailwind.json";

import { FC } from "react";

import { Card1, Hero } from "../components/presentation";
import CountUp from "react-countup";
import { HorizontalScroll } from "../components/container";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const vw = Math.ceil(visualViewport.width);
  const bp = tailwindData.breakpoints;
  console.log(vw);
  return (
    <>
      <Hero />
      <main className="my-12 flex flex-col gap-8 px-4">
        <article className="flex flex-col items-center justify-center gap-4  sm:flex-row lg:px-32">
          <section className="flex flex-col gap-1">
            <h3 className="text-3xl font-semibold text-gray-900">
              Vision &amp; Mision
            </h3>
            <p className="text-md px-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa necessitatibus provident perferendis adipisci, soluta
              voluptatem reiciendis quisquam optio repudiandae placeat eveniet
              exercitationem minima rerum aut quis voluptas suscipit? Magnam a
              enim, maxime obcaecati ullam impedit nostrum numquam beatae sunt
              quibusdam placeat unde commodi totam saepe. Non quam modi et.
            </p>
          </section>
          <aside className="flex w-fit flex-col items-center justify-center rounded-2xl bg-sky-200 px-8 py-6 ">
            <CountUp
              end={30000}
              separator=","
              enableScrollSpy
              className="text-xl font-bold text-gray-800"
            />
            <p className="uppercase text-gray-500">Views</p>
          </aside>
        </article>

        <div className="flex flex-col gap-4">
          <h3 className="text-center text-3xl font-semibold text-gray-900">
            Get a Look Into Here
          </h3>
          <HorizontalScroll>
            {navigationData
              .filter((nav) => !nav.isOnHome)
              .map((nav, i) => (
                <Link key={i} to={nav.to}>
                  <Card1
                    text={nav.text}
                    imgUrl={nav.imgUrl}
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
                </Link>
              ))}
          </HorizontalScroll>
        </div>
      </main>
    </>
  );
};

export default Home;
