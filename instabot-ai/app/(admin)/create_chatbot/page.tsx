"use client";
import Avatar from '@/components/Avatar'
import React, { FormEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { useMutation } from '@apollo/client'
import { CREATE_CHATBOT } from '@/graphql/mutations/mutations'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { ApolloError } from '@apollo/client'; 
function CreateChatBot() {

    const {user}=useUser();
    const [name,setName]=useState("");
    const router=useRouter();
    
    const [CreateChatbot,{data,loading,error}]=useMutation(CREATE_CHATBOT)
    if(!user) return null;
    console.log("createchatbot ",error)

    const handleSubmit=async (e: FormEvent)=>{
        e.preventDefault();
        console.log("ji");
        // console.log(e.target.value);
        const currentDate = new Date().toISOString();
        
        try {
            const data=await CreateChatbot({
                variables:{
                    clerk_user_id:user?.id,
                    name:name,
                    created_at: currentDate,
                }
            });
            console.log("hnn")
           setName("");
           router.push(`/edit_chatbot/${data.data.insertChatbots.id}`)

        }catch (err) {
            if (err instanceof ApolloError) {
                console.error("ApolloError details:", err);
                console.error("networ error: ", err.networkError);
                console.error("graphqlerror",err.graphQLErrors)
            } else {
                console.error("Unexpected error:", err);
            }
        }
    }
    

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
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row gap-2 mt-5'>
                <Input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type='text'
                required
                placeholder='ChatBot Name...'
                className='max-w-lg'/>
                {/* <Input placeholder='ChatBot Name...'/> */}
                <Button type='submit' disabled={loading || !name}
                > Create Button</Button>
            </form>
            
            <p className='text-gray-500 mt-5'>Example:Customer Support ChatBot</p>
                </div>
        </div>
        
    )
}

export default CreateChatBot