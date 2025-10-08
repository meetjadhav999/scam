// API service for scam detection backend
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5003';

export interface AnalyzeRequest {
  message: string;
}

export interface AnalyzeResponse {
  is_scam: boolean;
  score: number;
  explanation: string;
  warnings: string[];
}

export interface ApiError {
  error: string;
}

export const analyzeMessage = async (message: string): Promise<AnalyzeResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/phishing/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url:message }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to analyze message');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Network error: Unable to connect to the server');
  }
};
