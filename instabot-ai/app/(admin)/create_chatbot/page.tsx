import Avatar from '@/components/Avatar'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

function CreateChatBot() {
    return (
        <div className='flex flex-col items-center justify-centre md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10'>
            <Avatar seed='create-chatbot' />
            <div >
                <h1 className='text-xl lg:text-3xl font-semibold'> Create</h1>
                {/* <br/> */}
                {/* <br /> */}
                <h2 className="font-light">
                    Create a new chatbot to assist you in your conversations with
                    your
                    customers.
                </h2>
            </div>
            <form className='flex flex-col md:flex-row gap-2 mt-5'>
                <Input 
                type='text'
                required
                placeholder='ChatBot Name...'
                className='max-w-lg'/>
                {/* <Input placeholder='ChatBot Name...'/> */}
                <Button> Create Button</Button>
            </form>
        </div>
    )
}

export default CreateChatBot