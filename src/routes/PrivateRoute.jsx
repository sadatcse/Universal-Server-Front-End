import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/", { scroll: true });
    }
  }, [user, router]);

  return <>{user && <div>{children}</div>}</>;
}

export default PrivateRoute;
