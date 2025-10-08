# Scamurai - AI Scam Detection Frontend

A modern React frontend application for detecting scams and phishing attempts using AI-powered analysis.

## Features

- 🛡️ **Real-time Analysis**: Instantly analyze messages for scam indicators
- 🎨 **Beautiful UI**: Modern cybersecurity-themed design with smooth animations
- 📊 **Confidence Scores**: Visual progress indicators showing detection confidence
- ⚠️ **Warning Detection**: Highlights specific suspicious elements
- 🔄 **Error Handling**: Graceful error states with user feedback
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices

## Screenshots

### Main Interface
The application features a dark, cybersecurity-themed interface with:
- Prominent text input area for message analysis
- Clear "Analyze Message" button with loading states
- Gradient card layouts with custom shadows
- Animated result displays

### Result Display
Analysis results show:
- Clear scam/safe status with icons (Shield Alert for scam, Shield Check for safe)
- Confidence score with color-coded progress bar
- Detailed explanation of the analysis
- List of detected warning signs as badges

## Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Running Flask backend (scamurai-backend)

## Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd scamurai-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure the backend URL:

Create a `.env` file in the root directory (copy from `.env.example`):
```bash
cp .env.example .env
```

Edit `.env` and set your backend URL:
```
VITE_API_BASE_URL=http://localhost:5000
```

For production, update this to your deployed backend URL.

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will start on `http://localhost:8080`

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── AnalyzerForm.tsx # Message input form
│   ├── ResultDisplay.tsx # Analysis results display
│   └── ErrorMessage.tsx  # Error state component
├── pages/
│   ├── Index.tsx        # Main application page
│   └── NotFound.tsx     # 404 page
├── services/
│   └── api.ts          # Backend API integration
├── App.tsx             # Main app component
├── index.css           # Global styles & design system
└── main.tsx           # Entry point
```

## API Integration

The application expects the following backend API:

### Endpoint: `POST /api/v1/analyze`

**Request:**
```json
{
  "message": "Your message text here"
}
```

**Success Response:**
```json
{
  "is_scam": true,
  "score": 0.85,
  "explanation": "Analysis explanation",
  "warnings": ["warning1", "warning2"]
}
```

**Error Response:**
```json
{
  "error": "Error description"
}
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:5000` |

## Design System

The application uses a custom design system with:

- **Colors**: Cybersecurity-themed with blue/purple gradients
- **Success State**: Emerald green
- **Danger State**: Red
- **Warning State**: Orange/amber
- **Animations**: Smooth fade-in and slide-in effects
- **Shadows**: Custom glows and card shadows

All design tokens are defined in `src/index.css` and `tailwind.config.ts`.

## Usage Example

1. **Enter Message**: Paste any suspicious message in the text area
2. **Analyze**: Click the "Analyze Message" button
3. **Review Results**: See if the message is a scam with detailed explanations
4. **Check Warnings**: Review any detected warning signs
5. **Clear**: Use the Clear button to analyze another message

## Development

### Adding New Features

The codebase is modular and easy to extend:

- Add new components in `src/components/`
- Update API types in `src/services/api.ts`
- Modify design tokens in `src/index.css`

### Code Style

- Use TypeScript for type safety
- Follow React best practices with functional components and hooks
- Use semantic design tokens instead of hardcoded colors
- Keep components focused and reusable

## Deployment

This app can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

Make sure to:
1. Set the `VITE_API_BASE_URL` environment variable to your production backend
2. Enable CORS on your backend for the frontend domain
3. Build the app with `npm run build`

## Troubleshooting

### Backend Connection Issues

If you see "Network error: Unable to connect to the server":
- Ensure your backend is running
- Check the `VITE_API_BASE_URL` is correct
- Verify CORS is enabled on the backend

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## License

[Your License]

## Support

For issues and questions, please open an issue in the repository.
