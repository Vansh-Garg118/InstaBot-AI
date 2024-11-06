import React from 'react'
import Link from "next/link";
import Avatar from './Avatar';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { SignedOut, SignInButton } from '@clerk/nextjs';
function Header() {
  return (
    <header className='bg-white shadow-sm text-gray-800 flex justify-between p-5'>
        <Link href="/" className='flex items-center text-4xl font-thin'>
        {/* avatar */}
        <Avatar 
        className=''
        seed="InstaBot-AI Supprt Agent"
        />
        <div className='space-y-2 '>
            <h1 className='font-semibold'>InstaBot-AI</h1>

        </div>
        </Link>

        <div className='flex items-center'>
            <SignedIn>
                <UserButton />

            </SignedIn>

            <SignedOut>
                <SignInButton/>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header