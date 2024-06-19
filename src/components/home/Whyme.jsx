import React from 'react'
import { CgWebsite } from "react-icons/cg";

const Whyme = () => {
  return (
    <div>
        

        <div className='grid grid-cols-12 container text-white py-12'>
            <div className='col-span-4'><div>#Why Choose Me</div></div>
            <div className='col-span-2 flex flex-col gap-8'>
                <div className='bg-white z-0 text-black text-center p-12 rounded-full text-xl font-bold flex justify-center flex-col items-center'><CgWebsite size={40} />Website Design</div>
                <div className='bg-white text-black text-center p-12 rounded-full text-xl font-bold flex justify-center flex-col items-center'><CgWebsite size={40} />Website Design</div>
            </div>
            <div className='col-span-4 flex items-center justify-center center-pattern'>
                <div className='bg-white p-24 text-primary rounded-full text-xl font-bold flex flex-col items-center'><CgWebsite size={40} />Website Design</div>
            </div>
            <div className='col-span-2 flex flex-col gap-8'>
            <div className='bg-white text-black text-center p-12 rounded-full text-xl font-bold flex justify-center flex-col items-center'><CgWebsite size={40} />Website Design</div>
            <div className='bg-white text-black text-center p-12 rounded-full text-xl font-bold flex justify-center flex-col items-center'><CgWebsite size={40} />Website Design</div>
            </div>
        </div>
    </div>
  )
}

export default Whyme