import React from "react";
import { HeroContainer } from "./Hero.styles";

function Hero() {
  return (
    <HeroContainer>
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon hero"
        className="hero-img"
      />
    </HeroContainer>
  );
}

export default Hero;
