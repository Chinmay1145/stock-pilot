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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Code,
  Brain,
  Zap,
  Globe,
  Coffee,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Build and scale ML models for demand forecasting across thousands of SKUs. Work with cutting-edge time-series forecasting and deep learning techniques.",
      requirements: [
        "Python, PyTorch/TensorFlow",
        "Time-series forecasting experience",
        "Production ML systems",
        "PhD/Masters in ML/Stats preferred",
      ],
      salary: "$180k - $250k",
    },
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build the future of inventory management dashboards. Work on React frontends, Node.js APIs, and real-time data processing systems.",
      requirements: [
        "React, TypeScript, Node.js",
        "Database design (PostgreSQL)",
        "API design and scaling",
        "Supply chain domain knowledge a plus",
      ],
      salary: "$160k - $220k",
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Design intuitive interfaces for complex inventory data. Help inventory managers make better decisions through beautiful, functional design.",
      requirements: [
        "Figma, design systems",
        "B2B SaaS experience",
        "Data visualization design",
        "User research experience",
      ],
      salary: "$140k - $190k",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description:
        "Help our customers achieve their inventory optimization goals. Work directly with growing e-commerce brands to maximize ROI.",
      requirements: [
        "B2B SaaS customer success",
        "Inventory/supply chain knowledge",
        "Strong communication skills",
        "Data analysis capabilities",
      ],
      salary: "$120k - $160k",
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "1+ years",
      description:
        "Generate and qualify leads for our enterprise sales team. Help growing businesses discover how StockPilot can transform their operations.",
      requirements: [
        "B2B sales experience",
        "CRM proficiency (HubSpot/Salesforce)",
        "Strong written communication",
        "Goal-oriented mindset",
      ],
      salary: "$80k - $120k + commission",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Scale our infrastructure to handle millions of SKU predictions. Build reliable, secure systems that our customers depend on.",
      requirements: [
        "AWS/GCP expertise",
        "Kubernetes, Docker",
        "Infrastructure as Code",
        "Security best practices",
      ],
      salary: "$150k - $200k",
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance. Plus wellness stipend for gym, meditation apps, etc.",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description:
        "Work from anywhere. We have a beautiful SF office, but remote work is encouraged and supported.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description:
        "$3,000 annual learning budget for conferences, courses, books, and skill development.",
    },
    {
      icon: DollarSign,
      title: "Equity & Ownership",
      description:
        "Meaningful equity packages. Everyone shares in our success as we build the future of inventory management.",
    },
    {
      icon: Coffee,
      title: "Flexible Time Off",
      description:
        "Unlimited PTO policy. We trust you to manage your time and take the rest you need to do your best work.",
    },
    {
      icon: Target,
      title: "Impact & Purpose",
      description:
        "Your work directly helps businesses avoid stockouts, optimize cash flow, and scale confidently.",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Customer Obsession",
      description:
        "Every decision starts with our customers. We build solutions that solve real problems and deliver measurable value.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We're not afraid to challenge the status quo. Innovation drives us to find better, smarter ways to solve inventory challenges.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We hold ourselves to the highest standards. From code quality to customer support, excellence is non-negotiable.",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description:
        "Speed matters in startups. We make decisions quickly, iterate rapidly, and learn from every experiment.",
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
              <Briefcase className="h-4 w-4 mr-2" />
              We're Hiring
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Build the future of
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                inventory intelligence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a team of world-class engineers, designers, and business
              minds solving one of the most challenging problems in e-commerce.
              Help growing businesses eliminate stockouts forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg gap-2">
                View Open Roles
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg gap-2"
              >
                Life at StockPilot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                25+
              </div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                $15M
              </div>
              <p className="text-muted-foreground">Series A Raised</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-success mb-2">
                500+
              </div>
              <p className="text-muted-foreground">Customers</p>
            </div>
            <div className="animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-warning mb-2">
                10x
              </div>
              <p className="text-muted-foreground">Growth This Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're building more than a product—we're building a place where
              great people do their best work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next role and help us transform inventory management
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant="outline">{job.department}</Badge>
                        <div className="flex items-center text-muted-foreground text-sm gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="mb-4">
                        {job.description}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-success" />
                        <span className="font-medium text-success">
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <Button className="gap-2 lg:min-w-[140px]">
                      Apply Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see a role that fits? We're always looking for exceptional
              people.
            </p>
            <Button variant="outline" size="lg" className="gap-2">
              Send Us Your Resume
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to make an impact?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in building the future of inventory management. Your work
            will directly help thousands of businesses grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/careers">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg gap-2"
              >
                View All Open Roles
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
              >
                Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
