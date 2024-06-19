import React from 'react';


var whyData = [
    {
        id: "1",
        title: "Choose a Package",
        para: "Have a project for us? Choose from our packages or let's talk to make a deal. I'm all ears."
    },
    {
        id: "2",
        title: "Choose a Package",
        para: "Have a project for us? Choose from our packages or let's talk to make a deal. I'm all ears."
    },
    {
        id: "3",
        title: "Choose a Package",
        para: "Have a project for us? Choose from our packages or let's talk to make a deal. I'm all ears."
    }
];

const Whychoose = () => {
  return (
    <div className='bg-primary rounded-xl py-12'>
        <div className='grid md:grid-cols-12 container gap-12'>
      
      {whyData.map((e, i) => (
          <div key={e.id} className='col-span-4 border-2 border-white p-4 rounded-lg text-white bg-secondary flex flex-col gap-4'>
              <div className='text-[30px] font-bold'>{e.id}</div>
              <div className='text-xl text-primary'>{e.title}</div>
              <div className='text-sm'>{e.para}</div>
          </div>
      ))}
        </div>
    </div>
  );
}

export default Whychoose;
