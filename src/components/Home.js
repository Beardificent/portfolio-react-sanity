import React from "react";
import image from "../spiderman-ps4-new_1570393512.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="spidermanbg"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="home-name font-bold text-outline cursive leading-none lg:leading-snug">
          {" "}
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-1">P</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-2">O</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-3">R</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-4">T</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-3">F</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-2">O</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-1">L</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-3">I</div>
          <div className="text-5xl md:text-9xl lg:text-9xl css-text text-4">O</div>{" "}
        </h1>
      </section>
    </main>
  );
}
