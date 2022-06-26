import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="navbar">
          <div className="control">
            <Link to="/add">Add</Link>
            <Link to="/">Home</Link>
          </div>
          <h1>Expenses Tracker</h1>
        </div>
     );
}
 
export default Navbar;
