import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";
import {jwtDecode} from "jwt-decode";
import Avatar from "../Avatar/Avatar";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  console.log(User);

  
  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogOut();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-title">
            <h1 style={{ fontWeight: "bold" }}>Expense Tracker</h1>
          </Link>
          {User === null ? (
            <>
              <Link to="/auth" onClick={() => alert("Login to add expense")} className="nav-item nav-btn">
                Add Expense
              </Link>
              <Link to="/auth" onClick={() => alert("Login to view all expenses")} className="nav-item nav-btn">
                View All Expense
              </Link>
            </>
          ) : (
            <>
              <Link to="/record" className="nav-item nav-btn">
                Add Expense
              </Link>
              <Link to="/viewRecords" className="nav-item nav-btn">
                View All Expense
              </Link>
            </>
          )}
        </div>
        <div className="navbar-right">
          {User === null ? (
            <Link to="/auth" className="navbar-login">
              Log In
            </Link>
          ) : (
            <>
              <Avatar className="avatar" backgroundColor='#009bff' px='10px' py='7px' borderRadius='50%' color='white'>
                {User.user.name.charAt(0).toUpperCase()}
              </Avatar>
              <button className="navbar-login" onClick={handleLogOut}>
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
