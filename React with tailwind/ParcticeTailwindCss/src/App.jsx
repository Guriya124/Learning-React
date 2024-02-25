import { useState } from 'react'
import { Navbar, Header } from './components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Cards */}
      {/* <h1 className='text-yellow-500 text-4xl m-6 '>Hello</h1>

      <div className=''>
        <div className='p-6 max-w-sm mx-a bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4'>
          <div>
            <img className='h-12 w-12' src="https://cdn-images-1.medium.com/max/254/1*eHdalKXpZrnlIkps0E2meA@2x.png " alt="" />
          </div>
          <div>
            <div className='text-xl font-medium'>
              TailWind Css
              <p className='text-slate-500 text-base'>Learn TailWind Css</p>
            </div>
          </div>
        </div>
        <div className='text-md text-center mt-2 mb-2 px-2 text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover: cursor-pointer'>Buy Now</div>
      </div>

      <div className="mt-4">
        <div className='max-w-sm bg-slate-50 rounded-xl mx-auto overflow-hidden md:max-w-xl'>
          <div className='md:flex'>
            <div>
              <img className='h-48 w-full object-cover md:h-full md:w-48' src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg" alt="" />
            </div>
            <div className='p-8'>
              <div className='uppercase tracking-wide text-center text-sm text-indigo-500 font-semibold'> An Amazing Card</div>
              <a href="#" className=' block mt-1 text-lg text-center font-medium text-black hover:text-indigo-500 justify-center'>TailWind Css an Amazing once you understand the power of it</a>
              <p className='mt-2 text-slate-500 text-center'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar />
      <Header />

    </>
  )
}

export default App
