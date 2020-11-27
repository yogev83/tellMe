import React from "react";
import { setBackgroundImage } from "../utils";
import "./banner.css";

export function Banner({ title, content, image }) {
  React.useEffect(() => {
    setBackgroundImage(document.getElementsByClassName("banner")[0], image);
  }, [image]);

  return (
    <div className="banner">
      <div className="bannerContent">
        <h1>{title}</h1>
        <h2>{content}</h2>
      </div>
    </div>
  );
}
