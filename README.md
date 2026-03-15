# Alesh.ai - Tweet Generator for Creators


A lightweight web application that allows creators to generate tweets based on a topic and tone using HuggingFace AI.

## Features
- AI-powered tweet generation (Viral, Professional, Funny, Educational)
- Modern, responsive UI with Tailwind CSS
- Copy to clipboard functionality
- Error handling and loading states

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express.js
- **AI Integration:** HuggingFace Inference API

## Getting Started

### Prerequisites
- Node.js installed
- HuggingFace API Key (Free)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd ai-tweet-generator
   ```

2. Setup Backend:
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory:
   ```env
   HUGGINGFACE_API_KEY=your_huggingface_api_key
   PORT=5000
   ```

3. Setup Frontend:
   ```bash
   cd ../client
   npm install
   ```

### Running Locally

1. Start the Server:
   ```bash
   cd server
   node index.js
   ```

2. Start the Client:
   ```bash
   cd client
   npm run dev
   ```

## Deployment

### Backend (Render)
1. Push your code to GitHub.
2. Create a new "Web Service" on Render.
3. Connect your repository.
4. Set the Root Directory to `server`.
5. Build Command: `npm install`
6. Start Command: `node index.js`
7. Add Environment Variable: `HUGGINGFACE_API_KEY`

### Frontend (Vercel)
1. Create a new project on Vercel.
2. Connect your GitHub repository.
3. Select the `client` folder as the root.
4. Framework Preset: `Vite`.
5. Environment Variable: `VITE_API_URL` (Set this to your Render backend URL, e.g., `https://your-app.onrender.com/api`).
   *Note: You may need to update `client/src/services/api.js` to use `import.meta.env.VITE_API_URL`.*

## License
MIT
