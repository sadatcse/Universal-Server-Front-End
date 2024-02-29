"use client";
import ActiveLink from "@/components/shared/ActiveLink";
import GroupLink from "@/components/shared/GroupLink";
import { AuthContext } from "@/providers/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import logo from "../../../Asset/logo2.png";
function Layout({ children }) {
  // const { userType, loading: adminLoading } = useAdmin();

  const { userRole, setUserRole, user, logOut, currentUser } =
    useContext(AuthContext);
  const router = useRouter();
  // const {userRole} = useAdmin()
  console.log(userRole);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully", {
          duration: 3000,
          position: "top-right",
        });

        router.push("/", { scroll: false });
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again later.");
        console.error(error);
      });
  };

  // const userRole = "admin";

  const admin = (
    <>
      <GroupLink groupName="Dashboard Overview">
        <ActiveLink href="/dashboard/admin/system_statistics">
          System Statistics
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/total_surveys">
          Total Surveys
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/participants">
          Participants
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/response_analytics">
          Response Analytics
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Survey Management">
        <ActiveLink href="/dashboard/admin/create_new_survey">
          Create New Survey
        </ActiveLink>
        {/* <ActiveLink href="/dashboard/admin/survey_analytics" >Create New Survey</ActiveLink> */}
        <ActiveLink href="/dashboard/admin/visualizations_and_reports">
          Visualizations and reports
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/manage_survey_templates">
          Manage Survey Templates
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/manage_survey_layout">
          Manage Survey Layout
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/survey_version_control">
          Survey Version Controls
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Participant Management">
        <ActiveLink href="/dashboard/admin/users">All Perticipiants</ActiveLink>
        <ActiveLink href="/dashboard/admin/user_roles_and_permissions">
          User Roles and Permissions
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/user_activity_monitoring">
          User Activity Monitoring
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/participant_analytics">
          Participant Analytics
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Notifications & Alerts">
        <ActiveLink href="/dashboard/admin/system_notifications">
          System Notifications
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/survey_status_updates">
          Survey Status Updates
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/critic">Critic</ActiveLink>
      </GroupLink>
      <GroupLink groupName="Data Management">
        <ActiveLink href="/dashboard/admin/data_import">Data Import</ActiveLink>
        <ActiveLink href="/dashboard/admin/data_export">Data Export</ActiveLink>
        <ActiveLink href="/dashboard/admin/data_integrity_checks">
          Data Integrity Checks
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="System Configuration">
        <ActiveLink href="/dashboard/admin/general_settings">
          General Settings
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/security_settings">
          Security Settings
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/notifications_settings">
          Notification Settings
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Administrator Profile">
        <ActiveLink href="/dashboard/admin/view_and_edit_admin_information">
          View and edit admin information
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/activity_history_and_logs">
          Activity history and logs
        </ActiveLink>
        <ActiveLink href="/dashboard/admin/preferences">Preferences</ActiveLink>
      </GroupLink>
    </>
  );

  const companies = (
    <>
      <ActiveLink href="/dashboard/company/creator_profile">
        Creator Profile
      </ActiveLink>

      <GroupLink groupName="Survey">
        <ActiveLink href="/dashboard/company/create_survey">
          Create Survey
        </ActiveLink>
        <ActiveLink href="/dashboard/company/AI_survey_creator">
          AI Survey Creator
        </ActiveLink>
        <ActiveLink href="/dashboard/company/manage_survey">
          Manage Survey
        </ActiveLink>
        <ActiveLink href="/dashboard/company/survey_history">
          Survey History
        </ActiveLink>
        <ActiveLink href="/dashboard/company/share_survey">
          Share Survey
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Response">
        <ActiveLink href="/dashboard/company/view_response">
          View Response
        </ActiveLink>
        <ActiveLink href="/dashboard/company/export_response">
          Export Response
        </ActiveLink>
      </GroupLink>

      <GroupLink groupName="Participate">
        <ActiveLink href="/dashboard/company/create_participate">
          Create Participate
        </ActiveLink>
        <ActiveLink href="/dashboard/company/view_participate">
          View Participate
        </ActiveLink>
        <ActiveLink href="/dashboard/company/invite_participate">
          Invite Participate
        </ActiveLink>
      </GroupLink>
      <GroupLink groupName="Import & Export">
        <ActiveLink href="/dashboard/company/import_data">
          Import Data
        </ActiveLink>
        <ActiveLink href="/dashboard/company/export_data">
          Export Data
        </ActiveLink>
      </GroupLink>
    </>
  );

  const users = (
    <>
      <ActiveLink isSubRoute={false} href="/dashboard/user/available_surveys">
        Available Surveys
      </ActiveLink>
      <ActiveLink isSubRoute={false} href="/dashboard/user/view_response">
        View responses
      </ActiveLink>
      <ActiveLink isSubRoute={false} href="/dashboard/user/feedback_report">
        FeedBack Report
      </ActiveLink>
      <ActiveLink isSubRoute={false} href="/dashboard/user/participant_profile">
        Participant Profile
      </ActiveLink>
      <ActiveLink isSubRoute={false} href="/dashboard/user/preferences">
        Preferences
      </ActiveLink>
    </>
  );

  const currentUserRoute =
    userRole === "Administrator"
      ? admin
      : userRole === "Survey Creator"
      ? companies
      : users;

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-200 text-neutral text-xl hover:text-neutral py-4 flex justify-between items-center">
        <div href="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-offset-base-100 ring-offset-2 ">
              <Image
                width={400}
                height={400}
                src={
                  currentUser?.Photourl
                    ? currentUser?.Photourl
                    : user?.Photourl
                    ? user?.Photourl
                    : "/no_user.jpg"
                }
                alt="user image"
              />
            </div>
          </div>{" "}
          <span className="font-exo text-neutral-800">Md Sadat Khan</span>
        </div>

        <p className="font-bold text-2xl">{userRole} </p>

        <Link href="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <Image
            className="w-16 mix-blend-multiply"
            width={400}
            height={400}
            src={logo}
            alt="logo"
          />{" "}
          <span className="font-exo text-neutral-800">Universal Survey</span>
        </Link>

        {/* <UserProfile user={user} role="admin" /> */}
      </header>

      <div className="flex flex-1 relative z-10 ">
        <div className="w-64 bg-neutral-800 h-[90vh] overflow-auto relative pt-8">
          {/* <button className="text-neutral absolute top-3 right-2 text-2xl bg-yellow-200 px-4 py-1"><FaArrowLeftLong /></button> */}

          <ul className="menu gap-3">
            {currentUserRoute}

            <ActiveLink isSubRoute={false} href="/dashboard/change_password">
              Change password
            </ActiveLink>
            <li className=" text-white text-md hover:text-neutral hover:bg-blue-100">
              <Link href="/" onClick={handleLogOut}>
                <FaUser className="mr-2" /> Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4 h-[90vh] overflow-auto dark:bg-white relative">
          {/* <button className="text-neutral absolute top-3 left-0 text-2xl bg-yellow-200 px-4 py-1"><FaArrowRightLong /></button> */}
          {children}

          {/* <img src="https://img.freepik.com/free-vector/duplicate-concept-illustration_114360-4046.jpg?w=740&t=st=1706263242~exp=1706263842~hmac=f37003459bc517b25414dfef6815aa78ab60c8e83b19561aab871e6665bcf2ec" className="max-w-2xl mx-auto" /> */}
        </div>
      </div>
    </div>
  );
}

export default Layout;
