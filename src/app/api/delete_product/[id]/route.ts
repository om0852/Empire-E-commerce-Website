import { connectDb } from "@/libs/models/MongoConnect";
import productModel from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, URLParas: any) {
  try {
    const { id } = URLParas.params.id;
    console.log(URLParas.params)
    await connectDb();

    const data = await productModel.findByIdAndDelete(id);
    return NextResponse.json({message:"Product Deleted Successfully"});
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error, message: "Something went wrong" },
      { status: 400 }
    );
  }
}
