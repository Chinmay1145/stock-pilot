import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrustIndicators } from "@/components/TrustIndicators";
import { CustomerLogos } from "@/components/CustomerLogos";
import { CookieConsent } from "@/components/CookieConsent";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  Slack,
  ShoppingCart,
  AlertTriangle,
  Users,
  Star,
  PlayCircle
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Inventory Intelligence
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Forecast SKU-level demand,<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                prevent stockouts
              </span>,<br />
              automate PO approvals via Slack
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your inventory management with AI-driven demand forecasting, 
              intelligent purchase order automation, and seamless Slack integrations. 
              Never run out of stock again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="px-8 py-4 text-lg gap-2">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              14-day free trial • No credit card required • Setup in minutes
            </p>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <CustomerLogos />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need to optimize inventory
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to eliminate stockouts and optimize your cash flow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>12-Week Demand Forecasting</CardTitle>
                <CardDescription>
                  AI-powered SKU-level predictions with 95%+ accuracy using advanced machine learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Slack className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Slack PO Automation</CardTitle>
                <CardDescription>
                  Automated purchase order approvals with interactive Slack buttons and multi-step workflows
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <CardTitle>What-If Scenario Planner</CardTitle>
                <CardDescription>
                  Interactive demand modeling for price changes, promotions, and market scenarios
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Stockout Risk Alerts</CardTitle>
                <CardDescription>
                  Real-time anomaly detection and automated alerts for inventory risks
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Purchase Orders</CardTitle>
                <CardDescription>
                  Automated PO generation based on forecasts, lead times, and supplier preferences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="animate-scale-in border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>MAPE & Backtesting</CardTitle>
                <CardDescription>
                  Model accuracy tracking with comprehensive backtesting and performance analytics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Case Walkthrough */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See StockPilot in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world use case: How a growing e-commerce brand reduced stockouts by 89%
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Connect Your Data Sources
                  </h3>
                  <p className="text-muted-foreground">
                    Seamlessly integrate with Shopify, QuickBooks, and existing inventory systems
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    AI Analyzes Demand Patterns
                  </h3>
                  <p className="text-muted-foreground">
                    Machine learning models process seasonality, promotions, and market trends
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Generate Smart Purchase Orders
                  </h3>
                  <p className="text-muted-foreground">
                    Automated PO suggestions with optimal quantities and timing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Approve via Slack
                  </h3>
                  <p className="text-muted-foreground">
                    One-click approvals with full visibility into forecast rationale
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">Demo Dashboard</h4>
                  <Badge variant="outline">Live Preview</Badge>
                </div>
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded p-3">
                      <p className="text-sm text-muted-foreground">Forecast Accuracy</p>
                      <p className="text-lg font-semibold text-success">96.2%</p>
                    </div>
                    <div className="bg-muted rounded p-3">
                      <p className="text-sm text-muted-foreground">Stockouts Prevented</p>
                      <p className="text-lg font-semibold text-primary">127</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by growing businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how companies are transforming their inventory management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "StockPilot reduced our stockouts by 89% and saved us $2M in working capital. 
                  The Slack integration makes approvals seamless."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">COO, TechStyle Fashion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The demand forecasting is incredibly accurate. We've gone from reactive 
                  to proactive inventory management."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mike Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Inventory Director, GrowthCo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "Setup took 10 minutes. Within a week, we were getting actionable 
                  insights that saved us from major stockouts."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emily Watson</p>
                    <p className="text-sm text-muted-foreground">CEO, EcoLiving</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to eliminate stockouts forever?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of growing businesses using StockPilot to optimize their inventory
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
            14-day free trial • No setup fees • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}
