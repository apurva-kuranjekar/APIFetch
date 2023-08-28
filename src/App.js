import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {categories.map(category => (
          <div className="col-md-4" key={category}>
            <div className="card" style={{ width: '14rem' }}>
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <p className="card-text">
                {category}
                </p>
                <h6 className="card-category">{category}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
