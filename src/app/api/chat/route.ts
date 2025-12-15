import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    system: 'You are a helpful and knowledgeable academic advisor for Kenyan students transitioning from JSEA (Junior School) to Senior Secondary. Guide them on choosing between Pure Sciences, Technology, Arts, and Social Sciences based on their interests and grades. Be encouraging, smart, and use formatting to make it readable.',
    messages,
  });

  return result.toDataStreamResponse();
}
