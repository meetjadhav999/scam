import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Shield, Loader2 } from "lucide-react";

interface AnalyzerFormProps {
  onAnalyze: (message: string) => void;
  isLoading: boolean;
}

const AnalyzerForm = ({ onAnalyze, isLoading }: AnalyzerFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onAnalyze(message);
    }
  };

  const handleClear = () => {
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
          Enter message to analyze
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Paste the suspicious message, email, or text here..."
          className="min-h-[200px] resize-none bg-card border-border text-foreground placeholder:text-muted-foreground"
          disabled={isLoading}
        />
      </div>
      
      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Shield className="mr-2 h-4 w-4" />
              Analyze Message
            </>
          )}
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={handleClear}
          disabled={isLoading}
          className="border-border hover:bg-secondary"
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

export default AnalyzerForm;
