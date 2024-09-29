import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // Here you would integrate with an AI image generation service
  // For this example, we'll just return a placeholder URL
  const imageUrl = `https://via.placeholder.com/500x500?text=${encodeURIComponent(
    prompt
  )}`;

  return NextResponse.json({ imageUrl });
}
