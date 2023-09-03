"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Explore, Select, and Book Your Ideal Ride!
        </h1>
        <p className="hero__subtitle">
          Discover the joy of easy car rentals with just a few clicks.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-orange-500 text-white rounded-full mt-10 drop-shadow-lg"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
        <div className="hero__image-overlay-2"></div>
      </div>
    </div>
  );
};

export default Hero;
