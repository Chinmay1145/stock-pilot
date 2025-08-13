import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  Activity,
  Server,
  Database,
  Globe,
  Zap,
  ExternalLink
} from "lucide-react";

export default function Status() {
  const systems = [
    {
      name: "API Services",
      status: "operational",
      uptime: "99.99%",
      icon: Server,
      description: "Core API endpoints and services"
    },
    {
      name: "Web Application",
      status: "operational", 
      uptime: "99.98%",
      icon: Globe,
      description: "StockPilot dashboard and web interface"
    },
    {
      name: "Forecasting Engine",
      status: "operational",
      uptime: "99.97%",
      icon: Activity,
      description: "AI-powered demand forecasting models"
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.99%",
      icon: Database,
      description: "Primary data storage and retrieval"
    },
    {
      name: "Slack Integration",
      status: "degraded",
      uptime: "99.85%",
      icon: Zap,
      description: "Slack notifications and automation"
    },
    {
      name: "Third-party Integrations",
      status: "operational",
      uptime: "99.92%",
      icon: ExternalLink,
      description: "Shopify, QuickBooks, and other integrations"
    }
  ];

  const incidents = [
    {
      title: "Intermittent Slack notification delays",
      status: "investigating",
      time: "2 hours ago",
      description: "Some users experiencing delays in Slack notifications. We're investigating the cause.",
      updates: [
        { time: "1 hour ago", message: "Identified the issue with our Slack API rate limiting. Implementing fix." },
        { time: "2 hours ago", message: "Initial reports of Slack notification delays received." }
      ]
    },
    {
      title: "Scheduled maintenance - Database optimization",
      status: "completed",
      time: "2 days ago", 
      description: "Routine database maintenance to improve performance completed successfully.",
      updates: [
        { time: "2 days ago", message: "Maintenance completed. All systems restored to full functionality." },
        { time: "2 days ago", message: "Maintenance began. Some users may experience slower response times." }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "down":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-success text-success-foreground">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-warning text-warning-foreground">Degraded</Badge>;
      case "down":
        return <Badge className="bg-destructive text-destructive-foreground">Down</Badge>;
      case "investigating":
        return <Badge variant="outline" className="border-warning text-warning">Investigating</Badge>;
      case "completed":
        return <Badge variant="outline" className="border-success text-success">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Activity className="h-4 w-4 mr-2" />
            System Status
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            StockPilot Status
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Real-time status and uptime information for all StockPilot services and integrations.
          </p>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="h-6 w-6 text-success" />
            <span className="text-lg font-semibold text-success">All systems operational</span>
          </div>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-success/20 bg-gradient-to-br from-success/5 to-success/10">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">99.98%</div>
                <p className="text-muted-foreground">Overall uptime (last 30 days)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Status */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">System Status</h2>
          <div className="space-y-4">
            {systems.map((system, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <system.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{system.name}</h3>
                        <p className="text-sm text-muted-foreground">{system.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{system.uptime}</div>
                        <div className="text-xs text-muted-foreground">30-day uptime</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(system.status)}
                        {getStatusBadge(system.status)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{incident.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(incident.status)}
                      <span className="text-sm text-muted-foreground">{incident.time}</span>
                    </div>
                  </div>
                  <CardDescription>{incident.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Updates:</h4>
                    {incident.updates.map((update, i) => (
                      <div key={i} className="flex space-x-3 text-sm">
                        <span className="text-muted-foreground whitespace-nowrap">{update.time}</span>
                        <span className="text-muted-foreground">{update.message}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Response Time</CardTitle>
                <CardDescription>Average API response time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">125ms</div>
                <p className="text-sm text-success">↓ 15ms from last week</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Uptime</CardTitle>
                <CardDescription>30-day availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">99.98%</div>
                <p className="text-sm text-success">↑ 0.02% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg">Incidents</CardTitle>
                <CardDescription>This month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">2</div>
                <p className="text-sm text-muted-foreground">1 resolved, 1 investigating</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Get notified about incidents and maintenance windows that might affect your service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2">
              Subscribe to Updates
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2">
              RSS Feed
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
