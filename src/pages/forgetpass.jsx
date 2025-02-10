import React, { useEffect, useState } from "react";
import axios from "axios";

const Forgetpass = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [updateUsername, setUpdateUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/users"); // Update with your JSON server URL
      setUsers(response.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);


  const handlePasswordUpdate = async () => {
    const user = users.find((user) => user.username === updateUsername);
    if (user) {
      await axios.patch(`http://localhost:3000/users/${user.id}`, { password: newPassword });
      setUpdateMessage("Password updated successfully!");
    } else {
      setUpdateMessage("User not found.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      
      <h2>Update Password</h2>
      <input
        type="text"
        placeholder="Username"
        value={updateUsername}
        onChange={(e) => setUpdateUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handlePasswordUpdate}>Update Password</button>
      <p>{updateMessage}</p>
    </div>
  );
};

export default Forgetpass;
