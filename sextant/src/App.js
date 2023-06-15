import React, { Component } from 'react';
import './App.css';
import IPAddress from './IPAddress';
import PacketLatency from './PacketLatency';


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

class App extends Component {
  render() {
  return (
    <div className="App">
        <Banner bannerText='Sextant'/>

        < Exhibit heading="IP Address: ">
          <IPAddress />
        </Exhibit>

        <Exhibit heading=" Network Latency: ">
          <PacketLatency />
        </Exhibit>

        {/*Additional Exhibit components here */}
    </div>
  );
}
}

export default App;
