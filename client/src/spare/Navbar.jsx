import React, { useState, useEffect } from 'react';

function Navbar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data from API');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render the fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Navbar;