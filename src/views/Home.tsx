import React from "react";
import Reservation from "../components/home/Reservation";
import QuickMenu from "src/components/home/QuickMenu";

const Home: React.FC = () => (
  <div className=" min-h-screen h-full bg-slate-300 flex flex-col items-center mt-20">
    <Reservation />
    <QuickMenu />
  </div>
);

export default Home;
