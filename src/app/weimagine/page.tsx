import React from "react";
import { Cover } from "@/app/components/ui/cover";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import NewComponent from "../components/NewComponent";
import { Whatweoffer } from "../components/whatweoffer";
import { Process } from "../components/Process";
import { Technologies } from "../components/technologies";
function page() {
  return (
    <div>
      <div className=" relative flex flex-col z-30 bg-white overflow-hidden font-thicccboi">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold  text-black ">
                Imagination Sparks Innovation at <br />
                <span className="text-4xl md:text-[6rem] bg-gradient-to-r from-[#bf00ff] to-[#ff5633] text-transparent bg-clip-text font-bold mt-1 leading-none">
                  AlphaCoders
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/wecreate4.webp`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6">
          <span className="bg-gradient-to-r from-neutral-500 to-neutral-500 text-transparent bg-clip-text font-thicccboi">
          <Cover> Cultivate ideas and explore creative
            possibilities.</Cover>
          </span>
        </h1>
      </div>
      <Whatweoffer />
      <Process />
      <Technologies />
      <NewComponent />
    </div>
  );
}

export default page;
