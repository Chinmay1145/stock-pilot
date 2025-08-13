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
  ShoppingCart,
  Calculator,
  CreditCard,
  Package,
  Truck,
  MessageSquare,
  Database,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Building2,
  ExternalLink,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";

export default function Integrations() {
  const featuredIntegrations = [
    {
      name: "Shopify",
      logo: "🛍️",
      category: "E-commerce",
      description:
        "Sync products, orders, and inventory data automatically from your Shopify store",
      features: [
        "Real-time sync",
        "Product catalogs",
        "Order history",
        "Multi-store support",
      ],
      setupTime: "2 minutes",
      popular: true,
      verified: true,
    },
    {
      name: "QuickBooks",
      logo: "📊",
      category: "Accounting",
      description:
        "Connect financial data and purchase orders with your accounting system",
      features: [
        "PO automation",
        "Cost tracking",
        "Financial reports",
        "Tax integration",
      ],
      setupTime: "5 minutes",
      popular: true,
      verified: true,
    },
    {
      name: "Slack",
      logo: "💬",
      category: "Communication",
      description:
        "Get notifications and approve purchase orders directly in Slack",
      features: [
        "Interactive buttons",
        "Custom workflows",
        "Team notifications",
        "Approval chains",
      ],
      setupTime: "3 minutes",
      popular: true,
      verified: true,
    },
  ];

  const integrationCategories = [
    {
      name: "E-commerce Platforms",
      icon: ShoppingCart,
      color: "primary",
      integrations: [
        { name: "Shopify", logo: "🛍️", status: "verified", setupTime: "2 min" },
        {
          name: "WooCommerce",
          logo: "🛒",
          status: "verified",
          setupTime: "3 min",
        },
        {
          name: "BigCommerce",
          logo: "🏪",
          status: "verified",
          setupTime: "3 min",
        },
        { name: "Magento", logo: "🎯", status: "verified", setupTime: "5 min" },
        { name: "Squarespace", logo: "◼️", status: "beta", setupTime: "4 min" },
        { name: "Wix", logo: "🔷", status: "beta", setupTime: "4 min" },
      ],
    },
    {
      name: "Accounting & ERP",
      icon: Calculator,
      color: "accent",
      integrations: [
        {
          name: "QuickBooks",
          logo: "📊",
          status: "verified",
          setupTime: "5 min",
        },
        { name: "Xero", logo: "💼", status: "verified", setupTime: "4 min" },
        {
          name: "NetSuite",
          logo: "📈",
          status: "verified",
          setupTime: "10 min",
        },
        { name: "SAP", logo: "🔧", status: "enterprise", setupTime: "Custom" },
        {
          name: "Oracle",
          logo: "🔴",
          status: "enterprise",
          setupTime: "Custom",
        },
        { name: "Sage", logo: "🟢", status: "coming-soon", setupTime: "TBD" },
      ],
    },
    {
      name: "Communication",
      icon: MessageSquare,
      color: "success",
      integrations: [
        { name: "Slack", logo: "💬", status: "verified", setupTime: "3 min" },
        {
          name: "Microsoft Teams",
          logo: "👥",
          status: "verified",
          setupTime: "4 min",
        },
        { name: "Discord", logo: "🎮", status: "beta", setupTime: "3 min" },
        { name: "Email", logo: "📧", status: "verified", setupTime: "1 min" },
        { name: "SMS", logo: "📱", status: "verified", setupTime: "2 min" },
        { name: "Webhook", logo: "🔗", status: "verified", setupTime: "2 min" },
      ],
    },
    {
      name: "Inventory Management",
      icon: Package,
      color: "warning",
      integrations: [
        {
          name: "TradeGecko",
          logo: "📦",
          status: "verified",
          setupTime: "6 min",
        },
        { name: "Cin7", logo: "📋", status: "verified", setupTime: "7 min" },
        {
          name: "Fishbowl",
          logo: "🐠",
          status: "verified",
          setupTime: "8 min",
        },
        { name: "inFlow", logo: "⚡", status: "beta", setupTime: "5 min" },
        { name: "Ordoro", logo: "📊", status: "coming-soon", setupTime: "TBD" },
        {
          name: "SkuVault",
          logo: "🏭",
          status: "coming-soon",
          setupTime: "TBD",
        },
      ],
    },
    {
      name: "Fulfillment & Logistics",
      icon: Truck,
      color: "destructive",
      integrations: [
        {
          name: "ShipStation",
          logo: "🚢",
          status: "verified",
          setupTime: "4 min",
        },
        { name: "FedEx", logo: "📦", status: "verified", setupTime: "5 min" },
        { name: "UPS", logo: "🚚", status: "verified", setupTime: "5 min" },
        { name: "DHL", logo: "✈️", status: "verified", setupTime: "5 min" },
        { name: "Amazon FBA", logo: "📦", status: "beta", setupTime: "8 min" },
        {
          name: "3PL Central",
          logo: "🏢",
          status: "coming-soon",
          setupTime: "TBD",
        },
      ],
    },
    {
      name: "Payment Processors",
      icon: CreditCard,
      color: "secondary",
      integrations: [
        { name: "Stripe", logo: "💳", status: "verified", setupTime: "3 min" },
        { name: "PayPal", logo: "💰", status: "verified", setupTime: "4 min" },
        { name: "Square", logo: "◼️", status: "verified", setupTime: "4 min" },
        { name: "Braintree", logo: "🧠", status: "beta", setupTime: "5 min" },
        {
          name: "Authorize.net",
          logo: "🔐",
          status: "beta",
          setupTime: "5 min",
        },
        { name: "Adyen", logo: "🔷", status: "coming-soon", setupTime: "TBD" },
      ],
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <Badge className="bg-success text-success-foreground text-xs">
            Verified
          </Badge>
        );
      case "beta":
        return (
          <Badge variant="secondary" className="text-xs">
            Beta
          </Badge>
        );
      case "enterprise":
        return (
          <Badge className="bg-primary text-primary-foreground text-xs">
            Enterprise
          </Badge>
        );
      case "coming-soon":
        return (
          <Badge variant="outline" className="text-xs">
            Coming Soon
          </Badge>
        );
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary";
      case "accent":
        return "bg-accent/10 text-accent";
      case "success":
        return "bg-success/10 text-success";
      case "warning":
        return "bg-warning/10 text-warning";
      case "destructive":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-secondary/10 text-secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              200+ Integrations
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect StockPilot with
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your entire stack
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Seamlessly integrate with your existing e-commerce, accounting,
              and communication tools. No manual data entry, no switching
              between platforms.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search integrations..."
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Most Popular Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The integrations our customers use most to transform their
              workflow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredIntegrations.map((integration, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{integration.logo}</div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <CardTitle className="group-hover:text-primary transition-colors">
                            {integration.name}
                          </CardTitle>
                          {integration.verified && (
                            <CheckCircle className="h-4 w-4 text-success" />
                          )}
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {integration.category}
                        </Badge>
                      </div>
                    </div>
                    {integration.popular && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <CardDescription className="mt-4">
                    {integration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {integration.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{integration.setupTime} setup</span>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        Connect
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect integration for your business needs
            </p>
          </div>

          <div className="space-y-12">
            {integrationCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}
                  >
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h3>
                  <Badge variant="outline" className="ml-auto">
                    {category.integrations.length} integrations
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {category.integrations.map((integration, i) => (
                    <Card
                      key={i}
                      className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{integration.logo}</div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                          {integration.name}
                        </h4>
                        <div className="flex items-center justify-center space-x-2 mt-2">
                          {getStatusBadge(integration.status)}
                        </div>
                        <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground mt-2">
                          <Clock className="h-3 w-3" />
                          <span>{integration.setupTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build custom integrations for Enterprise customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enterprise Solutions</CardTitle>
                <CardDescription>
                  Custom integrations with any system your business uses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Full REST API for building your own integrations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Dedicated Support</CardTitle>
                <CardDescription>
                  Our team helps you build and maintain custom connections
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Contact Enterprise Sales
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/api">
                <Button size="lg" variant="outline" className="gap-2">
                  View API Docs
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Integration Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the impact of connecting your entire tech stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Less manual data entry</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10x</div>
              <p className="text-muted-foreground">
                Faster setup than manual imports
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">
                Real-time
              </div>
              <p className="text-muted-foreground">
                Data sync across all platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to connect your stack?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with a free trial and connect your first integration in
            minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                View Setup Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
