import React, { Component } from 'react';
import './App.css';
import IPAddress from './IPAddress';


function Banner(){
  return(
    <div className="Banner">
      <h1>Sextant</h1>
      </div>
  );
}

function Exhibit({heading, children}){
 return (
  <div className="Sextant">
    <h2>{heading}</h2>
    <div className="GalleryStyle">
      {children}
    </div>
  </div>
 );
}

function App() {
  return (
    <div className="App">
      <Banner />

        < Exhibit heading="IP Address: ">
          <IPAddress />
        </Exhibit>

        <Exhibit heading="Latency: ">
          {/* Latency components here */}
        </Exhibit>

        {/*Additional Exhibit components here */}
    </div>
  );
}

export default App;
