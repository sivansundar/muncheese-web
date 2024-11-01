import prisma from "../utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.spots.findMany();
    return NextResponse.json({ data: data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 405 }
    );
  }
}
