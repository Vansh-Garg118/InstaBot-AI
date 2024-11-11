import { serverClient } from "@/lib/server/serverClient";
import { NextRequest, NextResponse } from "next/server";
import { gql } from "@apollo/client";
// import { stat } from "fs";

const corsHeaders={
    "Access-Control-Allow-origin": "*",
    "Access-Control-Allow-Methods" :"GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Atlow-Headers": "Content-Type, Authorization",
}
export async function POST(request:NextRequest) {
    console.log("hii");
    
    const {query,variables}=await request.json();
    console.log(variables)
    console.log(query)

    try {
        let result;
        if(query.trim().startsWith("mutation")){
            //mutate
            result=await serverClient.mutate({
                mutation:gql`${query}`,
                variables
            })
        }
        else{
            //query
            result=await serverClient.query({
                query:gql`${query}`,
                variables
            })
        }

        const data=result.data;
        console.log("data in route:",data)
        const error=result.errors;
        return NextResponse.json(
            {
                data 
            },
            {
                headers:corsHeaders
            }
        )
    } catch (error) {
        
        return NextResponse.json(error,{
            status:500
        })
    }
    
}
