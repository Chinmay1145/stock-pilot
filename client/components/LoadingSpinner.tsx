import { TrendingUp } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  showLogo?: boolean;
}

export function LoadingSpinner({ 
  size = "md", 
  text = "Loading...", 
  showLogo = true 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const logoSizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative">
        {showLogo ? (
          <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-lg">
            <TrendingUp className={`${logoSizeClasses[size]} text-white animate-pulse`} />
          </div>
        ) : (
          <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-muted border-t-primary`}></div>
        )}
      </div>
      {text && (
        <p className="text-muted-foreground text-sm font-medium">{text}</p>
      )}
    </div>
  );
}
