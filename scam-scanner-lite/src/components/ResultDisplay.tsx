import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";
import { AnalyzeResponse } from "@/services/api";

interface ResultDisplayProps {
  result: AnalyzeResponse;
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  const { is_scam, score, explanation, warnings } = result;
  const confidencePercentage = Math.round(score * 100);

  return (
    <Card className="p-6 gradient-card shadow-card border-border animate-in fade-in-50 slide-in-from-bottom-4 duration-500">
      <div className="space-y-6">
        {/* Status Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {is_scam ? (
              <div className="p-3 rounded-full bg-destructive/20">
                <ShieldAlert className="h-8 w-8 text-destructive" />
              </div>
            ) : (
              <div className="p-3 rounded-full bg-success/20">
                <ShieldCheck className="h-8 w-8 text-success" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {is_scam ? "Scam Detected" : "Message Appears Safe"}
              </h2>
              <p className="text-muted-foreground">
                Analysis complete
              </p>
            </div>
          </div>
          <Badge
            variant={is_scam ? "destructive" : "default"}
            className={is_scam ? "bg-destructive text-destructive-foreground" : "bg-success text-success-foreground"}
          >
            {is_scam ? "DANGER" : "SAFE"}
          </Badge>
        </div>

        {/* Confidence Score */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">Confidence Score</span>
            <span className="text-sm font-bold text-foreground">{confidencePercentage}%</span>
          </div>
          <Progress 
            value={confidencePercentage} 
            className="h-2"
            indicatorClassName={is_scam ? "bg-destructive" : "bg-success"}
          />
        </div>

        {/* Explanation */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Analysis</h3>
          <p className="text-foreground/90 leading-relaxed">{explanation}</p>
        </div>

        {/* Warnings */}
        {warnings && warnings.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                Warning Signs Detected
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {warnings.map((warning, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-warning/10 border-warning/30 text-warning-foreground"
                >
                  {warning}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResultDisplay;
