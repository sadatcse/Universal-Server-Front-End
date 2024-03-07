import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const get_user = localStorage.getItem("user");

    if (get_user) {
      router.push("/", { scroll: true });
    }
  }, [router]);

  return <>{!user && <div>{children}</div>}</>;
}

export default PublicRoute;
