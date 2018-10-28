import React from "react";

import './Planet.css';

function Planet(req) {
  const planetName = req.location.pathname.replace('/planet/', '');

  return (
    <section className={`section-planet section-planet--${planetName}`}>
      <div className="title">{ planetName }</div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
  );
}

export default Planet;
