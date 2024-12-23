import React from 'react'
import { Cover } from "@/app/weimagine/UI/cover";
import { ContainerScroll } from "../UI/container-scroll-animation";
import Image from "next/image";
const Container = () => {
  return (
    <div className=" relative flex flex-col z-30 bg-background-light transition-colors overflow-hidden font-thicccboi">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold ">
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
  )
}

export default Container