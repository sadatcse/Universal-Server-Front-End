"use client"
import { useState } from 'react';
import PlusOrMinus from './PlusOrMinus';

function GroupLink({ children, groupName, ...rest }) {
  const [openSubRoute, setOpenSubRoute] = useState(false);
  return (
    <li className={`flex items-center text-md hover:text-neutral-800  hover:bg-white ${openSubRoute ? "bg-white text-neutral-800" : "text-white"} relative`} >
      <div className={`w-full rounded-none hover:text-neutral-800 ${openSubRoute ? "bg-stone-300 text-neutral-800 hover:bg-stone-300" : "text-white"}`} onClick={() => setOpenSubRoute(!openSubRoute)}>{groupName}</div>
      <PlusOrMinus isTrue={openSubRoute} />
      <ul className={`flex flex-col gap-2 before:top-0 transition-all duration-500 w-full overflow-auto ${openSubRoute ? "h-40 mt-2" : "h-[0] p-0 mt-0"}`}>
        {children}

      </ul>
    </li>
  )
}

export default GroupLink