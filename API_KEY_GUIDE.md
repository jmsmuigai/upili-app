# 🔑 How to Get Your Robot's "Brain Key" (API Key)

This key is like a password that lets Mshauri talk. Without it, the robot will be silent!

## Step 1: Get the Key
1.  Click this link: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2.  If asked, sign in with your **Gmail account**.
3.  Look for a big blue button that says **"Create API Key"**. Click it.
4.  **A box will pop up asking for a Name and Project:**
    *   **Name your key**: Type `UPILI` (or anything you like).
    *   **Choose a project**: Click the dropdown list.
        *   If you see **"My First Project"**, click that.
        *   OR click **"Create project"** (the one with the `+` sign).
    *   Click the **"Create API key"** button.
5.  Wait a few seconds... 🎉 You will see a long code that looks like this:
    `AIzaSyD...` (it is very long and random).
6.  Click the **"Copy"** button (it looks like two sheets of paper 📄).

---

## Step 2: Paste it Correctly (Locally)
*Do this if you are running the app on your computer.*

1.  Go to your project folder `UPILI`.
2.  Look for a file named `.env.local`.
    *   *If you don't see it, create a new file and name it exactly `.env.local`*
3.  Open that file.
4.  Paste your key like this:

```text
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyD_PASTE_YOUR_LONG_KEY_HERE
```

5.  Save the file.
6.  Restart your app (Press `Ctrl + C` in terminal, then run `npm run dev` again).

---

## Step 3: Paste it for the World (Vercel Deployment)
*Do this if you are putting the app on the internet.*

1.  Go to your Vercel Project Dashboard.
2.  Click **"Settings"** (at the top).
3.  Click **"Environment Variables"** (on the left sidebar).
4.  Fill in the boxes:
    *   **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`
    *   **Value**: (Paste your long `AIza...` code here)
5.  Click **"Save"**.
6.  Go to **"Deployments"** and click **"Redeploy"** so the new key works.

---
**Done! Your robot is now connected to Google's brain!** 🧠✨
