import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import UserDetails from "./UserDetails";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setIsLoading(false);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(isLoading);
  }, []);

  return (
    <div>
      <h2>All Users</h2>
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
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
