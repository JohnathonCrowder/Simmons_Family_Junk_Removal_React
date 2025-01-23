import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/blog/BlogPage"; // New blog page component
import BlogPostPage from "./pages/blog-post/BlogPostPage"; // Individual post page
import AdminLogin from "./pages/admin/login/AdminLogin";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CreatePost from "./pages/create-post/CreatePost";
import EditPost from "./pages/edit-post/EditPost";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServiceDetail from "./pages/ServiceDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/post/:id" element={<BlogPostPage />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <CreatePost />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/edit-post/:id"
                element={
                  <PrivateRoute>
                    <EditPost />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
