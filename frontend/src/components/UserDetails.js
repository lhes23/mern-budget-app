import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/users/${id}`);
      setUserDetails(data[0]);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>User Details</h1>
      {userDetails && (
        <>
          <h1>{userDetails.username}</h1>
          <h2>{userDetails.email}</h2>
        </>
      )}
    </div>
  );
};

export default UserDetails;
