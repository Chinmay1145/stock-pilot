import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  Users,
  Settings,
  BarChart3,
  Slack,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Lightbulb,
  Zap
} from "lucide-react";

export default function Help() {
  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Setup guides and onboarding",
      articles: [
        "Quick Start Guide",
        "Connecting Your Store",
        "First Forecast Setup",
        "Understanding Your Dashboard"
      ]
    },
    {
      icon: BarChart3,
      title: "Demand Forecasting",
      description: "Understanding predictions and accuracy",
      articles: [
        "How Forecasting Works",
        "Improving Forecast Accuracy",
        "Seasonal Adjustments",
        "New Product Forecasting"
      ]
    },
    {
      icon: Slack,
      title: "Slack Integration",
      description: "Setting up and using Slack automation",
      articles: [
        "Slack Setup Guide",
        "Purchase Order Approvals",
        "Custom Notifications",
        "Team Collaboration"
      ]
    },
    {
      icon: Settings,
      title: "Account & Billing",
      description: "Managing your subscription and settings",
      articles: [
        "Billing & Payments",
        "Upgrading Your Plan",
        "Team Management",
        "Security Settings"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to Set Up Your First Forecast",
      category: "Getting Started",
      readTime: "5 min",
      views: "2.4k"
    },
    {
      title: "Understanding Forecast Accuracy Metrics",
      category: "Forecasting",
      readTime: "8 min",
      views: "1.8k"
    },
    {
      title: "Slack Integration Setup Guide",
      category: "Integrations",
      readTime: "6 min",
      views: "1.5k"
    },
    {
      title: "Troubleshooting Data Sync Issues",
      category: "Technical",
      readTime: "4 min",
      views: "1.2k"
    },
    {
      title: "Best Practices for Inventory Optimization",
      category: "Strategy",
      readTime: "12 min",
      views: "980"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How can we<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                help you?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Find answers, guides, and resources to get the most out of StockPilot. 
              From setup to advanced features, we've got you covered.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..."
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>
                  Get instant help from our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>
                  Step-by-step video guides
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Connect with other StockPilot users
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button variant="outline" className="w-full gap-2">
                  Join Community
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the help you need organized by topic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.articles.map((article, i) => (
                      <div key={i} className="flex items-center justify-between group/item">
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {article}
                        </span>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 p-0 h-auto font-normal text-primary">
                    View all articles →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most helpful articles from our knowledge base
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {article.readTime} read
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {article.views} views
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors ml-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              Browse All Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Still need help?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you 
                get the most out of StockPilot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <Button size="lg" className="px-8 py-4 text-lg gap-2">
                    Contact Support
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Live Chat
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Average response time: 2 hours • Available 24/7
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
