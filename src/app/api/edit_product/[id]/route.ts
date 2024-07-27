import { connectDb } from "@/libs/models/MongoConnect";
import productModel from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, URLParas: any) {
  try {
    const body = await req.json();

    const { id } = URLParas.params;
    console.log(URLParas.params);
    const { name, category, price } = body;
    await connectDb();

    const data = await productModel.findByIdAndUpdate(id, {
      name,
      category,
      price,
    });
    return NextResponse.json({ message: "Product updated Successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: "Something went wrong" },
      { status: 400 }
    );
  }
}
