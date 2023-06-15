import React, { useState, useEffect } from 'react';
import WebSocket from 'websocket';

function PacketLatency() {
  const [latency, setLatency] = useState(null);
  let socket = null;

  useEffect(() => {

    // Function to handle messages received from the WebSocket
    const handleData = (message) => {
      const data = JSON.parse(message.utf8Data);
      const packetTimestamp = data.timestamp;
      const currentTimestamp = Date.now();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    // Open the WebSocket connection when component mounts
    socket = new WebSocket.client();
    socket,connect('ws://localhost:55455');

    // Attach the message handler to the WebSocket
    socket.on('message', handleData);

    // Clean up function to close WebSocket connection when component unmounts
    return () => {
      // Close the WebSocket connection here
      if (socket){
        socket.close();
      }      
    };
  }, []);

  return (
    <div>
      <h3>Packet Latency:</h3>
      {latency !== null ? (
        <p>{latency} ms</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PacketLatency;
