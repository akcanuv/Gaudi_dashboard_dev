// Register.js
import React, { useState } from "react";
import { auth, googleProvider } from "../firebase_provider/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import welcomeImage from "../assets/Logo.png";
import "./Register.css"; // Import the CSS file
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update user profile with the name
      await updateProfile(user, {
        displayName: name,
      });

      console.log("User registered:", user);
      navigate("/Gaudi_dashboard_dev"); // Redirect to the sign-in page after registration
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <h1>Sign up to get started</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword1 ? "text" : "password"}
              placeholder="Set password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="password-container">
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p className="terms">
          By signing up, you agree to our <span>Terms</span> &{" "}
          <span>Privacy</span>
        </p>
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/Gaudi_dashboard_dev")}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
