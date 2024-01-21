import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleSave = (data) => {
    // Store data in the database (you may use a backend server for this)
    // For simplicity, storing in local state in this example
    setUserData(data);
  };
  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => setUserData(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="container mx-auto">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <hr className="my-4" />

        <Route path="/" exact render={() => <Home onSave={handleSave} />} />
        <Route path="/dashboard" render={() => <Dashboard userData={userData} />} />
      </div>
    </Router>
  );
};

export default App;
