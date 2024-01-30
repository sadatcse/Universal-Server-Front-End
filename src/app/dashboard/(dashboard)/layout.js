'use client'
import ActiveLink from "@/components/shared/ActiveLink";
import GroupLink from "@/components/shared/GroupLink";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import logo from "../../../Asset/logo2.png";

function Layout({ children }) {
  // const { userType, loading: adminLoading } = useAdmin();
  
  const {userRole, setUserRole, user} = useContext(AuthContext);
  const router = useRouter();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('User logged out successfully', {
          duration: 3000,
          position: 'top-right',
        });

        router.push('/', { scroll: false })
      })
      .catch((error) => {
        toast.error('Logout failed. Please try again later.');
        console.error(error);
      });
  };


  // const userRole = "admin";

  const admin = <>
    

    <GroupLink groupName="Dashboard Admin Statistics">
      <ActiveLink href="/dashboard/admin/survey_statistics" >Survey Statistics</ActiveLink>
      <ActiveLink href="/dashboard/admin/user_statistics" >User Statistics</ActiveLink>
      <ActiveLink href="/dashboard/admin/active_survey" >Active Survey</ActiveLink>
      <ActiveLink href="/dashboard/admin/survey_completed_Number" > Survey Completed Number</ActiveLink>
    </GroupLink>

    <GroupLink groupName="All User Information">
      <ActiveLink href="/dashboard/admin/new_user" >New User</ActiveLink>
      <ActiveLink href="/dashboard/admin/unverified_user" >Unverified User</ActiveLink>
      <ActiveLink href="/dashboard/admin/active_user_list" >Active User list</ActiveLink>
    </GroupLink>

    <GroupLink groupName="All Company User Information">
      <ActiveLink href="/dashboard/admin/all_company_user" >All Company User</ActiveLink>
      <ActiveLink href="/dashboard/admin/update_company_user" >Update User to Company user</ActiveLink>

    </GroupLink>

  </>

  const companies =
    <>
      <li className=" text-white text-md hover:text-neutral hover:bg-blue-100">
        <ActiveLink href="/dashboard/company/company_statistics" >Company Statistics</ActiveLink>
      </li>
      
      <GroupLink groupName="Survey">
        <ActiveLink href="/dashboard/company/add_Survey" >Add Survey</ActiveLink>
        <ActiveLink href="/dashboard/company/finished_survey_list" >Finished Survey List</ActiveLink>
        <ActiveLink href="/dashboard/company/on_going_survey" >On Going Survey</ActiveLink>

      </GroupLink>
      <GroupLink groupName="User list">
        <ActiveLink href="/dashboard/company/Invite_User" >Invite User</ActiveLink>
        <ActiveLink href="/dashboard/company/participate_list" >Participate list</ActiveLink>
      </GroupLink>

    </>

  const users =
    <>
        <ActiveLink isSubRoute={false} href="/dashboard/user/user_statistics" >User Statistics</ActiveLink>
      <GroupLink groupName="Survey">
        <ActiveLink href="/dashboard/user/pending_survey" >Pending Survey</ActiveLink>
        <ActiveLink href="/dashboard/user/product_survey" >Product Based Survey</ActiveLink>
        <ActiveLink href="/dashboard/user/rating_survey" >Rating Based Survey</ActiveLink>
        <ActiveLink href="/dashboard/user/feedback_survey" >Feedback Based Survey</ActiveLink>
        <li className=" text-white text-md hover:text-neutral hover:bg-blue-100">
        <ActiveLink href="/dashboard/user/completed_survey_list" >Completed Survey List</ActiveLink>
      </li>
      </GroupLink>
      {/* <GroupLink groupName="Completed Survey List">
        <Link className="hover:bg-neutral-800 hover:text-white p-[1px]" href="/dashboard/user/Filter_by_various_option" >Filter by various optiont</Link>
      </GroupLink> */}

    </>

  const currentUserRoute = userRole === "admin" ? admin : userRole === "admin" ? companies : users;



  return (
    <div className='flex flex-col h-screen'>
      <header className="bg-blue-200 text-neutral text-xl hover:text-neutral py-4 flex justify-between items-center">
        <div href="/" className="btn btn-ghost text-xl hover:bg-transparent"><div className="avatar"  >
          <div className="w-12 rounded-full ring ring-offset-base-100 ring-offset-2 ">
            <Image width={400} height={400} src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.1866172930.1705479356&semt=sph" alt="user image" />
          </div>
        </div> <span className="font-exo text-neutral-800">Md Sadat Khan</span></div>

        <p className="font-bold text-2xl">{userRole === "admin" ? "Admin" : userRole === "company" ? "Company" : "User"}</p>

        <Link href="/" className="btn btn-ghost text-xl hover:bg-transparent"><Image className="w-16 mix-blend-multiply" width={400} height={400} src={logo} alt="logo" /> <span className="font-exo text-neutral-800">Universal Survey</span></Link>

        {/* <UserProfile user={user} role="admin" /> */}

      </header>

      <div className='flex flex-1 relative z-10'>
        <div className='w-64 min-h-full bg-neutral-800 max-h-screen overflow-auto'>
          <div className="flex items-center justify-between mb-6 relative">

          </div>
          <ul className='menu gap-3'>

            {currentUserRoute}

              <ActiveLink isSubRoute={false} href="/dashboard/edit_user_profile">View and edit user profile</ActiveLink>
            
              <ActiveLink isSubRoute={false} href="/dashboard/change_password" >Change password</ActiveLink>
            <li  className=" text-white text-md hover:text-neutral hover:bg-blue-100"><Link href="/" onClick={handleLogOut} ><FaUser className="mr-2" /> Logout</Link></li>

          </ul>
        </div>
        <div className='flex-1 p-4 max-h-screen overflow-auto'>
          {children}
          
          {/* <img src="https://img.freepik.com/free-vector/duplicate-concept-illustration_114360-4046.jpg?w=740&t=st=1706263242~exp=1706263842~hmac=f37003459bc517b25414dfef6815aa78ab60c8e83b19561aab871e6665bcf2ec" className="max-w-2xl mx-auto" /> */}
        </div>
      </div>
    </div>






  )
}

export default Layout