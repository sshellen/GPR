import React from "react";

const OptimalImage = (formats) => {
  console.log(formats);
  const optimal = () => {
    if (formats.format.large) {
      return formats.format.large.url;
    } else if (formats.format.medium) {
      return formats.format.medium.url;
    } else if (formats.format.small) {
      return formats.format.small.url;
    } else if (formats.format.thumbnail) {
      return formats.format.thumbnail.url;
    } else return "";
  };

  return <img src={`${optimal()}`} />;
};

export default OptimalImage;
