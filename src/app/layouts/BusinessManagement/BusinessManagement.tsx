import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import "./BusinessManagement.scss";
import { WhatsApp } from '@mui/icons-material';

const BusinessManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.querySelector(".bm-container");
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      });

      observer.observe(target);

      return () => {
        observer.disconnect();
      };
    }
  }, []);
  return (
    <Box className="bm">
        <Box className="bm-container">
          <Box className={`bm-content flex-col fade-in-vertical ${isVisible ? " visible" : "" }`}>
            <h3>Consultoría empresarial</h3>
            <p>Con nuestro enfoque centrado en el cliente, <strong>te capacitamos para liderar proyectos complejos</strong>. Nuestro equipo de expertos actúa como tu guía tecnológica de confianza, ofreciéndote estrategias innovadoras y ágiles.</p>
            <GroupsIcon />
            <Button variant='outlined'><a href="https://wa.link/qwajkq"><WhatsApp sx={{ fontSize: "2.5rem !important", margin: "0 1rem !important" }} />Contáctanos</a></Button>
          </Box>
        </Box>
    </Box>
  )
}

export { BusinessManagement };