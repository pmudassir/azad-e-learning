import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to={"/"}>
          <div className="icon">
            <img src="/images/logo1.png" alt="icon" className="logo" />
            <img src="/images/logo2.png" alt="icon2" className="logo_text" />
          </div>
        </Link>
      </div>
      <div className="link-section">
        <ul className="menu">
          <li className="item">About</li>
          <li className="item">Courses</li>
          <li className="item">Contact</li>
        </ul>
        <div className="avatar">
          <img
            alt="user-profile"
            className="avatar-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;