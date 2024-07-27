import Navbar from './Navebar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Createitem from './Createitem';
import TaskDetails from './TaskDetails';
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/item')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Failed to fetch items:', err));
  }, []);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/item/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setItems(items.filter(item => item.id !== id));
    });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="home-content">
          <Routes>
            <Route exact path="/home" element={<Home items={items} handleDelete={handleDelete} />} />
            <Route path="/create" element={<Createitem addItem={addItem} />} />
            <Route exact path="/details/:id" element={<TaskDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

