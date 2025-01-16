import React from "react";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import LoginFooter from "./components/LoginFooter";

const AdminLogin: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299E1' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <LoginHeader />
          <LoginForm />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
