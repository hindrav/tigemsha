import React from "react";
import baz from "app/assets/images/baz.png";
import ekt from "app/assets/images/ekt.png";
import gs from "app/assets/images/gs.png";
import gm from "app/assets/images/gm.png";
import liverpool from "app/assets/images/liverpool.png";
import nestle from "app/assets/images/nestle.png";
import mazarron from "app/assets/images/mazarron.png";
import "./ClientCarousel.scss";

const images = [baz, ekt, gs, liverpool, nestle, mazarron, gm];

const ClientCarousel = () => {
  return (
    <div className="client-carousel-container">
      <div className="client-carousel">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Client ${index + 1}`} />
        ))}
        {images.map((image, index) => (
          <img key={`${index}-copy`} src={image} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export { ClientCarousel };
