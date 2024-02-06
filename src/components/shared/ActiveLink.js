import Link from 'next/link';
import { usePathname } from 'next/navigation';

function ActiveLink({ href, children, isSubRoute = true }) {
    const pathname = usePathname()
    const isActive = pathname === href;
    console.log(pathname)

    const activeStyle = isActive ? "bg-neutral-800 text-white hover:bg-neutral-800 hover:text-white"   : "";
    return (
        <>
            {isSubRoute ?
                <Link href={href} className={`hover:bg-neutral-800 hover:text-white pl-3 p-[2px]  ${activeStyle}`} >{children}</Link>
                :
                <li className={`text-md hover:text-neutral hover:bg-blue-100 ${isActive ? "text-neutral bg-blue-100" : "text-white p-0 rounded-none"}`}>
                    <Link href={href} >{children}</Link>
                </li>
            }

        </>
    )
}

export default ActiveLink