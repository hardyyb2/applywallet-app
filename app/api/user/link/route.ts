import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log(request.body);
  return NextResponse.json({ message: "you are here" });
}
