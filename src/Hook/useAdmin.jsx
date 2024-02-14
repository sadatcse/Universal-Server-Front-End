'use client'
import { useEffect, useState } from "react";
import UseAxioSecure from "./UseAxioSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = UseAxioSecure();

  const [userRole, setUserRole] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        if (!authLoading && user !== undefined) {
          const res = await axiosSecure.get(`/users/admin/${user.email}`);

          console.log("user role:", res.data)

          // if (res.data === 'admin') {
          //   userType = 1;
          // } else if (res.data === 'user') {
          //   userType = 2;
          // } else if (res.data === 'company') {
          //   userType = 3;
          // }

          setUserRole(res.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user type:", error);
        throw new Error("Failed to fetch user type");
      }
    };

    fetchUserType();
  }, [authLoading, user, axiosSecure]);

  return { loading: authLoading || loading, userRole};
};

export default useAdmin;