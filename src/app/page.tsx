import React from 'react'
import Banner from '@/components/home/Banner'
import Whychoose from '@/components/home/Whychoose'
import Whyme from '@/components/home/Whyme'
import Services from '@/components/home/Services'

const page = () => {
  return (
<div>

<div className="">
  <Banner />
  <Whychoose />
  <Whyme />
  <Services />
  </div>
</div>
  )
}

export default page