import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Rocket,
  Building,
  Plug,
  Settings,
  Target,
  Users,
  ShoppingCart,
  Database,
  Mail,
  MessageSquare,
  DollarSign,
  Package,
  BarChart3,
  Sparkles
} from "lucide-react";

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  completed: boolean;
}

interface CompanyInfo {
  name: string;
  industry: string;
  size: string;
  currency: string;
  timezone: string;
  role: string;
}

interface IntegrationConfig {
  shopify: {
    enabled: boolean;
    store: string;
    apiKey: string;
  };
  quickbooks: {
    enabled: boolean;
    companyId: string;
  };
  stripe: {
    enabled: boolean;
    accountId: string;
  };
  slack: {
    enabled: boolean;
    webhook: string;
    channel: string;
  };
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to StockPilot',
    description: 'Let\'s get you set up for intelligent inventory management',
    icon: Rocket,
    completed: false
  },
  {
    id: 'company',
    title: 'Company Information',
    description: 'Tell us about your business to customize your experience',
    icon: Building,
    completed: false
  },
  {
    id: 'integrations',
    title: 'Connect Your Tools',
    description: 'Integrate with Shopify, QuickBooks, and Stripe for seamless data flow',
    icon: Plug,
    completed: false
  },
  {
    id: 'preferences',
    title: 'Configure Preferences',
    description: 'Set up alerts, forecasting preferences, and notification settings',
    icon: Settings,
    completed: false
  },
  {
    id: 'complete',
    title: 'You\'re All Set!',
    description: 'Start using StockPilot to optimize your inventory',
    icon: Target,
    completed: false
  }
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(onboardingSteps);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: '',
    industry: '',
    size: '',
    currency: 'USD',
    timezone: 'UTC-8',
    role: ''
  });
  const [integrations, setIntegrations] = useState<IntegrationConfig>({
    shopify: { enabled: false, store: '', apiKey: '' },
    quickbooks: { enabled: false, companyId: '' },
    stripe: { enabled: false, accountId: '' },
    slack: { enabled: false, webhook: '', channel: '' }
  });
  const [preferences, setPreferences] = useState({
    lowStockThreshold: 7,
    forecastAccuracy: 85,
    emailAlerts: true,
    slackNotifications: false,
    dailyReports: true
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const markStepCompleted = (stepIndex: number) => {
    setSteps(prev => prev.map((step, index) => 
      index === stepIndex ? { ...step, completed: true } : step
    ));
  };

  const nextStep = () => {
    markStepCompleted(currentStep);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    markStepCompleted(currentStep);
    // Save onboarding completion state
    localStorage.setItem('stockpilot-onboarding-completed', 'true');
    localStorage.setItem('stockpilot-user-info', JSON.stringify(companyInfo));
    navigate('/dashboard');
  };

  const updateCompanyInfo = (field: keyof CompanyInfo, value: string) => {
    setCompanyInfo(prev => ({ ...prev, [field]: value }));
  };

  const updateIntegration = (integration: keyof IntegrationConfig, field: string, value: any) => {
    setIntegrations(prev => ({
      ...prev,
      [integration]: { ...prev[integration], [field]: value }
    }));
  };

  const renderWelcomeStep = () => (
    <div className="text-center space-y-6">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
        <Rocket className="h-12 w-12 text-primary" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Welcome to StockPilot! 🚀</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Your AI-powered inventory intelligence platform. Let's get you set up in just a few minutes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <Card className="border-2">
          <CardContent className="p-6">
            <BarChart3 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">AI Forecasting</h3>
            <p className="text-sm text-muted-foreground">
              Predict demand with 95%+ accuracy using advanced machine learning
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-2">
          <CardContent className="p-6">
            <ShoppingCart className="h-8 w-8 text-success mb-3" />
            <h3 className="font-semibold mb-2">Automated POs</h3>
            <p className="text-sm text-muted-foreground">
              Generate purchase orders automatically with Slack approvals
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-2">
          <CardContent className="p-6">
            <Target className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Prevent Stockouts</h3>
            <p className="text-sm text-muted-foreground">
              Never run out of stock again with intelligent early warnings
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCompanyStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Building className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Tell us about your company</h2>
        <p className="text-muted-foreground">
          This helps us customize StockPilot for your specific needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input
            id="companyName"
            placeholder="e.g., Acme Commerce"
            value={companyInfo.name}
            onChange={(e) => updateCompanyInfo('name', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Your Role *</Label>
          <Select value={companyInfo.role} onValueChange={(value) => updateCompanyInfo('role', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="founder">Founder/CEO</SelectItem>
              <SelectItem value="ops_manager">Operations Manager</SelectItem>
              <SelectItem value="finance">Finance/CFO</SelectItem>
              <SelectItem value="inventory_manager">Inventory Manager</SelectItem>
              <SelectItem value="analyst">Business Analyst</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select value={companyInfo.industry} onValueChange={(value) => updateCompanyInfo('industry', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fashion">Fashion & Apparel</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="home_garden">Home & Garden</SelectItem>
              <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
              <SelectItem value="sports">Sports & Outdoors</SelectItem>
              <SelectItem value="food">Food & Beverage</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size</Label>
          <Select value={companyInfo.size} onValueChange={(value) => updateCompanyInfo('size', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solo">Just me</SelectItem>
              <SelectItem value="small">2-10 employees</SelectItem>
              <SelectItem value="medium">11-50 employees</SelectItem>
              <SelectItem value="large">51-200 employees</SelectItem>
              <SelectItem value="enterprise">200+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency">Primary Currency</Label>
          <Select value={companyInfo.currency} onValueChange={(value) => updateCompanyInfo('currency', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">US Dollar (USD)</SelectItem>
              <SelectItem value="EUR">Euro (EUR)</SelectItem>
              <SelectItem value="GBP">British Pound (GBP)</SelectItem>
              <SelectItem value="CAD">Canadian Dollar (CAD)</SelectItem>
              <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone">Timezone</Label>
          <Select value={companyInfo.timezone} onValueChange={(value) => updateCompanyInfo('timezone', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
              <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
              <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
              <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
              <SelectItem value="UTC+0">UTC</SelectItem>
              <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  const renderIntegrationsStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Plug className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Connect your tools</h2>
        <p className="text-muted-foreground">
          Integrate with your existing systems for seamless data flow
        </p>
      </div>

      <div className="space-y-6">
        {/* Shopify Integration */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Shopify</CardTitle>
                  <CardDescription>Sync inventory levels and sales data</CardDescription>
                </div>
              </div>
              <Switch
                checked={integrations.shopify.enabled}
                onCheckedChange={(checked) => updateIntegration('shopify', 'enabled', checked)}
              />
            </div>
          </CardHeader>
          {integrations.shopify.enabled && (
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Store URL</Label>
                  <Input
                    placeholder="your-store.myshopify.com"
                    value={integrations.shopify.store}
                    onChange={(e) => updateIntegration('shopify', 'store', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>API Key</Label>
                  <Input
                    type="password"
                    placeholder="Your Shopify API key"
                    value={integrations.shopify.apiKey}
                    onChange={(e) => updateIntegration('shopify', 'apiKey', e.target.value)}
                  />
                </div>
              </div>
              <Badge variant="outline">
                <CheckCircle className="h-3 w-3 mr-1" />
                Real-time inventory sync
              </Badge>
            </CardContent>
          )}
        </Card>

        {/* QuickBooks Integration */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">QuickBooks</CardTitle>
                  <CardDescription>Sync financial data and accounting</CardDescription>
                </div>
              </div>
              <Switch
                checked={integrations.quickbooks.enabled}
                onCheckedChange={(checked) => updateIntegration('quickbooks', 'enabled', checked)}
              />
            </div>
          </CardHeader>
          {integrations.quickbooks.enabled && (
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Company ID</Label>
                <Input
                  placeholder="Your QuickBooks Company ID"
                  value={integrations.quickbooks.companyId}
                  onChange={(e) => updateIntegration('quickbooks', 'companyId', e.target.value)}
                />
              </div>
              <Badge variant="outline">
                <CheckCircle className="h-3 w-3 mr-1" />
                Financial reporting integration
              </Badge>
            </CardContent>
          )}
        </Card>

        {/* Slack Integration */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Slack</CardTitle>
                  <CardDescription>Get notifications and approve POs in Slack</CardDescription>
                </div>
              </div>
              <Switch
                checked={integrations.slack.enabled}
                onCheckedChange={(checked) => updateIntegration('slack', 'enabled', checked)}
              />
            </div>
          </CardHeader>
          {integrations.slack.enabled && (
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <Input
                    placeholder="https://hooks.slack.com/services/..."
                    value={integrations.slack.webhook}
                    onChange={(e) => updateIntegration('slack', 'webhook', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Channel</Label>
                  <Input
                    placeholder="#inventory-alerts"
                    value={integrations.slack.channel}
                    onChange={(e) => updateIntegration('slack', 'channel', e.target.value)}
                  />
                </div>
              </div>
              <Badge variant="outline">
                <CheckCircle className="h-3 w-3 mr-1" />
                One-click PO approvals
              </Badge>
            </CardContent>
          )}
        </Card>
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 inline mr-1" />
          Don't worry - you can always add more integrations later from the Integrations page.
        </p>
      </div>
    </div>
  );

  const renderPreferencesStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Configure your preferences</h2>
        <p className="text-muted-foreground">
          Set up alerts and forecasting to match your business needs
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Alert Thresholds</CardTitle>
            <CardDescription>When should StockPilot notify you?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Low Stock Alert (days)</Label>
                <Input
                  type="number"
                  value={preferences.lowStockThreshold}
                  onChange={(e) => setPreferences(prev => ({ ...prev, lowStockThreshold: parseInt(e.target.value) }))}
                />
                <p className="text-xs text-muted-foreground">Alert when stock drops below this many days</p>
              </div>
              <div className="space-y-2">
                <Label>Forecast Accuracy Threshold (%)</Label>
                <Input
                  type="number"
                  value={preferences.forecastAccuracy}
                  onChange={(e) => setPreferences(prev => ({ ...prev, forecastAccuracy: parseInt(e.target.value) }))}
                />
                <p className="text-xs text-muted-foreground">Alert when prediction accuracy drops below this</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>How would you like to receive updates?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Email Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive critical alerts via email</p>
              </div>
              <Switch
                checked={preferences.emailAlerts}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, emailAlerts: checked }))}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Slack Notifications</Label>
                <p className="text-sm text-muted-foreground">Send alerts to your Slack channel</p>
              </div>
              <Switch
                checked={preferences.slackNotifications}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, slackNotifications: checked }))}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Daily Reports</Label>
                <p className="text-sm text-muted-foreground">Receive daily inventory summaries</p>
              </div>
              <Switch
                checked={preferences.dailyReports}
                onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, dailyReports: checked }))}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="text-center space-y-6">
      <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-12 w-12 text-success" />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">You're all set! 🎉</h2>
        <p className="text-lg text-muted-foreground mb-6">
          StockPilot is configured and ready to help you optimize your inventory.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">What's Next?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• View your dashboard overview</li>
              <li>• Check AI-generated forecasts</li>
              <li>• Review purchase order suggestions</li>
              <li>• Set up team members (optional)</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border-2 border-accent/20">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-accent mb-3" />
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Check out our documentation</li>
              <li>• Join our community Slack</li>
              <li>• Schedule a demo call</li>
              <li>• Contact support anytime</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary/10 p-6 rounded-lg">
        <h4 className="font-semibold mb-2">🚀 Pro Tip</h4>
        <p className="text-sm text-muted-foreground">
          Start by reviewing your forecast accuracy on the Analytics page. StockPilot learns from your data and improves over time!
        </p>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderWelcomeStep();
      case 1: return renderCompanyStep();
      case 2: return renderIntegrationsStep();
      case 3: return renderPreferencesStep();
      case 4: return renderCompleteStep();
      default: return renderWelcomeStep();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return companyInfo.name && companyInfo.role;
      case 2: return true; // Integrations are optional
      case 3: return true; // Preferences have defaults
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Package className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">StockPilot Setup</h1>
          </div>
          <Progress value={progress} className="w-full max-w-md mx-auto" />
          <p className="text-sm text-muted-foreground mt-2">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = index === currentStep;
              const isCompleted = step.completed;
              
              return (
                <div key={step.id} className="flex items-center space-x-2">
                  <div
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : isCompleted
                        ? 'bg-success/10 text-success'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium hidden md:inline">{step.title}</span>
                    {isCompleted && <CheckCircle className="h-3 w-3" />}
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            {renderCurrentStep()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleFinish}
                className="bg-success hover:bg-success/90"
              >
                Launch StockPilot
                <Rocket className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
