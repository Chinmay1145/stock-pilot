import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Lightbulb className="h-4 w-4 mr-2" />
              Our Mission
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforming inventory<br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                management forever
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We believe every business deserves intelligent inventory management. Our AI-powered platform 
              eliminates stockouts, optimizes cash flow, and gives you the confidence to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  StockPilot was born from frustration. As former e-commerce operators, we experienced 
                  the pain of stockouts firsthand—lost sales, disappointed customers, and sleepless nights 
                  wondering if we ordered enough inventory.
                </p>
                <p>
                  Traditional inventory management was reactive, manual, and error-prone. We knew there 
                  had to be a better way. After years of building AI systems at scale, we created the 
                  solution we always wished we had.
                </p>
                <p>
                  Today, StockPilot helps hundreds of growing businesses predict demand with unprecedented 
                  accuracy, automate purchase decisions, and scale confidently without the fear of stockouts.
                </p>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Founded</h3>
                      <p className="text-muted-foreground">2023</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Customers</h3>
                      <p className="text-muted-foreground">500+ growing businesses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Stockouts Prevented</h3>
                      <p className="text-muted-foreground">50,000+ this year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer-First</CardTitle>
                <CardDescription>
                  Every decision starts with our customers. We build solutions that solve real problems 
                  and deliver measurable value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We're not afraid to challenge the status quo. Innovation drives us to find better, 
                  smarter ways to solve inventory challenges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We hold ourselves to the highest standards. From code quality to customer support, 
                  excellence is non-negotiable.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The people building the future of inventory management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                  AS
                </div>
                <CardTitle>Alex Silva</CardTitle>
                <CardDescription>CEO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Former Head of Engineering at high-growth e-commerce. 10+ years building AI systems at scale.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                  MK
                </div>
                <CardTitle>Maya Kim</CardTitle>
                <CardDescription>CTO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Former ML Engineer at top-tier tech companies. PhD in Machine Learning from Stanford.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-success to-accent rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4">
                  RJ
                </div>
                <CardTitle>Raj Patel</CardTitle>
                <CardDescription>Head of Product</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Former Product Lead at inventory management unicorn. Expert in supply chain optimization.
                </p>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our vision of transforming inventory management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/careers">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg gap-2">
                View Open Roles
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
