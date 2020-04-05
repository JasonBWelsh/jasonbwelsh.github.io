import React, { useState, useEffect } from 'react';
import Pages from './pages';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const result = await axios(
        'https://gitconnected.com/v1/portfolio/jasonbwelsh'
      );

      console.log('DRD - log result:::', result);
      setUser(result.data);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div></div>;
  }

  return <Pages user={user} />;
}

export default App;
