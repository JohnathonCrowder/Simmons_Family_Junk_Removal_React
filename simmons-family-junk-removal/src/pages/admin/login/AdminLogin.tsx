import React from "react";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <style>
        {`
          .glass {
            background: rgba(26, 26, 47, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(33, 150, 243, 0.1);
          }

          .glass-input {
            background: rgba(26, 26, 47, 0.3);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(33, 150, 243, 0.2);
            transition: all 0.3s ease;
          }

          .glass-input:focus {
            background: rgba(26, 26, 47, 0.5);
            border-color: rgba(33, 150, 243, 0.5);
            box-shadow: 0 0 15px rgba(33, 150, 243, 0.2);
          }

          .error-shake {
            animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
          }

          @keyframes shake {
            10%, 90% { transform: translate3d(-1px, 0, 0); }
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% { transform: translate3d(4px, 0, 0); }
          }

          .key-icon {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="cyber-grid fixed inset-0 -z-10 opacity-50"></div>
      <div className="fixed top-1/2 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      <div className="fixed top-1/2 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
    </div>
  );
};

export default AdminLogin;
