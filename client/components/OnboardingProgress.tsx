import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  ArrowRight,
  Rocket,
  Building,
  Plug,
  Settings,
  X,
  ExternalLink
} from "lucide-react";

interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  action?: string;
  link?: string;
}

export function OnboardingProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const [tasks, setTasks] = useState<OnboardingTask[]>([]);

  useEffect(() => {
    const onboardingCompleted = localStorage.getItem('stockpilot-onboarding-completed');
    const userInfo = localStorage.getItem('stockpilot-user-info');
    
    // Show onboarding progress if not completed or if user wants to see it
    if (!onboardingCompleted || localStorage.getItem('show-onboarding-progress') === 'true') {
      setIsVisible(true);
      
      // Create tasks based on current state
      const currentTasks: OnboardingTask[] = [
        {
          id: 'company-info',
          title: 'Company Information',
          description: 'Add your company details and preferences',
          completed: !!userInfo,
          action: 'Complete Setup',
          link: '/onboarding'
        },
        {
          id: 'integrations',
          title: 'Connect Shopify',
          description: 'Sync inventory levels and sales data',
          completed: false,
          action: 'Connect Now',
          link: '/dashboard/integrations'
        },
        {
          id: 'team-setup',
          title: 'Invite Team Members',
          description: 'Add team members and set permissions',
          completed: false,
          action: 'Add Team',
          link: '/dashboard/team'
        },
        {
          id: 'alerts-config',
          title: 'Configure Alerts',
          description: 'Set up low stock and forecast alerts',
          completed: false,
          action: 'Setup Alerts',
          link: '/dashboard/alerts'
        }
      ];
      
      setTasks(currentTasks);
    }
  }, []);

  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('onboarding-progress-dismissed', 'true');
  };

  const markTaskCompleted = (taskId: string) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  if (!isVisible) return null;

  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="flex items-center space-x-2">
                <span>Complete Your Setup</span>
                <Badge variant="outline">{completedTasks}/{tasks.length}</Badge>
              </CardTitle>
              <CardDescription>
                Finish setting up StockPilot to unlock all features
              </CardDescription>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleDismiss}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <Progress value={progress} className="mt-4" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                task.completed 
                  ? 'bg-success/10 border-success/20' 
                  : 'bg-card border-border hover:bg-muted/50'
              } transition-colors`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  task.completed ? 'bg-success text-success-foreground' : 'bg-muted'
                }`}>
                  {task.completed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{task.title}</h4>
                  <p className="text-xs text-muted-foreground">{task.description}</p>
                </div>
              </div>
              
              {!task.completed && task.action && task.link && (
                <Link to={task.link}>
                  <Button size="sm" variant="outline" className="text-xs">
                    {task.action}
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {completedTasks === tasks.length && (
          <div className="mt-4 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <h4 className="font-semibold text-success">Setup Complete! 🎉</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Great job! You've configured StockPilot. Start exploring your AI-powered inventory intelligence.
            </p>
            <div className="flex space-x-2">
              <Link to="/dashboard/forecasts">
                <Button size="sm" className="text-xs">
                  View Forecasts
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </Link>
              <Button size="sm" variant="outline" className="text-xs" onClick={handleDismiss}>
                Dismiss
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
