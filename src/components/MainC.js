import React from 'react';
import { Card } from 'react-bootstrap';
import Hero from './Hero.js';
import CardJ from './CardJ.js'
import WD from '.././assets/WD.jpg';
import AD from '.././assets/AD.jpg';
import M from '.././assets/M.jpg';

const MainC = () => {
  return (
    <div>
      <Hero />
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center my-4'>
            <h1>Our Services</h1>
          </div>
        </div>
        <div className='row'>
            <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
                <CardJ image={WD} bidang="Web Development" />
            </div>
            <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
                <CardJ image={AD} bidang="App Development" />
            </div>
            <div className='col-md-4 col-sm-6 d-flex justify-content-center'>
                <CardJ image={M} bidang="Maintenance Server"/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default MainC;
