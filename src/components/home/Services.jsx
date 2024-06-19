import React from 'react'
import { FaPaintRoller } from "react-icons/fa";

const Services = () => {

let serviceData = [
  {
    id:"1",
    icon: <FaPaintRoller className='text-primary' size={60} />,
    title:"Custom Web Design",
    para:"FaPaintRollerFaPaintRollerFaPaintRoller"
  },
  {
    id:"2",
    icon: <FaPaintRoller className='text-primary' size={60} />,
    title:"Wordpress Web Design",
    para:"FaPaintRollerFaPaintRollerFaPaintRoller"
  },
  {
    id:"3",
    icon: <FaPaintRoller className='text-primary' size={60} />,
    title:"Wordpress Custom Design",
    para:"FaPaintRollerFaPaintRollerFaPaintRoller"
  },
  {
    id:"4",
    icon: <FaPaintRoller className='text-primary' size={60} />,
    title:"FaPaintRoller",
    para:"FaPaintRollerFaPaintRollerFaPaintRoller"
  },
]  

  return (
    <div className='bg-primary py-12'>
        <div className='ml-16 bg-secondary rounded-tl-xl'>
            <div className='p-16'>

              <div className='grid grid-cols-12 gap-20'>
               {serviceData.map((e,i)=>(
                 <div className='col-span-6'>
                 <div className='border-primary rounded-md bg-white border-4 p-12 flex gap-8 justify-center'>
                   <div className='border-r-4 border-primary pr-8'>{e.icon}</div>
                   <div className=''>
                     <div className='text-[30px] text-primary font-bold'>{e.title}</div>
                     <div className=''>{e.para}</div>
                   </div>
                 </div>
                 </div>
               ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services