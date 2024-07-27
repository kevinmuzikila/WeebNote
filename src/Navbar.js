import {Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
           
            <Link to="/home"> <h1><i className="bi bi-journal-bookmark"></i>Take Notes App </h1>  </Link>
          <div className="Nav-cont">
            <Link to="/create" className="btn btn-black ">Add New Notes  </Link>
            </div>  
        </nav>
     );
}
 
export default Navbar;