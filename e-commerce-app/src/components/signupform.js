import React, { useState } from "react";

const SignupForm = ({ switchToLogin, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== ""
    ) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
      } else {
        try {
          const response = await fetch("http://127.0.0.1:5000/api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, email }),
          });

          const data = await response.json();

          if (response.ok) {
            alert("User registered successfully");
            switchToLogin();
          } else {
            setError(data.error || "Signup failed");
          }
        } catch (error) {
          console.error("Signup error:", error);
          setError("Signup failed");
        }
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
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
      {error && <p style={{ color: "red" }}>{error}</p>}
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
