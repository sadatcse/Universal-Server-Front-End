'use client'
import useAdmin from "@/Hook/useAdmin";
import { useRouter } from 'next/navigation'
import { useEffect } from "react"; 

function Page() {
  const { userType, loading: adminLoading } = useAdmin();
  const router = useRouter();

  const navigateRole = (userRole) => {
    if (userRole == 2) {
      router.push('/dashboard/admin/home', { scroll: true })
    } else if (userRole == 3) {
      router.push('/dashboard/company/home', { scroll: false })
    } else if (userRole == 1) {
      router.push('/dashboard/user/home', { scroll: false })
    } else if (userRole == 0) {
      // router.reload();
    }
  };

  useEffect(() => {
    navigateRole(userType);
  }, [userType]); 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="border-t-8 border-blue-500 border-solid rounded-full h-16 w-16 animate-spin"></div>
        <p className="mt-4 text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default Page;