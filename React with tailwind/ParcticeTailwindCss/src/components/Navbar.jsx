import React from 'react'


export default function Navbar() {
    return (
        <>
            {/* navbar start */}
            <nav nav className='w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center' >
                <div className='text-2xl text-indigo-700 font-bold '> PW Skills</div>
                <ul className='md:flex hidden font-semibold'>
                    <li className='mx-[10px] cursor-pointer'>Home</li>
                    <li className='mx-[10px] cursor-pointer'>About Us</li>
                    <li className='mx-[10px] cursor-pointer'>Contact Us</li>
                </ul>
                <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-md font-bold cursor-pointer'>Login/Singup</div>
                <div className='md:hidden'>
                    <a href="#" className='text-4xl'>&#8801;</a>
                </div>
            </nav >
            {/* navbar end */}
            
        </>
    )
}
