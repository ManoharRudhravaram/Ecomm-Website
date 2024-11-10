import React from 'react';
import '../Css/Home.css';
import Corousal from './Common/Corousal';
import Allproduct from './Allproduct';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="list d-flex flex-nowrap">
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="Grocery" />
              <h4>Grocery</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="Mobile" />
              <h4>Mobile</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="Fashion" />
              <h4>Fashion</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="Electronics" />
              <h4>Electronics</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100" alt="Bikes" />
              <h4>Bikes</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100" alt="Appliances" />
              <h4>Appliances</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="Travel" />
              <h4>Travel</h4>
            </div>
            <div className="list-item text-center">
              <img src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" alt="Kids Toys" />
              <h4>Kids Toys</h4>
            </div>
          </div>
        </div>
      </div>
      
      <Corousal />
      <Allproduct />
    </>
  );
}

export default Home;
