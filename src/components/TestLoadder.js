import React, { useState, useEffect } from 'react';
import Home from './Home';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay time as needed

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <img src={require("./Logo.png")} alt="Loaing..." />
        </div>
      ) : (
        <div className="home">
          {/* Home screen content */}
          <Home/>
        </div>
      )}
    </div>
  );
}

export default App;
