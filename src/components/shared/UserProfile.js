import Image from 'next/image'
import Link from 'next/link'

function UserProfile({user, role}) {
    return (
        <div className="hs-dropdown relative group inline-flex mr-6 cursor-pointer" id="hs-dropdown-with-header " type="button">
            <div className="avatar"  >
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image width={400} height={400} src="https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?size=626&ext=jpg&ga=GA1.1.1866172930.1705479356&semt=sph" alt="user image" />
                </div>
            </div>

        </div>
    )
}

export default UserProfile