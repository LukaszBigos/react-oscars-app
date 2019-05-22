import React from 'react';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h3>Oscars <span>2019</span></h3>
      <section>
        <span className="active"><a href="#">home</a></span>
        <span><a href="#">Best actor</a></span>
        <span><a href="#">Best actress</a></span>
        <span><a href="#">Best films</a></span>  
      </section>
    </nav>
  )
}
