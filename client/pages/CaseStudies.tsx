import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  ArrowRight, 
  Users,
  Star,
  BarChart3,
  DollarSign,
  Package,
  Clock,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Customer Success Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Real results from<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                real businesses
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              See how growing companies use StockPilot to eliminate stockouts, optimize cash flow, 
              and scale confidently with AI-powered inventory intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Companies Trust StockPilot</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">89%</div>
              <p className="text-muted-foreground">Average Stockout Reduction</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-success mb-2">$50M+</div>
              <p className="text-muted-foreground">Working Capital Optimized</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-warning mb-2">96%</div>
              <p className="text-muted-foreground">Forecast Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center pb-8">
              <Badge variant="outline" className="w-fit mx-auto mb-4 border-primary text-primary">
                Featured Case Study
              </Badge>
              <CardTitle className="text-3xl sm:text-4xl mb-4">
                TechStyle Fashion: From Reactive to Predictive
              </CardTitle>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                How a $100M+ fashion brand eliminated 89% of stockouts and optimized $2M in working capital
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">Customer Rating</span>
                  </div>
                  
                  <blockquote className="text-xl italic text-foreground leading-relaxed">
                    "StockPilot transformed our entire inventory strategy. We went from constant firefighting 
                    to confident planning. The ROI was immediate and substantial."
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sarah Chen</p>
                      <p className="text-muted-foreground">COO, TechStyle Fashion</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-success" />
                        <span className="font-semibold text-success">89%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Stockout Reduction</p>
                    </div>
                    <div className="bg-white/80 rounded-lg p-4 border border-border">
                      <div className="flex items-center space-x-2 mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-primary">$2M</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Working Capital Saved</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">The Challenge</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                        <span>20% of SKUs constantly out of stock</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                        <span>Manual PO process taking 2+ weeks</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                        <span>$5M+ tied up in excess inventory</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">The Solution</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span>AI-powered demand forecasting for 2,000+ SKUs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span>Automated Slack PO approvals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span>Real-time stockout risk alerts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Companies across industries are transforming their inventory management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">E-commerce</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">GrowthCo: 300% Sales Growth</CardTitle>
                <CardDescription>
                  Scaled from $1M to $3M revenue without stockouts using StockPilot's predictive analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <p className="text-sm text-muted-foreground">Forecast Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">60%</div>
                      <p className="text-sm text-muted-foreground">Inventory Turns</p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "StockPilot's forecasts were more accurate than our experienced buyers. 
                    It gave us the confidence to scale rapidly."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Mike Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Inventory Director</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Consumer Goods</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">EcoLiving: Sustainable Success</CardTitle>
                <CardDescription>
                  Reduced waste by 40% while improving availability for eco-friendly products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">40%</div>
                      <p className="text-sm text-muted-foreground">Waste Reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <p className="text-sm text-muted-foreground">Availability</p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "As a sustainable brand, reducing waste was crucial. StockPilot helped us optimize 
                    inventory while maintaining our environmental values."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Emily Watson</p>
                      <p className="text-xs text-muted-foreground">CEO</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Electronics</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">TechHub: Complex SKU Management</CardTitle>
                <CardDescription>
                  Managed 10,000+ SKUs with 92% accuracy during peak holiday season
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">10K+</div>
                      <p className="text-sm text-muted-foreground">SKUs Managed</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <p className="text-sm text-muted-foreground">Holiday Accuracy</p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "Managing electronics inventory during Black Friday was a nightmare. 
                    StockPilot made it manageable and profitable."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">David Kim</p>
                      <p className="text-xs text-muted-foreground">Operations Manager</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">Healthcare</Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl">MedSupply: Critical Stock Levels</CardTitle>
                <CardDescription>
                  Ensured 99.9% availability for critical medical supplies while reducing costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-success">99.9%</div>
                      <p className="text-sm text-muted-foreground">Availability</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">25%</div>
                      <p className="text-sm text-muted-foreground">Cost Reduction</p>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground">
                    "In healthcare, stockouts aren't just inconvenient—they're dangerous. 
                    StockPilot gives us the reliability we need."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Dr. Sarah Patel</p>
                      <p className="text-xs text-muted-foreground">Supply Chain Director</p>
                    </div>
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
            Ready to write your success story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of growing businesses using StockPilot to transform their inventory management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg gap-2">
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                Schedule a Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-4">
            14-day free trial • No setup fees • Results in the first week
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
