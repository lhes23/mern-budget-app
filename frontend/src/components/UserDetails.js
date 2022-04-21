import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`api/users/${id}`);
      setUserDetails(data[0]);
    };
    fetchData();
  }, [id]);

  return (
    <ul>
      {userDetails && (
        <>
          <li>USERNAME: {userDetails.username}</li>
          <li>EMAIL: {userDetails.email}</li>
        </>
      )}
    </ul>
  );
};

export default UserDetails;
