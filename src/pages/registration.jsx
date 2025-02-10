import React, { useEffect, useState } from "react";
import axios from "axios";

const Reg = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/users"); // Update with your JSON server URL
      setUsers(response.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleRegister = async () => {
    const newUser = { username, password };
    await axios.post("http://localhost:3000/users", newUser, {
      headers: { "Content-Type": "application/json" },
    });
    setUsers([...users, newUser]);
    setUsername("");
    setPassword("");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Reg;
