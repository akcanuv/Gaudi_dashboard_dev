// SignIn.js
import React, { useState } from "react";
import { auth, googleProvider } from "../firebase_provider/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"; // Import the CSS file
import { FcGoogle } from "react-icons/fc";
import welcomeImage from '../assets/Logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { authenticateWithBackend } from "../services/authService";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const authenticateUserWithBackend = async (idToken) => {
    try {
      const response = await authenticateWithBackend(idToken);
      if (response.status === 200) {
        console.log("User authenticated with backend successfully");
      } else {
        console.error("Failed to authenticate with backend");
      }
    } catch (error) {
      console.error("Error authenticating with backend:", error);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const idToken = await user.getIdToken();

      await authenticateUserWithBackend(idToken);

      sessionStorage.setItem("idToken", idToken);
      navigate("/success");
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const idToken = await user.getIdToken();
      await authenticateUserWithBackend(idToken);
      sessionStorage.setItem("idToken", idToken);
      navigate("/success");
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <img src={welcomeImage} alt="Welcome" className="welcome-image" />
        <h1>Welcome back</h1>

        <button className="google-btn" onClick={handleGoogleSignIn}>
          <FcGoogle style={{ marginRight: "0.9rem" }} size={22} /> Continue with Google
        </button>

        <div className="divider">
          <span>or continue with</span>
        </div>
        <form onSubmit={handleEmailSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <div className="links">
          <p>
            Don't have an account yet?{" "}
            <span onClick={() => navigate("/register")}>Sign up</span>
          </p>
          <p>
            Forgot password?{" "}
            <span
            // onClick={() => navigate('/forgot-password')}
            >
              Reset it
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;