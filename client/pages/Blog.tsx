import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Users,
  Lightbulb,
  BarChart3,
  Zap,
  Target,
  Slack,
  Brain
} from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "The Complete Guide to SKU-Level Demand Forecasting",
    excerpt: "Learn how AI-powered demand forecasting works, why SKU-level predictions matter, and how to implement forecasting that actually improves your bottom line.",
    category: "Demand Forecasting",
    readTime: "12 min read",
    date: "Dec 15, 2024",
    author: "Maya Kim",
    role: "CTO & Co-Founder"
  };

  const blogPosts = [
    {
      title: "5 Inventory KPIs Every E-commerce Manager Should Track",
      excerpt: "Beyond basic turnover rates: the advanced metrics that separate growing businesses from stagnant ones.",
      category: "Analytics",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      author: "Alex Silva",
      role: "CEO"
    },
    {
      title: "How Slack Integration Transforms Purchase Order Workflows",
      excerpt: "Real-world examples of how teams reduced PO approval time from weeks to minutes using automation.",
      category: "Automation",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Raj Patel",
      role: "Head of Product"
    },
    {
      title: "Seasonal Demand Planning: Beyond Simple Year-Over-Year",
      excerpt: "Advanced techniques for handling seasonality, trend changes, and market disruptions in your forecasts.",
      category: "Demand Forecasting",
      readTime: "10 min read",
      date: "Dec 8, 2024",
      author: "Maya Kim",
      role: "CTO"
    },
    {
      title: "The Hidden Costs of Stockouts: Beyond Lost Sales",
      excerpt: "Customer lifetime value, brand reputation, and opportunity costs—calculating the true impact of stockouts.",
      category: "Strategy",
      readTime: "7 min read",
      date: "Dec 5, 2024",
      author: "Sarah Chen",
      role: "Guest Author"
    },
    {
      title: "Machine Learning vs. Traditional Forecasting: A Data-Driven Comparison",
      excerpt: "We analyzed 1 million SKU predictions to show you exactly when and why ML outperforms traditional methods.",
      category: "Machine Learning",
      readTime: "15 min read",
      date: "Dec 3, 2024",
      author: "Maya Kim",
      role: "CTO"
    },
    {
      title: "Building Supplier Relationships for Better Lead Time Predictability",
      excerpt: "Communication strategies and data sharing practices that improve forecast accuracy across your supply chain.",
      category: "Supply Chain",
      readTime: "9 min read",
      date: "Nov 30, 2024",
      author: "Raj Patel",
      role: "Head of Product"
    }
  ];

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen },
    { name: "Demand Forecasting", count: 8, icon: BarChart3 },
    { name: "Automation", count: 6, icon: Zap },
    { name: "Analytics", count: 5, icon: TrendingUp },
    { name: "Machine Learning", count: 3, icon: Brain },
    { name: "Strategy", count: 2, icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Lightbulb className="h-4 w-4 mr-2" />
              Inventory Intelligence Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Master inventory<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                management
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              In-depth guides, case studies, and best practices from inventory management experts. 
              Learn how to eliminate stockouts and optimize your supply chain.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..."
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Article</h2>
            <p className="text-muted-foreground">Our most comprehensive guide to demand forecasting</p>
          </div>

          <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 max-w-4xl mx-auto">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline" className="border-primary text-primary">
                  {featuredPost.category}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
              <CardTitle className="text-3xl sm:text-4xl mb-4 leading-tight">
                {featuredPost.title}
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                {featuredPost.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold">
                    MK
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{featuredPost.author}</p>
                    <p className="text-sm text-muted-foreground">{featuredPost.role}</p>
                  </div>
                </div>
                <Button className="gap-2">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with the latest insights and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-xs gap-2">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                        <div className="flex items-center text-xs text-muted-foreground gap-2">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              Load More Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto text-center border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl mb-4">
                Never Miss an Update
              </CardTitle>
              <CardDescription className="text-lg">
                Get the latest inventory management insights, case studies, and best practices 
                delivered straight to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="gap-2">
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join 5,000+ inventory professionals. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Popular Topics</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Demand Forecasting', 'Inventory Optimization', 'SKU Management', 'Machine Learning',
              'Supply Chain', 'Stockout Prevention', 'Cash Flow', 'Seasonal Planning',
              'Purchase Orders', 'Slack Automation', 'KPIs', 'Analytics'
            ].map((tag) => (
              <Button 
                key={tag} 
                variant="ghost" 
                size="sm" 
                className="text-muted-foreground hover:text-foreground hover:bg-background"
              >
                #{tag.toLowerCase().replace(' ', '')}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
