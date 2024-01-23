import Link from "next/link";


const Navbar = () => {

  const navlinks = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/primary/about">About us</Link></li>

  </>

  return (
    <header className="border-b-inherit border-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl"><img className="h-18 w-72" src="https://i.ibb.co/G7tQj4K/logo.png" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/primary/join" className="btn">Join Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;