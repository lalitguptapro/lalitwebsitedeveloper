"use client"
import { Dialog, DialogPanel } from '@headlessui/react'
import React from 'react'
import { ImCross } from "react-icons/im";
import { useState } from 'react'

const Formpopup = () => {

    let [isOpen, setIsOpen] = useState(false)
  return (
    <div>

        <button onClick={()=> setIsOpen(true)} className='bg-primary rounded-full p-16 border-2 border-transparent hover:border-2 hover:border-primary hover:bg-secondary'>Let&apos;s Talk </button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded-xl">
            <div className='flex space-between gap-12 items-center'>
            <div className=''>Connect with me</div>
            <div onClick={() => setIsOpen(false)} className='cursor-pointer'><ImCross /></div>
            </div>
        </DialogPanel>
        </div>
        </Dialog>
    </div>
  )
}

export default Formpopup