'use client'
import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import UseAxioSecure from "./UseAxioSecure";

const useAdmin = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = UseAxioSecure();

  const [userType, setUserType] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        if (!authLoading && user !== undefined) {
          const res = await axiosSecure.get(`/users/admin/${user.email}`);
          let userType = 0;

          if (res.data === 'admin') {
            userType = 1;
          } else if (res.data === 'user') {
            userType = 2;
          } else if (res.data === 'company') {
            userType = 3;
          }

          setUserType(userType);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user type:", error);
        throw new Error("Failed to fetch user type");
      }
    };

    fetchUserType();
  }, [authLoading, user, axiosSecure]);

  const userTypeReady = userType !== undefined;

  return { loading: authLoading || loading, userType: userTypeReady ? userType : 0 };
};

export default useAdmin;