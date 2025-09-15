import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      try {
        const response = await fetch("http://127.0.0.1:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });

        const data = await response.json();

        if (response.ok) {
        localStorage.setItem("token", data.token);
        const role = data.user.role;

        if (role === "super_admin") {
            window.location.href = "/super-admin-dashboard";
        } else if (role === "creator") {
            window.location.href = "/creator-dashboard";
        } else {
            window.location.href = "/user-dashboard";
        }
        }
        else {
           alert(data.error || "Login failed");
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("Something went wrong!");
      }
    } else {
      // SIGNUP
      try {
        const response = await fetch("http://127.0.0.1:5000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            role: "user"
          })
        });

        const data = await response.json();
        if (response.ok) {
          alert("Signup successful! Please log in.");
          setIsLogin(true);
        } else {
          alert(data.error || "Signup failed");
        }
      } catch (err) {
        console.error("Signup error:", err);
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };


  return (
    <div className="login-container">
      {/* Background Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      {/* Header */}
      <header className="login-header">
        <Link to="/" className="back-home">
          <span className="back-arrow">←</span>
          <span className="brand-logo">💪 FitPlatform</span>
        </Link>
      </header>

      {/* Main Content */}
      <div className="login-content">
        <div className="login-card">
          {/* Card Header */}
          <div className="card-header">
            <div className="welcome-icon">
              {isLogin ? "👋" : "🚀"}
            </div>
            <h1 className="card-title">
              {isLogin ? "Welcome Back!" : "Join FitPlatform"}
            </h1>
            <p className="card-subtitle">
              {isLogin 
                ? "Ready to continue your fitness journey?" 
                : "Start your transformation today"
              }
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="mode-toggle">
            <button 
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-icon">👤</div>
              </div>
            )}

            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="input-field"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <div className="input-icon">📧</div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <div className="input-icon">🔒</div>
            </div>

            {!isLogin && (
              <div className="input-group">
                <label className="input-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="input-field"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <div className="input-icon">🔐</div>
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#forgot" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              <span className="btn-text">
                {isLogin ? "Sign In" : "Create Account"}
              </span>
              <span className="btn-icon">→</span>
            </button>
          </form>

          {/* Social Login */}
          <div className="social-section">
            <div className="divider">
              <span>Or continue with</span>
            </div>
            <div className="social-buttons">
              <button className="social-btn google-btn">
                <span className="social-icon">🔍</span>
                Google
              </button>
              <button className="social-btn facebook-btn">
                <span className="social-icon">📘</span>
                Facebook
              </button>
              <button className="social-btn apple-btn">
                <span className="social-icon">🍎</span>
                Apple
              </button>
            </div>
          </div>

          {/* Switch Mode */}
          <div className="switch-mode">
            <span>
              {isLogin ? "New to FitPlatform?" : "Already have an account?"}
            </span>
            <button 
              type="button" 
              className="switch-btn"
              onClick={toggleMode}
            >
              {isLogin ? "Create Account" : "Sign In"}
            </button>
          </div>
        </div>

        {/* Side Content */}
        <div className="side-content">
          <div className="feature-highlight">
            <div className="highlight-icon">⭐</div>
            <h3>Join 50K+ Users</h3>
            <p>Transform your body with our proven workout programs and expert guidance.</p>
          </div>
          <div className="feature-highlight">
            <div className="highlight-icon">🎯</div>
            <h3>Personalized Plans</h3>
            <p>AI-powered recommendations tailored to your fitness goals and experience level.</p>
          </div>
          <div className="feature-highlight">
            <div className="highlight-icon">🏆</div>
            <h3>Track Progress</h3>
            <p>Monitor your achievements and celebrate milestones on your fitness journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}