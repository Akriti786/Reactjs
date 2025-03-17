import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Home, LogOut, LogIn, UserPlus } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            DeviceStore
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <Home size={20} />
                  <span>Home</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <LogIn size={20} />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <UserPlus size={20} />
                  <span>Signup</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                >
                  <ShoppingCart size={20} />
                  <span>Cart</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;