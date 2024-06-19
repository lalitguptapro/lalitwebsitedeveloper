import React from 'react'

const Header = () => {
  return (
  <div className='bg-secondary py-8 text-white'>
  <div className='grid grid-cols-12 container'>
  <div className='col-span-2'>
  <div className='border-b-2 inline border-primary text-xl pb-1 font-bold'>🧑🏻 Lalit Gupta</div>
  </div>
  <div className='col-span-8'>
  <ul className='flex gap-12 items-center h-[100%] justify-center'>
  <li className='menu-link'>About</li>
  <li className='menu-link'>Workflow</li>
  <li className='menu-link'>Services</li>
  <li className='menu-link'>Pricing</li>
  </ul>
  </div>

  <div className='col-span-2'>
    <button className='bg-primary rounded-full px-8 py-2 border-2 border-transparent hover:border-2 hover:border-primary hover:bg-secondary'>Let&apos;s Talk</button>
    </div>
  </div>

  </div>
  )
}

export default Header