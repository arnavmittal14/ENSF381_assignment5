import React, { useState } from "react";

const SignupForm = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== ""
    ) {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else {
        // Handle signup logic here
        console.log("Signing up with:", username, password, email);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div>
      <div>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignup}>Signup</button>
      </div>
      <div>
        <button onClick={switchToLogin}>Switch to Login</button>
      </div>
    </div>
  );
};

export default SignupForm;
