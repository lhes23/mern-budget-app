import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../api/Users";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllUserApi = async () => {
      try {
        setIsLoading(true);
        const data = await getAllUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log("My Error:", error);
      }
    };

    getAllUserApi();
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {isLoading ? (
          <p>Loading..</p>
        ) : (
          users.map((user) => {
            return (
              <Link to={`/dashboard/users/${user._id}`} key={user._id}>
                <li>
                  {user._id} - {user.email} - {user.username} - {user.password}
                </li>
              </Link>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AllUsers;
