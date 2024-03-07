import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // // Check if user is authenticated
  // if (!user) {
  //   // Redirect to login page if user is not authenticated
  //   router.push("/login");
  //   return null; // Render nothing while redirecting
  // }

  return <>{user && <div>{children}</div>}</>;
}

export default PrivateRoute;
