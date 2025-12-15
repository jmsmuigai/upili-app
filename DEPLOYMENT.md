# UPILI Deployment Guide 🚀

Congratulations on building **UPILI**! Here is how to deploy it to the world for free using Vercel.

## Prerequisites
1.  **GitHub Account**: You need a GitHub account to host the code.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com) using your GitHub.

## Step 1: Push Code to GitHub
(If you haven't already done this)

1.  Open your terminal.
2.  Initialize Git:
    ```bash
    git init
    git add .
    git commit -m "Initial Deploy"
    ```
3.  Create a new Repository on GitHub (call it `upili-app`).
4.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/upili-app.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy on Vercel
1.  Go to your **Vercel Dashboard**.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `upili-app` repository.
4.  **Framework Preset**: It should auto-detect "Next.js".

## Step 3: Environment Variables (CRITICAL)
Before clicking Deploy, look for the **"Environment Variables"** section.
Add the following:

-   **Name**: `GOOGLE_GENERATIVE_AI_API_KEY`
-   **Value**: `(Your Gemini API Key starting with AIza...)`

*Note: Without this, the AI chat will NOT work.*

## Step 4: Launch!
1.  Click **"Deploy"**.
2.  Wait for Vercel to build the app (approx 1-2 minutes).
3.  **Success!** You will get a live URL (e.g., `upili-app.vercel.app`).

## Troubleshooting
-   **404 on Admin**: Ensure your file structure is correct (`src/app/admin/page.tsx`).
-   **AI Not Responding**: Check if you added the API Key correctly in Vercel settings.

## Future Updates
Anytime you run `git push`, Vercel will automatically re-deploy your new changes!

---
*Built with ❤️ by Antigravity*
