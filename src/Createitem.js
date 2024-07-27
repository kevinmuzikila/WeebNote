import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Createitem = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [description, setDescript] = useState('');
  const [type, setType] = useState('None');
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/home');
  }

  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = formatDateTime(currentDate);

    const item = { title, description, type, date: formattedDate };

    fetch('http://localhost:8000/item', {
      method: 'POST', 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(res => res.json())
      .then(data => {
        addItem(data);
        navigate('/home');
      });
  };

  return (
    <div className="create-form">
      <h1>New Notes </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <input 
            className="form-control"
            type="text"
            required
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="floatingInputValue">Note Title:</label>
        </div>
        <div className="form-floating">
          <label htmlFor="floatingTextarea"></label>
          
          <textarea 
            className="form-contro"
            required
            value={description}
            onChange={(e) => setDescript(e.target.value)}
            cols="83" rows="15"
          ></textarea>
        </div>
        <div className="input-group input-group-sm mb-3">
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
            className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"
          >
            <option>Study Material</option>
            <option>Projects</option>
            <option>Activity</option>
            <option>Other</option>
          </select>
        </div>
        <span>
          <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-info ms-3">Create Task</button>
        </span>
      </form>
    </div>
  );
};

export default Createitem;
