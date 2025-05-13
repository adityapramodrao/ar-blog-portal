import React from "react";
import PasswordInp from "../helper/PasswordInp";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">Login</h2>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <PasswordInp />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md transition duration-300"
          >
            Sign In
          </button>
          <p className="text-sm text-center mt-4">
            Not registered yet?{" "}
                <Link to="/signup" className="font-medium text-primary underline">
                    Create an Account
                </Link>
           </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
