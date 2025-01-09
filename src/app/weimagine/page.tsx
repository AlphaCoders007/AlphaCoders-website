import React from "react";

import NewComponent from "../components/NewComponent";
import { Whatweoffer } from "./components/whatweoffer";
import { Process } from "./components/Process";
import { Technologies } from "./components/technologies";
import Container from "./components/Container";
import { Metadata } from "next";
import exp from "constants";


export const metadata: Metadata = {
  title:"We Imagine",
  description : "We imagine innovative digital solutions and web development services to help you think outside the box and transform your business.",  
}
function page() {
  return (
    <div className="">
      <Container />
      <Whatweoffer />
      <Process />
      <Technologies />
      <NewComponent />
    </div>
  );
}

export default page;
