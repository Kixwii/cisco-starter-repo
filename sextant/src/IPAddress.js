import { useState, useEffect } from 'react';

function IPAddress() {
  const [ipAddress, setIPAddress] = useState({ ipv4: '', ipv6: ''});

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIPAddress({ ipv4: data.ip, ipv6: ''});
        const ipv6Response = await ipv6Response.json();
        setIPAddress((prevIP) => ({ ...prevIP, ipv6: ipv6Data.ip }));
      } catch(error){
        console.log('Error fetching IP address: ', error);
      }
    };
    fetchIPAddress();
  }, []);
  

  return (
    <div>
      <h3> Your IP Addresses: </h3>
      {ipAddress.ipv4 && <p>IPv4: {ipAddress.ipv4}</p>}
      {ipAddress.ipv6 && <p>IPv6: {ipAddress.ipv6}</p>}
    </div>
  );
}

export default IPAddress;