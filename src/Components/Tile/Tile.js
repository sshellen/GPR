import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/index.css";
import { ArtistTemplate } from "/src/Components/LightboxTemplates/LightboxTemplates";
import twitterBlack from "/img/twitterBlack.png";
import facebookBlack from "/img/facebookBlack.png";
import youtubeBlack from "/img/youtubeBlack.png";
import instagramBlack from "/img/instagramBlack.png";

const Tile = ({ artist }) => {
  const [openState, setState] = useState(false);

  const closeHandler = () => {
    setState(false);
  };

  let teaser =
    artist && artist.description
      ? artist.description.substr(0, 100) + " ..."
      : "";
  return (
    <>
      <div className="artist">
        {artist && artist.image !== null && (
          <img
            src={`${artist.image.data.attributes.formats.thumbnail.url}`}
          />
        )}

        <div className="description">
          <h3 className="name">{artist.name}</h3>
          <p className="teaser">{teaser}</p>

          <button className="blueButton" onClick={() => setState(true)}>
            LEARN MORE
          </button>
        </div>

        <div className="socialMedia">
          {artist.facebook && artist.facebook !== null && (
            <Link to={artist.facebook}>
              <img src={facebookBlack} />
            </Link>
          )}
          {artist.twitter && artist.twitter !== null && (
            <Link to={artist.twitter}>
              <img src={twitterBlack} />
            </Link>
          )}
          {artist.youtube && artist.youtube !== null && (
            <Link to={artist.youtube}>
              <img src={youtubeBlack} />
            </Link>
          )}
          {artist.instagram && artist.instagram !== null && (
            <Link to={artist.instagram}>
              <img src={instagramBlack} />
            </Link>
          )}
        </div>
      </div>
      <ArtistTemplate
        open={openState}
        artist={artist}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default Tile;
