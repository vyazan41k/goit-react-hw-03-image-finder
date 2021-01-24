import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div className="Loader">
      <Loader type="Bars" color="#3f51b5" height={50} width={50} />
    </div>
  );
};

export default Loading;
