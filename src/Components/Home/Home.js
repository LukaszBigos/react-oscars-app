import React from "react";

import homeImg from "../../assets/img/movie.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="main-content">
      <h2>Oscars Winners</h2>
      <img src={homeImg} alt="" />
      <section className="thumbnails">
        <div className="thumbnail-1" />
        <div className="thumbnail-2" />
        <div className="thumbnail-3" />
      </section>
    </div>
  );
}
