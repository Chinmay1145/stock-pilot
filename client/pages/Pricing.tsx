import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  ArrowRight,
  DollarSign,
  Zap,
  Crown,
  Building2,
  Users,
  MessageCircle,
  Shield,
  Star,
  TrendingUp
} from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: 99,
      description: "Perfect for small businesses getting started with demand forecasting",
      icon: Zap,
      popular: false,
      features: [
        "Up to 500 SKUs",
        "12-week demand forecasts", 
        "Basic Slack integration",
        "Email support",
        "Standard reports",
        "API access (1k calls/month)"
      ],
      limitations: [
        "No what-if scenarios",
        "No custom alerts",
        "No multi-location support"
      ]
    },
    {
      name: "Growth",
      price: 299,
      description: "Advanced features for growing businesses with complex inventory needs",
      icon: TrendingUp,
      popular: true,
      features: [
        "Up to 5,000 SKUs",
        "12-week demand forecasts",
        "Advanced Slack automation",
        "What-if scenario planning",
        "Custom alerts & monitoring",
        "Priority support",
        "Advanced analytics",
        "API access (10k calls/month)",
        "Multi-location support"
      ],
      limitations: [
        "No custom integrations",
        "No dedicated support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-featured solution for large organizations with enterprise requirements",
      icon: Building2,
      popular: false,
      features: [
        "Unlimited SKUs",
        "Custom forecast models",
        "Full Slack workflow automation",
        "Advanced scenario planning",
        "Real-time alerts",
        "Dedicated success manager",
        "Custom integrations",
        "White-label options",
        "Unlimited API access",
        "Multi-tenant support",
        "SLA guarantees",
        "Advanced security"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "How accurate are the demand forecasts?",
      answer: "Our AI models achieve 95%+ accuracy on average. Accuracy improves over time as the system learns your business patterns and seasonal trends."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, all plans can be canceled anytime with no penalties. You'll retain access until the end of your current billing cycle."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial on all plans. No credit card required to get started."
    },
    {
      question: "What integrations do you support?",
      answer: "We integrate with Shopify, QuickBooks, WooCommerce, BigCommerce, NetSuite, Xero, and many more. Custom integrations available on Enterprise plans."
    },
    {
      question: "How long does setup take?",
      answer: "Most customers are up and running within 10 minutes. Our onboarding team helps Enterprise customers with more complex setups."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change plans anytime. Upgrades take effect immediately, downgrades at the next billing cycle."
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
              <DollarSign className="h-4 w-4 mr-2" />
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Choose the plan that<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                fits your business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Start with a 14-day free trial. No credit card required. Scale as you grow. 
              All plans include core forecasting and Slack automation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`border-border hover:shadow-lg transition-all duration-300 relative ${
                  plan.popular ? 'border-2 border-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      <Crown className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    {typeof plan.price === 'number' && (
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-center space-x-3 opacity-60">
                        <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <Link to="/signup">
                      <Button 
                        className={`w-full gap-2 ${
                          plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                        }`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Growth</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "SKU Limit", starter: "500", growth: "5,000", enterprise: "Unlimited" },
                  { feature: "Demand Forecasting", starter: true, growth: true, enterprise: true },
                  { feature: "Slack Integration", starter: "Basic", growth: "Advanced", enterprise: "Full Automation" },
                  { feature: "What-if Scenarios", starter: false, growth: true, enterprise: true },
                  { feature: "Custom Alerts", starter: false, growth: true, enterprise: true },
                  { feature: "Multi-location", starter: false, growth: true, enterprise: true },
                  { feature: "API Calls/month", starter: "1k", growth: "10k", enterprise: "Unlimited" },
                  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated Manager" },
                  { feature: "Custom Integrations", starter: false, growth: false, enterprise: true },
                  { feature: "SLA", starter: false, growth: false, enterprise: "99.9%" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.growth === 'boolean' ? (
                        row.growth ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      ) : (
                        row.growth
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check className="h-4 w-4 text-success mx-auto" /> : <X className="h-4 w-4 text-muted-foreground mx-auto" />
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl italic text-foreground mb-6 leading-relaxed">
                "StockPilot paid for itself in the first month. The ROI has been incredible - 
                we've eliminated stockouts and freed up $2M in working capital."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sarah Chen</p>
                  <p className="text-muted-foreground">COO, TechStyle Fashion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why hundreds of businesses trust StockPilot
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
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="text-sm text-white/80 mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
