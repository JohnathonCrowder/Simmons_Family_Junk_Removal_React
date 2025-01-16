import React from "react";
import LoginForm from "./components/LoginForm";
import { motion } from "framer-motion";

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/metal-texture.jpg)", // Add a metal texture image
          backgroundSize: "cover",
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-600 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center"
        >
          <img
            src="/logo.png"
            alt="Simmons Family Junk Removal Logo"
            className="h-16 w-auto mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Login</h1>
            <p className="text-gray-400">Simmons Family Junk Removal</p>
          </div>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-700"
        >
          <LoginForm />
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-gray-500 text-sm text-center"
        >
          © {new Date().getFullYear()} Simmons Family Junk Removal. All rights
          reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default AdminLogin;
