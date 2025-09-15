import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-logo">💪 FitPlatform</div>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <button className="nav-login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="landing-header">
        <div className="hero-icon">🏋️‍♀️</div>
        
        <h1 className="hero-title">
          Transform Your Body,<br />
          <span className="hero-title-gradient">Transform Your Life</span>
        </h1>

        <p className="hero-description">
          Connect with world-class trainers, access premium workout programs, 
          and join a community of fitness enthusiasts ready to crush their goals.
        </p>

        <div className="button-group">
          <Link to="/login" className="btn primary">Start Your Journey</Link>
          <a href="#features" className="btn secondary">Watch Demo</a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Everything You Need to Succeed</h2>
            <p className="features-description">
              Our platform combines cutting-edge technology with expert guidance 
              to deliver results that last.
            </p>
          </div>

          <div className="feature-list">
            <div className="feature-card workout-card">
              <div className="feature-accent"></div>
              <div className="feature-icon">📚</div>
              <h3 className="feature-title">Premium Workout Library</h3>
              <p className="feature-description">
                Access thousands of professional workouts with HD videos, detailed instructions, and progress tracking.
              </p>
            </div>

            <div className="feature-card ai-card">
              <div className="feature-accent"></div>
              <div className="feature-icon">🤖</div>
              <h3 className="feature-title">AI-Powered Coaching</h3>
              <p className="feature-description">
                Get personalized workout recommendations based on your goals, fitness level, and preferences.
              </p>
            </div>

            <div className="feature-card community-card">
              <div className="feature-accent"></div>
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Global Community</h3>
              <p className="feature-description">
                Connect with like-minded fitness enthusiasts, share progress, and stay motivated together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Workouts</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Trainers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9★</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start?</h2>
          <p className="cta-description">
            Join thousands of people who have already transformed their lives. 
            Your fitness journey starts with a single click.
          </p>
          <Link to="/login" className="btn cta-btn">Get Started Free</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2024 FitPlatform. Designed to inspire, built to perform.
        </p>
      </footer>
    </div>
  );
}