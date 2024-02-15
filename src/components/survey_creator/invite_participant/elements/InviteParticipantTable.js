'use client'
import { CiSearch } from "react-icons/ci";

// using fake data now
const userData = [
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "johndoe@yahoo.com",
      "profession": "Marketing Manager",
      "mobile": "+1234567890"
    },
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 2,
      "name": "Jane Smith",
      "age": 28,
      "email": "johesmith@yahoo.com",
      "profession": "Software Engineer",
      "mobile": "+1987654321"
    },
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 3,
      "name": "Sam Wilson",
      "age": 35,
      "email": "samwilson@yahoo.com",
      "profession": "Product Manager",
      "mobile": "+1122334455"
    },
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 4,
      "name": "Sara Jones",
      "age": 32,
      "email": "sarajones@yahoo.com",
      "profession": "Financial Analyst",
      "mobile": "+1555666777"
    },
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 5,
      "name": "Alex Rodriguez",
      "age": 27,
      "email": "alexroot@yahoo.com",
      "profession": "HR Manager",
      "mobile": "+1666999888"
    },
    {
      "image": "https://online-survey-web-d.vercel.app/_next/image?url=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Fhandsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1866172930.1705479356%26semt%3Dsph&w=640&q=75",
      "id": 6,
      "name": "Emily White",
      "age": 29,
      "email": "emilywhtie@yahoo.com",
      "profession": "Graphic Designer",
      "mobile": "+1777888999"
    }
  ]

export default function InviteParticipantTable() {
  
  return (
    <section className='md:w-[95%] mx-auto'>
      
      {/* main div */}
      <div className='mt-4 p-4 rounded-lg border border-gray-100 shadow-sm'>
        {/* search div */}
        <div className='flex p-2 rounded-lg shadow-sm border gap-2'>
          <button className='text-2xl ml-1'><CiSearch /></button>
          <input placeholder='Search by name, survey name or email' className='text-sm outline-none w-full'></input>
        </div> 
        {userData.length == 0 ?
          <>
            {/* loading section */}
            <section>
              <div className="skeleton h-14 w-full mt-9 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
              <div className="skeleton h-9 w-full mt-5 opacity-50"></div>
            </section>
          </>
          : <> 
            {/* customised table */}
            <section className='mt-4  overflow-auto'>
              <div className="overflow-x-auto rounded-l-lg">
                <table className="table ">
                  {/* head */}
                  <thead className=''>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Age</th>
                      <th>Profession</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userData.map(user =>
                        <tr key={user._id}>
                          <td><img src={user.image} className='w-10 rounded-lg' alt="" /></td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.mobile}</td>
                          <td>{user.age}</td>
                          <td>{user.profession}</td>
                          <td>
                          <button className="btn btn-ghost btn-xs bg-blue-300">Invite</button>
                          </td>
                        </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </section>
          </>
        }
      </div>
    </section>
  )
}