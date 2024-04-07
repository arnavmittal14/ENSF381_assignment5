import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ switchToSignup, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (username !== "" && password !== "") {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
          console.log("Login successful");
          navigate("/products", { state: { isAuth: true } });
        } else {
          setError(data.error || "Login failed");
        }
      } catch (error) {
        console.error("Login error:", error);
        setError("Login failed");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={switchToSignup}>Switch to Signup</button>
      </div>
    </div>
  );
};

export default LoginForm;
