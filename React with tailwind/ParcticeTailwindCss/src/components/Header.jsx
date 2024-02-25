import React from 'react'

export default function Header() {
    return (
        <>
            <header className='w-full h-auto'>
                <div className='position: relative'>
                    <img className='w-full hidden md:block overflow-hidden object-fit backround-attachment: fixed brightness-.5' src="https://images.pexels.com/photos/1406866/pexels-photo-1406866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className='w-full md:hidden' src="https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="text-overlay position: absolute mt-9 mx-10  ">
                    <h1 className=' p-4 text-center mt-20 text-3xl flex flex-col'>Hello Guys, My Name is Guriya Kumari</h1>
                    <p className=' text-center'>Learning Tailwind Css With React</p>
                </div>
            </header>

            {/* Our Student section start */}
            <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>

            </div>
            {/* Our Student section end */}
        </>
    )
}
