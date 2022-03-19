import React from "react";
import spinner from "/svg/spinner.svg";
const Loader = () => {
  return (
    <div className="spinner">
      <img src={spinner} />
    </div>
  );
};

export default Loader;
