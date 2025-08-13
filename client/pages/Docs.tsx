import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Search,
  BookOpen,
  Code,
  Settings,
  BarChart3,
  Slack,
  ArrowRight,
  ExternalLink,
  FileText,
  Users,
  Lightbulb,
  Zap,
  Play,
  CheckCircle,
  Clock,
  Download,
  Copy,
} from "lucide-react";

export default function Docs() {
  const quickStartSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Sign up for a free 14-day trial",
      time: "2 minutes",
    },
    {
      step: 2,
      title: "Connect Your Store",
      description: "Integrate with Shopify, WooCommerce, or upload CSV",
      time: "5 minutes",
    },
    {
      step: 3,
      title: "Review Your Data",
      description: "Verify your product catalog and sales history",
      time: "2 minutes",
    },
    {
      step: 4,
      title: "Generate Forecasts",
      description: "Let AI analyze your data and create predictions",
      time: "1 minute",
    },
  ];

  const docSections = [
    {
      icon: Play,
      title: "Getting Started",
      description: "Quick setup guides and onboarding",
      articles: [
        { title: "Quick Start Guide", time: "5 min", popular: true },
        { title: "Account Setup", time: "3 min", popular: false },
        { title: "Data Import", time: "8 min", popular: true },
        { title: "First Forecast", time: "4 min", popular: true },
      ],
    },
    {
      icon: BarChart3,
      title: "Demand Forecasting",
      description: "Understanding and optimizing predictions",
      articles: [
        { title: "How Forecasting Works", time: "10 min", popular: true },
        { title: "Improving Accuracy", time: "12 min", popular: true },
        { title: "Seasonal Adjustments", time: "8 min", popular: false },
        { title: "New Product Forecasting", time: "6 min", popular: false },
      ],
    },
    {
      icon: Slack,
      title: "Slack Integration",
      description: "Setup and automation workflows",
      articles: [
        { title: "Slack Setup Guide", time: "7 min", popular: true },
        { title: "Purchase Order Approvals", time: "9 min", popular: true },
        { title: "Custom Notifications", time: "5 min", popular: false },
        { title: "Team Collaboration", time: "6 min", popular: false },
      ],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      articles: [
        { title: "Authentication", time: "4 min", popular: true },
        { title: "Forecasts API", time: "8 min", popular: true },
        { title: "Webhooks", time: "6 min", popular: false },
        { title: "Rate Limits", time: "3 min", popular: false },
      ],
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Billing, settings, and administration",
      articles: [
        { title: "Billing & Payments", time: "5 min", popular: false },
        { title: "Team Management", time: "7 min", popular: false },
        { title: "Security Settings", time: "4 min", popular: false },
        { title: "Data Export", time: "3 min", popular: false },
      ],
    },
    {
      icon: Users,
      title: "Best Practices",
      description: "Tips and strategies from experts",
      articles: [
        { title: "Inventory Optimization", time: "15 min", popular: true },
        { title: "Seasonal Planning", time: "12 min", popular: true },
        { title: "SKU Management", time: "10 min", popular: false },
        { title: "Supplier Relationships", time: "8 min", popular: false },
      ],
    },
  ];

  const popularGuides = [
    {
      title: "Complete Setup Guide",
      description: "End-to-end walkthrough from signup to first forecast",
      time: "20 min",
      difficulty: "Beginner",
    },
    {
      title: "Slack Automation Mastery",
      description: "Advanced workflows for purchase order approvals",
      time: "25 min",
      difficulty: "Intermediate",
    },
    {
      title: "API Integration Guide",
      description: "Build custom integrations with our REST API",
      time: "30 min",
      difficulty: "Advanced",
    },
    {
      title: "Forecast Accuracy Optimization",
      description: "Techniques to improve prediction accuracy",
      time: "18 min",
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              Documentation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                master StockPilot
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, API documentation, and best practices to
              help you get the most out of StockPilot's inventory intelligence
              platform.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get up and running with StockPilot in under 10 minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow relative"
              >
                <CardHeader className="text-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {step.time}
                  </div>
                </CardContent>
                {index < quickStartSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-background border border-border rounded-full flex items-center justify-center">
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              Start Quick Setup
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Documentation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive guides organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {section.title}
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.articles.map((article, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between group/item"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {article.title}
                          </span>
                          {article.popular && (
                            <Badge
                              variant="secondary"
                              className="text-xs px-1 py-0"
                            >
                              Popular
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">
                            {article.time}
                          </span>
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Popular Guides
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth tutorials to help you master advanced features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {popularGuides.map((guide, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge
                          variant={
                            guide.difficulty === "Beginner"
                              ? "default"
                              : guide.difficulty === "Intermediate"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {guide.difficulty}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground gap-1">
                          <Clock className="h-3 w-3" />
                          {guide.time}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {guide.description}
                      </CardDescription>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors ml-4" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Start with Code
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get forecasts with just a few lines of code
            </p>
          </div>

          <Card className="max-w-3xl mx-auto border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Get SKU Forecasts</CardTitle>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-black rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  <code>{`curl -X GET "https://api.stockpilot.ai/v1/forecasts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sku": "PRODUCT-123",
    "weeks": 12,
    "location": "warehouse-1"
  }'

# Response
{
  "sku": "PRODUCT-123",
  "forecasts": [
    {
      "week": "2024-01-01",
      "predicted_demand": 145,
      "confidence": 0.92
    },
    // ... more weeks
  ],
  "accuracy": 0.956
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link to="/api">
              <Button variant="outline" className="gap-2">
                View Full API Documentation
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More ways to learn and get help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SDKs & Libraries</CardTitle>
                <CardDescription>
                  Official libraries for Python, Node.js, and more
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">
                  Browse SDKs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with other developers and get help
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full gap-2">
                  Join Community
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Real-world code examples and use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full gap-2">
                  View Examples
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need help getting started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you succeed with StockPilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/help">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg gap-2"
              >
                Visit Help Center
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
