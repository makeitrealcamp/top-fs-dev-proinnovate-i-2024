import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogOut, User } from 'lucide-react';

export function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            SocialApp
          </Link>

          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.username}</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <User size={20} />
                <span>Login</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}