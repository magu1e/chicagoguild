import React, { useEffect } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./styles.scss";

import { Tooltip } from "bootstrap"; 
import Header from "./Header.jsx";
import Bosses from "./Bosses.jsx";


const App = () => {

 useEffect(() => {
    // Selecciona los elementos que deben tener el tooltip personalizado
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
      const tooltip = new Tooltip(tooltipTriggerEl);

      // Agrega una clase personalizada cuando el tooltip aparece
      tooltipTriggerEl.addEventListener('show.bs.tooltip', () => {
        const tooltipElement = document.querySelector('.tooltip.show');
        tooltipElement && tooltipElement.classList.add('custom-tooltip');
      });

      return tooltip;
    });

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  return (
    <>
      <div data-bs-theme="dark">
        <Header />
        <Bosses />
        <footer className="footer">
          <div className="container-fluid py-5">
            <h5>Nueva Chicago Guild</h5>
            <p>Unite al discord o sos pollo salu2</p>
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
