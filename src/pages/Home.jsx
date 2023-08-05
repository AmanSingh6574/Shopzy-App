import React from "react";
import Dispaly from "./Display.jsx";

function Home() {
  return (
    <div className=" relative">
      <div className="w-full  relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 absolute z-10 inset-x-0 top-1/2 transform -translate-y-1/2 flex mx-auto justify-center items-center ">
          Explore Our Wide Selection Today!
        </h1>
        <img
          className="w-full h-[500px] opacity-80 md:h-[600px] lg:h-[750px] object-cover outline-none border-none"
          loading="lazy"
          src="https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          alt="home-img"
        />
      </div>
      <Dispaly />
    </div>
  );
}

export default Home;
