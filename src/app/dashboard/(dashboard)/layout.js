'use client'
import useAdmin from "@/Hook/useAdmin";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import logo from "../../../Asset/logo.png";

function Layout({ children }) {
    const { userType, loading: adminLoading } = useAdmin();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            // Swal.fire({
            //   icon: 'success',
            //   title: 'Logged Out',
            //   text: 'User logged out successfully',
            // }).then(() => {
            //   navigate("/");
            // });
          })
          .catch((error) => {
            // Swal.fire({
            //   icon: 'error',
            //   title: 'Logout Failed',
            //   text: 'Logout failed. Please try again later.',
            // });
            console.error(error);
          });
      };



    return (
        <div className='flex flex-col h-screen'>
        <header className="bg-gray-800 text-white py-4 flex justify-center items-center">
          <img src={logo} alt="Company Logo" className="h-12 mr-4" />
        </header>
  
        <div className='flex flex-1'>
          <div className='w-64 min-h-full bg-gray-800 p-4'>
            <div className="flex items-center justify-between mb-6">
  
            </div>
            <ul className='menu'>
  
              {/* {dashboardOptions} */}
              
              <li><Link href="/" onClick={handleLogOut} className="flex items-center py-2 px-4 text-white hover:bg-orange-500"><FaUser className="mr-2" /> Logout</Link></li>
  
            </ul>
          </div>
          <div className='flex-1 p-4'>
          {children}
          </div>
        </div>
      </div>
  
                
  
        
    )
}

export default Layout