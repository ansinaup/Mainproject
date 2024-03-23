import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Loading from './Loading';


function Load() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <Loading/> : <Home/>}
    </div>
  );
}

export default Load;