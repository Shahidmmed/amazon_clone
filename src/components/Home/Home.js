import React from "react";
import Hero from "../Hero/Hero";
import Product from "../Product/Product";
import { HomeContainer, HomeRow } from "./Home.styles";

function Home() {
  return (
    <HomeContainer>
      <Hero />
      <HomeRow>
        <Product
          id="75236985"
          title="Fitbit Charge 4"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC/SX466_.jpg"
        />
        <Product
          id="45236985"
          title="Nintendo Switch Pro Controller"
          price={69.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UL480_QL65_.jpg"
        />
        <Product
          id="25321486"
          title="Victrola Vintage Record Player"
          price={49.89}
          rating={4.5}
          image="https://m.media-amazon.com/images/I/71q-KKcG4aL._AC_UL480_QL65_.jpg"
        />
      </HomeRow>
      <HomeRow>
        <Product
          id="94128753"
          title="Amazon Basics Portable Foldable Photo Studio Box with LED Light - 25 x 30 x 25 Inches"
          price={299.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/711x+T7smzL._AC_UY327_QL65_.jpg"
        />
        <Product
          id="17528934"
          title="Graco DuoGlider Double Stroller | Lightweight Double Stroller with Tandem Seating, Glacier"
          price={189.97}
          rating={5}
          image="https://m.media-amazon.com/images/I/91dwoBmSshL._AC_UY327_QL65_.jpg"
        />
      </HomeRow>
      <HomeRow>
        <Product
          id="57854126"
          title="Samsung LC24F392FHNXZA 24-inch Curved LED Gaming Monitor (Super Slim Design), 60Hz Refresh Rate w/AMD FreeSync Game Mode (Renewed)"
          price={158.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71ZIHg8C+5L._AC_UY327_FMwebp_QL65_.jpg"
        />
      </HomeRow>
    </HomeContainer>
  );
}

export default Home;
