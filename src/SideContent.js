import { Link } from "react-router-dom";

const SideContent = ({ items = [] }) => {
  // Ensure items is an array
  const sortedItems = Array.isArray(items) ? [...items].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];

  return (
    <div className="sidecont">
      {sortedItems.length > 0 ? (
        sortedItems.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <div className="card mt-2">
              <h1 className="card-title">{item.title}</h1>
              <p>Date: {new Date(item.date).toLocaleString()}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No items available</p>
      )}
    </div>
  );
};

export default SideContent;

