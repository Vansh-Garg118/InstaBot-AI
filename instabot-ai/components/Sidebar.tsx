import React from 'react'
// import Link from "next/Link";
import Link from 'next/link'
import { BotMessageSquare, PencilLine, SearchIcon } from 'lucide-react'
function Sidebar() {
  return (
    <div className='bg-white text-white p-5'>
        <ul className='gap-5 flex flex-row lg:flex-col'>
            <li className='flex-1'>
                <Link href="/create_chatbot" className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
                bg-[#2991EE]'>
                    <BotMessageSquare className='h-6 w-6 lg:h-8 lg:w-8'/>
                    <div className='hidden md:inline'>
                        <p className='text-xl'>Create</p>
                        <p className='text-sm font-extralight '>New ChatBot</p>
                    </div>
                    </Link>
            </li>
            <li className='flex-1' >
                <Link href="/view_chatbot" className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
                bg-[#2991EE]'>
                    <PencilLine className='h-6 w-6 lg:h-8 lg:w-8'/>
                    <div className='hidden md:inline'>
                        <p className='text-xl'>Edit</p>
                        <p className='text-sm font-extralight '> ChatBot</p>
                    </div>
                </Link>
            </li>
            <li className='flex-1'>
                <Link href="/review_sessions" className='hover:opacity-50 flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 rounded-md
                bg-[#2991EE]'>
                    <SearchIcon className='h-6 w-6 lg:h-8 lg:w-8'/>
                    <div className='hidden md:inline'>
                        <p className='text-xl'>Vew</p>
                        <p className='text-sm font-extralight '> Sessions</p>
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar