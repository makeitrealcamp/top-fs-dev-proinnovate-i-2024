import { useState, useRef } from 'react';
import { useAuthStore } from '../store/authStore';
import { Camera } from 'lucide-react';

export function Profile() {
  const { user, setUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({
          ...user,
          avatar: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user) {
      setUser({
        ...user,
        username,
      });
      setIsEditing(false);
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-32 h-32 rounded-full object-cover"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Camera className="text-white" size={24} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="mt-4 w-full max-w-xs">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setUsername(user.username);
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{user.username}</h2>
              <p className="text-gray-600">{user.email}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-2 px-4 py-2 text-sm text-blue-500 hover:text-blue-600"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Member since</p>
              <p>{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}