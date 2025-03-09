// src/components/Navbar.jsx
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const { user, logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login'); // Redirect user to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2>Multi-Vendor Marketplace</h2>
        </Link>

        <ul className="navbar-links">
          {/* Public links */}
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          {!user ? (
            <>
              {/* If not logged in, show login and register links */}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              {/* If user is logged in, show profile and logout */}
              <li>
                <Link to="/profile">Profile</Link>
              </li>

              {user.role === 'vendor' && (
                <li>
                  <Link to="/vendor/dashboard">Vendor Dashboard</Link>
                </li>
              )}

              {user.role === 'admin' && (
                <li>
                  <Link to="/admin/dashboard">Admin Dashboard</Link>
                </li>
              )}

              {/* Logout link */}
              <li>
                <Button onClick={handleLogout} className="logout-button">
                  Logout
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
