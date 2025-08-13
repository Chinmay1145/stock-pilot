import { useLocation } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  FileText, 
  AlertTriangle,
  Construction,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const pageConfig: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
}> = {
  "/dashboard/forecasts": {
    title: "Demand Forecasts",
    description: "AI-powered SKU-level demand predictions and accuracy tracking",
    icon: BarChart3,
    color: "primary",
    features: [
      "12-week rolling forecasts for all SKUs",
      "Confidence intervals and accuracy metrics", 
      "Seasonal pattern recognition",
      "What-if scenario modeling",
      "Export forecast data"
    ]
  },
  "/dashboard/inventory": {
    title: "Inventory Management",
    description: "Real-time stock levels and inventory optimization",
    icon: Package,
    color: "accent",
    features: [
      "Current stock levels across all locations",
      "Days of stock calculations",
      "Low stock and overstock alerts",
      "Inventory value tracking",
      "Stock movement history"
    ]
  },
  "/dashboard/purchase-orders": {
    title: "Purchase Orders",
    description: "Automated PO generation and approval workflows",
    icon: ShoppingCart,
    color: "success",
    features: [
      "AI-generated purchase order suggestions",
      "Multi-step approval workflows",
      "Slack integration for approvals",
      "Supplier management and performance",
      "Cost optimization recommendations"
    ]
  },
  "/dashboard/analytics": {
    title: "Analytics & Insights",
    description: "Business intelligence and performance metrics",
    icon: TrendingUp,
    color: "warning",
    features: [
      "Revenue and margin analysis",
      "Forecast accuracy trends",
      "Inventory turnover metrics",
      "Supplier performance analytics",
      "Custom dashboard creation"
    ]
  },
  "/dashboard/reports": {
    title: "Reports & Exports",
    description: "Comprehensive reporting and data export capabilities",
    icon: FileText,
    color: "secondary",
    features: [
      "Automated report generation",
      "Custom report builder",
      "Scheduled report delivery",
      "Data export in multiple formats",
      "Historical data analysis"
    ]
  },
  "/dashboard/alerts": {
    title: "Alerts & Notifications",
    description: "Proactive monitoring and alert management",
    icon: AlertTriangle,
    color: "destructive",
    features: [
      "Real-time stockout alerts",
      "Forecast accuracy warnings",
      "Supplier delay notifications",
      "Custom threshold configuration",
      "Alert acknowledgment tracking"
    ]
  }
};

export function DashboardSubPage() {
  const location = useLocation();
  const config = pageConfig[location.pathname];

  if (!config) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <Card className="max-w-md w-full text-center">
            <CardContent className="p-8">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The requested dashboard page could not be found.
              </p>
              <Link to="/dashboard">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  const IconComponent = config.icon;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 bg-${config.color}/10 rounded-lg flex items-center justify-center`}>
            <IconComponent className={`h-6 w-6 text-${config.color}`} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{config.title}</h1>
            <p className="text-muted-foreground">{config.description}</p>
          </div>
        </div>

        {/* Coming Soon Card */}
        <Card className="border-2 border-dashed border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">Coming Soon</CardTitle>
            <CardDescription className="text-lg">
              This section is currently under development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Planned Features:</h3>
              <div className="space-y-2">
                {config.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/dashboard" className="flex-1">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <Button className="flex-1" disabled>
                Request Early Access
              </Button>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mt-4">
              <div className="flex items-center space-x-2 mb-2">
                <Badge variant="secondary">Development Status</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                We're actively working on this feature. Want to be notified when it's ready? 
                Contact our team for early access updates.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium mb-1">View Current Data</h3>
              <p className="text-sm text-muted-foreground">
                Access available data from the main dashboard
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <FileText className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-medium mb-1">Documentation</h3>
              <p className="text-sm text-muted-foreground">
                Learn about upcoming features and capabilities
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
              <h3 className="font-medium mb-1">Request Demo</h3>
              <p className="text-sm text-muted-foreground">
                See a preview of planned functionality
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
