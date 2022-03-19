import React from "react";
import Tile from "/src/Components/Tile/Tile";
import "./css/index.css";
import paddleRight from "/img/paddleRight.png";
import paddleLeft from "/img/paddleLeft.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const ArtistTiles = ({ artists }) => {
  const primaryOptions = {
    width: "100vw",
    gap: "1rem",
    focus: "center",
    pagination: true,
    keyboard: "focused",
    arrows: true,
    speed: 400,
    waitForTransition: false,
    easing: "ease",
    padding: 10,
    perPage: 2,
  };

  return (
    <>
      <section className="artistTiles desktop">
        {artists.map((artist, index) => {
          return (
            index < 5 && (
              <Tile key={`artist${index}`} artist={artist.attributes} />
            )
          );
        })}
      </section>
      <section className="artistTiles tablet">
        <Splide
          options={primaryOptions}
          renderControls={() => (
            <div className="splide__arrows">
              <button class="splide__arrow splide__arrow--prev">
                <img src={paddleLeft} />
              </button>
              <button class="splide__arrow splide__arrow--next">
                <img src={paddleRight} />
              </button>
            </div>
          )}
        >
          {artists.map((artist, index) => {
            return (
              index < 5 && (
                <SplideSlide key={`splide${index}`}>
                  <Tile key={`artist${index}`} artist={artist.attributes} />
                </SplideSlide>
              )
            );
          })}
        </Splide>
      </section>
    </>
  );
};

export default ArtistTiles;
