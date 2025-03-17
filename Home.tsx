import React from 'react';
import { Laptop } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useDeviceStore } from '../store/deviceStore';

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const { getDevices, removeDevice } = useDeviceStore();

  const devices = user ? getDevices(user.id) : [];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome, {user?.email}</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Devices</h2>
          <div className="space-y-4">
            {devices.map((device) => (
              <div
                key={device.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Laptop className="text-gray-500" />
                  <div>
                    <p className="font-medium">{device.deviceName}</p>
                    <p className="text-sm text-gray-500">
                      Last login: {new Date(device.lastLogin).toLocaleString()}
                    </p>
                  </div>
                </div>
                {device.isActive && (
                  <button
                    onClick={() => removeDevice(device.id)}
                    className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
                  >
                    Logout Device
                  </button>
                )}
              </div>
            ))}
            {devices.length === 0 && (
              <p className="text-gray-500">No devices found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;