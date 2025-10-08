import { useState } from "react";
import { Shield } from "lucide-react";
import AnalyzerForm from "@/components/AnalyzerForm";
import ResultDisplay from "@/components/ResultDisplay";
import ErrorMessage from "@/components/ErrorMessage";
import { analyzeMessage, AnalyzeResponse } from "@/services/api";
import { toast } from "sonner";

const Index = () => {
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (message: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeMessage(message);
      setResult(response);
      
      if (response.is_scam) {
        toast.error("Scam detected! Please review the analysis.", {
          description: "This message appears to be suspicious.",
        });
      } else {
        toast.success("Analysis complete", {
          description: "Message appears to be safe.",
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      toast.error("Analysis failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/20 shadow-glow mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
            Scamurai
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-100">
            AI-powered scam and phishing detection. Protect yourself from malicious messages.
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Analyzer Form Card */}
          <div className="gradient-card p-6 rounded-lg shadow-card border border-border animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
            <AnalyzerForm onAnalyze={handleAnalyze} isLoading={isLoading} />
          </div>

          {/* Error Display */}
          {error && <ErrorMessage message={error} />}

          {/* Results Display */}
          {result && <ResultDisplay result={result} />}
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8">
          <p>Always verify suspicious messages through official channels</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
