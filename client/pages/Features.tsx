import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  BarChart3,
  Slack,
  TrendingUp,
  AlertTriangle,
  ShoppingCart,
  Shield,
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  Brain,
  Target,
  Users,
  Globe,
  Smartphone,
  Database,
  FileText,
  Settings
} from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      icon: BarChart3,
      title: "SKU-Level Demand Forecasting",
      description: "AI-powered predictions for every product with 95%+ accuracy using advanced machine learning models.",
      features: [
        "12-week rolling forecasts",
        "Seasonal pattern recognition", 
        "Promotion impact modeling",
        "New product launch predictions",
        "Multi-location forecasting"
      ]
    },
    {
      icon: Slack,
      title: "Slack PO Automation",
      description: "Streamline purchase order approvals with interactive Slack workflows and multi-step approvals.",
      features: [
        "One-click approvals in Slack",
        "Custom approval hierarchies",
        "Budget threshold controls",
        "Vendor selection automation",
        "Real-time status updates"
      ]
    },
    {
      icon: TrendingUp,
      title: "What-If Scenario Planning",
      description: "Interactive demand modeling for price changes, promotions, and market scenarios.",
      features: [
        "Price elasticity modeling",
        "Promotion impact analysis",
        "Supplier lead time scenarios",
        "Market condition adjustments",
        "ROI optimization"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts & Monitoring",
      description: "Real-time anomaly detection and automated alerts for inventory risks and opportunities.",
      features: [
        "Stockout risk notifications",
        "Overstock warnings",
        "Sales spike detection",
        "Supplier delay alerts",
        "Custom threshold settings"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Intelligent Purchase Orders",
      description: "Automated PO generation based on forecasts, lead times, and supplier preferences.",
      features: [
        "Optimal order quantities",
        "Lead time optimization",
        "Supplier performance tracking",
        "Cost minimization",
        "PDF/CSV export"
      ]
    },
    {
      icon: Shield,
      title: "Performance Analytics",
      description: "Comprehensive MAPE tracking, backtesting, and model accuracy reporting.",
      features: [
        "Forecast accuracy metrics",
        "Historical backtesting",
        "Model performance trends",
        "ROI tracking",
        "Custom dashboards"
      ]
    }
  ];

  const integrations = [
    { name: "Shopify", icon: "🛍️" },
    { name: "QuickBooks", icon: "📊" },
    { name: "Stripe", icon: "💳" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "BigCommerce", icon: "🏪" },
    { name: "Magento", icon: "🎯" },
    { name: "NetSuite", icon: "📈" },
    { name: "Xero", icon: "💼" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Complete Feature Suite
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Everything you need for<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                inventory excellence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From AI-powered demand forecasting to Slack automation, StockPilot provides all the tools 
              you need to eliminate stockouts and optimize your inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="px-8 py-4 text-lg gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg gap-2">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities designed to transform your inventory management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for sophisticated inventory operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Machine Learning Models</CardTitle>
                <CardDescription>
                  Advanced algorithms including LSTM, Prophet, and ensemble methods for maximum accuracy
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Multi-Location Support</CardTitle>
                <CardDescription>
                  Manage inventory across multiple warehouses, stores, and distribution centers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Mobile Accessibility</CardTitle>
                <CardDescription>
                  Access forecasts and approve POs on-the-go with our responsive mobile interface
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Real-Time Data Sync</CardTitle>
                <CardDescription>
                  Instant synchronization with your e-commerce platforms and accounting systems
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Custom Reports</CardTitle>
                <CardDescription>
                  Generate detailed reports with custom metrics, timeframes, and export options
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-success" />
                </div>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Full REST API for custom integrations and building your own inventory applications
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 text-center p-6">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <p className="text-sm font-medium text-foreground">{integration.name}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see your platform? We're constantly adding new integrations.
            </p>
            <Link to="/integrations">
              <Button variant="outline" className="gap-2">
                View All Integrations
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Proven Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">95%+</div>
              <p className="text-muted-foreground">Forecast Accuracy</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">89%</div>
              <p className="text-muted-foreground">Avg. Stockout Reduction</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-success">60%</div>
              <p className="text-muted-foreground">Faster PO Approvals</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-warning">$2M+</div>
              <p className="text-muted-foreground">Working Capital Saved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your inventory?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            See all these features in action with a free 14-day trial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                Schedule Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-4">
            No credit card required • Setup in minutes • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
