# UPILI Configuration & Developer Guide 🛠️

Welcome to the UPILI Codebase. This guide helps you configure the "Agentic App" features (AI, Database, Authentication) for production.

## 1. Google Gemini API (Intelligence)
The app uses `gemini-1.5-pro-latest` for Mshauri (The AI Advisor).
1.  Go to **[Google AI Studio](https://aistudio.google.com/)**.
2.  Click **"Get API key"**.
3.  Create a `.env.local` file in the root of this project.
4.  Add your key:
    ```env
    GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
    ```

## 2. Firebase (Community & Real Database)
For the "Bunge" (Community) and Real-time Auth to work (moving away from Simulation):
1.  Go to **[Firebase Console](https://console.firebase.google.com/)**.
2.  Create a new project named "UPILI".
3.  Enable **Firestore Database** and **Authentication** (Google Sign-In).
4.  Get your specific valid config object from Project Settings.
5.  Update `src/lib/firebase.ts` (or create it) with your config.

## 3. GitHub (Version Control)
To push this project to your own repository:
1.  Create a new Repo on GitHub (e.g., `upili-app`).
2.  Run these commands in your terminal:
    ```bash
    git remote remove origin
    git remote add origin https://github.com/YOUR_USERNAME/upili-app.git
    git push -u origin main
    ```

## 4. Hosting (Vercel)
The easiest way to deploy Next.js:
1.  Go to **[Vercel](https://vercel.com)**.
2.  Import your GitHub Repo.
3.  **IMPORTANT**: Add your `GOOGLE_GENERATIVE_AI_API_KEY` in the Vercel Environment Variables settings.
4.  Click Deploy.

## Troubleshooting
- **404 Errors**: Ensure you have run `npm run build` locally to check for route errors.
- **Admin Page**: This is a local simulation route (`/admin`). It is protected by obscurity. In a real app, add Middleware checks.

---
*Built with ❤️ by Antigravity*
