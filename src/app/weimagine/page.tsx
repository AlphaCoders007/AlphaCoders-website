import React from "react";

import NewComponent from "../components/NewComponent";
import { Whatweoffer } from "./components/whatweoffer";
import { Process } from "./components/Process";
import { Technologies } from "./components/technologies";
import Container from "./components/Container";
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
