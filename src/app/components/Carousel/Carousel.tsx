import { carouselProps } from "app/interfaces";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";

const Carousel: React.FC<carouselProps> = ({ p1m, p2m, p3m }) => {
  const items = [
    <ProjectCard urlImg={p1m} title="Mares de papel" text="Plataforma desarollada para el Ayuntamiento de Mazarrón, España  con el objetivo de gestionar eventos mediante la emisión de tickets con código QR, facilitando así un control eficiente de la asistencia." projectUrl="http://maresdepapel.com" />,
    <ProjectCard urlImg={p2m} title="Fixing Broken Houses" text="Plataforma diseñada y desarrollada para una destacada empresa de diseño, remodelación y construcción con sede en Texas." projectUrl="https://fixingbrokenhouses.com" />,
    <ProjectCard urlImg={p3m} title="Grupo Gran Alianza Mexicana" text="Plataforma diseñada y desarrollada para una asociación política mexicana." projectUrl="https://ggam-76598.web.app/" />,
  ];
  return <AliceCarousel items={items} autoPlay autoPlayInterval={2000} infinite />;
};

export { Carousel };
