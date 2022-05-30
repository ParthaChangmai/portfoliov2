import React from 'react'

const Navbar = () => {
  return (
    <div className='min-w-screen flex justify-between bg-[#182647] min-h-[60px] items-center font-bold text-white shadow-md shadow-slate-300'>
        <div>icon</div>
        <div><ul className='flex gap-3 pr-4'>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contacts</li>
        
            </ul></div>
    </div>
  )
}

export default Navbar