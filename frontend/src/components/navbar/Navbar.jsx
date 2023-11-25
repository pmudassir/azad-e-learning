import { useState } from "react";
import "./navbar.css";

import { Link, useNavigate } from "react-router-dom";
import { resetUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user.email);
  const admin = useSelector((state) => state.user.admin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(resetUser());
    navigate("/");
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
      <div className={`link-section ${showMenu ? "show" : ""}`}>
        <ul className="menu">
          <li className="item">About</li>
          <li className="item">Courses</li>
          <li className="item">Contact</li>
          {admin ? (
            <Link to="/admin">
              <li className="item">Admin</li>
            </Link>
          ) : null}
        </ul>
        <div className="user">
          {user ? (
            <>
              <button onClick={logout} className="authButton">
                Logout
              </button>

              <Avatar sx={{ marginLeft: "10px", backgroundColor: "purple" }}>
                {user?.charAt(0)}
              </Avatar>
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

export default Navbar;
