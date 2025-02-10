import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/users"); // Update with your JSON server URL
      setUsers(response.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === loginUsername && user.password === loginPassword
    );
    if (user) {
      setLoginMessage("Login successful!");
    } else {
      setLoginMessage("Invalid username or password.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={loginUsername}
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{loginMessage}</p>
    </div>

    <Link to="/forgetpass"> forgot password </Link>
    </>
  );
};

export default Login;