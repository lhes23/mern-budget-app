import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneUser } from "../api";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneUser(id);
        setUserDetails(data);
      } catch (error) {
        console.log("My Error:", error);
      }
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
