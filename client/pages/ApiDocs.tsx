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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Search,
  Code,
  Key,
  Database,
  Zap,
  Shield,
  Clock,
  Copy,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  FileText,
  Terminal,
  Book,
  Globe,
} from "lucide-react";

export default function ApiDocs() {
  const endpoints = [
    {
      method: "GET",
      path: "/forecasts",
      description: "Get demand forecasts for SKUs",
      category: "Forecasting",
    },
    {
      method: "POST",
      path: "/forecasts",
      description: "Create a new forecast request",
      category: "Forecasting",
    },
    {
      method: "GET",
      path: "/forecasts/{id}",
      description: "Get specific forecast by ID",
      category: "Forecasting",
    },
    {
      method: "GET",
      path: "/inventory",
      description: "Get current inventory levels",
      category: "Inventory",
    },
    {
      method: "POST",
      path: "/purchase-orders",
      description: "Create purchase order suggestions",
      category: "Purchase Orders",
    },
    {
      method: "GET",
      path: "/purchase-orders",
      description: "List purchase orders",
      category: "Purchase Orders",
    },
    {
      method: "PUT",
      path: "/purchase-orders/{id}/approve",
      description: "Approve a purchase order",
      category: "Purchase Orders",
    },
    {
      method: "GET",
      path: "/analytics",
      description: "Get forecast accuracy metrics",
      category: "Analytics",
    },
  ];

  const sdks = [
    {
      name: "Python",
      icon: "🐍",
      description: "Official Python SDK with async support",
      install: "pip install stockpilot-python",
      docs: "/docs/sdks/python",
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "TypeScript-ready Node.js library",
      install: "npm install @stockpilot/sdk",
      docs: "/docs/sdks/nodejs",
    },
    {
      name: "Go",
      icon: "🐹",
      description: "Lightweight Go client library",
      install: "go get github.com/stockpilot/go-sdk",
      docs: "/docs/sdks/go",
    },
    {
      name: "PHP",
      icon: "🐘",
      description: "Composer-ready PHP package",
      install: "composer require stockpilot/php-sdk",
      docs: "/docs/sdks/php",
    },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-success text-success-foreground";
      case "POST":
        return "bg-primary text-primary-foreground";
      case "PUT":
        return "bg-warning text-warning-foreground";
      case "DELETE":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
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
              <Code className="h-4 w-4 mr-2" />
              REST API v1.0
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Build with the
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                StockPilot API
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrate demand forecasting, inventory optimization, and purchase
              order automation into your applications with our powerful REST
              API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg gap-2">
                Get API Key
                <Key className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg gap-2"
              >
                <Terminal className="h-5 w-5" />
                Try in Playground
              </Button>
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
              Get up and running with the StockPilot API in minutes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="curl" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curl">cURL</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                <TabsTrigger value="go">Go</TabsTrigger>
              </TabsList>

              <TabsContent value="curl" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Get Forecasts with cURL</CardTitle>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{`# Get forecasts for a specific SKU
curl -X GET "https://api.stockpilot.ai/v1/forecasts?sku=PRODUCT-123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Response
{
  "data": [
    {
      "sku": "PRODUCT-123",
      "week": "2024-01-01",
      "predicted_demand": 145,
      "confidence": 0.92,
      "lower_bound": 120,
      "upper_bound": 170
    }
  ],
  "meta": {
    "accuracy": 0.956,
    "model_version": "v2.1"
  }
}`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="python" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Python SDK Example</CardTitle>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{`# Install: pip install stockpilot-python
from stockpilot import StockPilot

# Initialize client
client = StockPilot(api_key="YOUR_API_KEY")

# Get forecasts
forecasts = client.forecasts.get(
    sku="PRODUCT-123",
    weeks=12
)

# Create purchase order
po = client.purchase_orders.create(
    sku="PRODUCT-123",
    quantity=150,
    supplier="supplier-abc"
)

print(f"Forecast accuracy: {forecasts.meta.accuracy}")
print(f"PO created: {po.id}")
`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="nodejs" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Node.js SDK Example</CardTitle>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{`// Install: npm install @stockpilot/sdk
import { StockPilot } from '@stockpilot/sdk';

// Initialize client
const client = new StockPilot({
  apiKey: 'YOUR_API_KEY'
});

// Get forecasts with async/await
const forecasts = await client.forecasts.get({
  sku: 'PRODUCT-123',
  weeks: 12
});

// Create purchase order
const po = await client.purchaseOrders.create({
  sku: 'PRODUCT-123',
  quantity: 150,
  supplier: 'supplier-abc'
});

console.log(\`Forecast accuracy: \${forecasts.meta.accuracy}\`);
console.log(\`PO created: \${po.id}\`);
`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="go" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Go SDK Example</CardTitle>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black rounded-lg p-4 overflow-x-auto">
                      <pre className="text-green-400 text-sm">
                        <code>{`// Install: go get github.com/stockpilot/go-sdk
package main

import (
    "fmt"
    "log"
    "github.com/stockpilot/go-sdk"
)

func main() {
    // Initialize client
    client := stockpilot.New("YOUR_API_KEY")
    
    // Get forecasts
    forecasts, err := client.Forecasts.Get(&stockpilot.ForecastOptions{
        SKU:   "PRODUCT-123",
        Weeks: 12,
    })
    if err != nil {
        log.Fatal(err)
    }
    
    // Create purchase order
    po, err := client.PurchaseOrders.Create(&stockpilot.POOptions{
        SKU:      "PRODUCT-123",
        Quantity: 150,
        Supplier: "supplier-abc",
    })
    if err != nil {
        log.Fatal(err)
    }
    
    fmt.Printf("Forecast accuracy: %.3f\\n", forecasts.Meta.Accuracy)
    fmt.Printf("PO created: %s\\n", po.ID)
}
`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              API Endpoints
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete reference for all available endpoints
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search endpoints..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Badge
                          className={`${getMethodColor(endpoint.method)} font-mono text-xs`}
                        >
                          {endpoint.method}
                        </Badge>
                        <div>
                          <h3 className="font-mono text-foreground group-hover:text-primary transition-colors">
                            {endpoint.path}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {endpoint.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {endpoint.category}
                        </Badge>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Official SDKs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Type-safe libraries for your favorite programming language
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sdks.map((sdk, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{sdk.icon}</div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {sdk.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {sdk.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-black rounded p-2 text-center">
                    <code className="text-green-400 text-xs">
                      {sdk.install}
                    </code>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Book className="h-3 w-3" />
                    View Docs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade API
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for scale, security, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Compliant</CardTitle>
                <CardDescription>
                  OAuth 2.0, rate limiting, and SOC 2 compliance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>99.9% Uptime</CardTitle>
                <CardDescription>
                  Reliable infrastructure with global CDN and monitoring
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Fast Response Times</CardTitle>
                <CardDescription>
                  Average 120ms response time across all endpoints
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Webhooks</CardTitle>
                <CardDescription>
                  Real-time notifications for forecast updates and alerts
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle>OpenAPI Spec</CardTitle>
                <CardDescription>
                  Complete OpenAPI 3.0 specification for code generation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Global Scale</CardTitle>
                <CardDescription>
                  Multi-region deployment with automatic failover
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Rate Limits & Pricing
            </h2>
            <p className="text-muted-foreground">
              Transparent pricing based on your API usage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle>Starter</CardTitle>
                <div className="text-2xl font-bold text-primary">1,000</div>
                <CardDescription>requests/month</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    100 requests/minute
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    All core endpoints
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Email support
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border border-2 border-primary">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle>Growth</CardTitle>
                <div className="text-2xl font-bold text-primary">10,000</div>
                <CardDescription>requests/month</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    1,000 requests/minute
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Webhooks included
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Priority support
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle>Enterprise</CardTitle>
                <div className="text-2xl font-bold text-primary">Unlimited</div>
                <CardDescription>requests</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Custom rate limits
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    SLA guarantees
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Dedicated support
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to start building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get your API key and start integrating StockPilot into your
            applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg gap-2"
            >
              Get API Key Free
              <Key className="h-5 w-5" />
            </Button>
            <Link to="/docs">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary gap-2"
              >
                <Book className="h-5 w-5" />
                Read Full Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
