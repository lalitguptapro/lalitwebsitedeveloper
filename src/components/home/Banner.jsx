"use client"
import React, { useState } from 'react'
import Formpopup from '../common/Formpopup'

const Banner = () => {
  let [isOpen, setIsOpen] = useState(false);

return (

<div className="bg-secondary py-8">
<div className='grid md:grid-cols-12 container text-white'>
<div className='col-span-6 flex items-center h-[100%] '>
<div className=''>
<p>-- Hello,</p>
<h1 className='text-[60px] font-bold'>I&apos;m Full Stack <br/>Developer</h1>
<Formpopup isOpen={isOpen} setIsOpen={setIsOpen} />
</div>
</div>
<div className='col-span-6'>
<div className=''>
<div className='bg-primary/30 rounded-full banner-img md:w-[500px] p-12 pb-0  flex justify-center'>
<img src='/images/lalit-gupta.png' className='rounded-full md:w-[400px]' />
</div>
</div>
</div>

</div>
</div>

)
}

export default Banner