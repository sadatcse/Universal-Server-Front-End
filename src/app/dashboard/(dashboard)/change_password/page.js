"use client"
// Use the 'use' prefix and capitalize the component name
import React, { useState } from "react";

function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add Firebase code or password change logic here
    console.log('Password change logic goes here');
  };

  return (
    <div className="">
      <div className=" w-full p-6 ">
        <h2 className="text-4xl font-semibold  text-gray-800">Change Password</h2>
        <p className="text-sm mb-8 mt-1 ml-1 text-gray-500">Secure Your Account with a New Password</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500  text-white py-3 px-4 font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordPage;
