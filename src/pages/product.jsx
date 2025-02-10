import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/users"); // Update with your JSON server URL
      setUsers(response.data);
    };

    fetchUsers();
  }, []);


  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
