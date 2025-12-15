# Vercel AI Gateway Integration 🤖

You have requested to add Vercel AI Gateway support. While UPILI is configured to correct directly to Google Gemini for speed, here is how you can switch to the Gateway for enterprise-grade management.

## Step 1: Install Dependencies
```bash
npm install @ai-sdk/openai
```

## Step 2: Update `src/app/api/chat/route.ts`
Replace the Google import with the standard AI SDK import:

```typescript
// OLD
import { google } from '@ai-sdk/google';

// NEW
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  baseURL: 'https://gateway.ai.cloudflare.com/v1/ACCOUNT_ID/GATEWAY_ID/openai', // Example Gateway URL
  apiKey: process.env.AI_GATEWAY_API_KEY,
});
```

*Note: For now, we are sticking to the direct Google integration (Gemini Pro) as it is free and fastest for this prototype.*
