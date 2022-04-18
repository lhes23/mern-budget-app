import React, { useEffect, useState } from "react";
import { getAllUsers } from "../api/usersApi";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setUsers(await getAllUsers());
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.name}>
              {user.name} - {user.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllUsers;
