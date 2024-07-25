import { connectDb } from "@/libs/models/MongoConnect";
import productModel from "@/libs/models/Product";
import { NextResponse } from "next/server";

export async function GET(){
    try{
await connectDb();
const data = await productModel.find()
console.log(data)
return NextResponse.json(data)
    }
    catch(error){
return NextResponse.json({error,
    message:"something went wrong"
},{status:400})
    }
}