import React, { useEffect, useState } from "react";
import axios from "axios";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setIsLoading(true);
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
              <li key={user._id}>
                {user._id} - {user.email} - {user.username} - {user.password}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AllUsers;
