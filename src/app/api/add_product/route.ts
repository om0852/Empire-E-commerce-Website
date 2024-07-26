import { connectDb } from "@/libs/models/MongoConnect";
import productModel from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{

        await connectDb();
        const body=await req.json();
        console.log(body)
        await productModel.create(body)
        return NextResponse.json("Product Added Sucessfully");
    }
    catch(error){
        console.log(error)
        return NextResponse.json("Something Went Wrong");

    }
}