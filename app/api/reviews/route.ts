import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { prompt } from "@/lib/utils";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const code = await req.json();

    const userCode = typeof code === "string" ? code : JSON.stringify(code);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0,
      messages: [
        { role: "system", content: prompt },
        {
          role: "user",
          content: userCode,
        },
      ],
    });
    const review = completion.choices[0]?.message.content?.trim();

    return NextResponse.json({ review });
  } catch (e) {
    console.error("Error in POST /api/reviews", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
