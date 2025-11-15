import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordRobot() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        {/* Robot Head */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            {/* Robot Face */}
            <div className="w-32 h-32 bg-gradient-to-b from-gray-700 to-gray-800 rounded-3xl relative shadow-lg border-4 border-gray-600">
              {/* Antenna */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-600"></div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              
              {/* Eyes Container */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-6">
                {/* Left Eye */}
                <div className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  {/* Eyelid */}
                  <div 
                    className="absolute inset-0 bg-gray-800 transition-all duration-500 ease-out flex items-center justify-center"
                    style={{
                      clipPath: showPassword 
                        ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' 
                        : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  >
                    <div className="w-6 h-1 bg-gray-600 rounded"></div>
                  </div>
                  {/* Pupil */}
                  <div 
                    className="w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-out"
                    style={{
                      opacity: showPassword ? 1 : 0,
                      transform: showPassword ? 'scale(1) translateY(4px)' : 'scale(0.3)'
                    }}
                  ></div>
                </div>
                
                {/* Right Eye */}
                <div className="relative w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  {/* Eyelid */}
                  <div 
                    className="absolute inset-0 bg-gray-800 transition-all duration-500 ease-out flex items-center justify-center"
                    style={{
                      clipPath: showPassword 
                        ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' 
                        : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  >
                    <div className="w-6 h-1 bg-gray-600 rounded"></div>
                  </div>
                  {/* Pupil */}
                  <div 
                    className="w-4 h-4 bg-blue-500 rounded-full transition-all duration-500 ease-out"
                    style={{
                      opacity: showPassword ? 1 : 0,
                      transform: showPassword ? 'scale(1) translateY(4px)' : 'scale(0.3)'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Mouth */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          <h2 className="mt-6 text-2xl font-bold text-gray-800">Robot Security</h2>
          <p className="text-gray-500 text-sm mt-1">
            {showPassword ? "I can see! 👀" : "Shhh... secret mode 🤫"}
          </p>
        </div>

        {/* Password Input */}
        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </div>

        {/* Info */}
        {password && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Password length:</span> {password.length} characters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}