import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to={"/"}>
          <div className="icon">
            <img src="/images/logo2.png" alt="icon2" className="logo_text" />
          </div>
        </Link>
        <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </div>
      <div className={`link-section ${showMenu ? 'show' : ''}`}>
        <ul className="menu">
          <li className="item">About</li>
          <li className="item">Courses</li>
          <li className="item">Contact</li>
        </ul>
        <div className="user">
          {user ? (
            <>
              <button onClick={logout} className="authButton">
                Logout
              </button>
              <img
                alt="user-profile"
                className="avatar-image"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
            </>
          ) : (
            <Link to={"/auth"}>
              <button className="authButton">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar