import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Settings, 
  Bell, 
  FileText, 
  Users, 
  Menu, 
  X,
  Home,
  AlertTriangle,
  DollarSign,
  Slack,
  LogOut,
  Search
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: Home, current: location.pathname === "/dashboard" },
    { name: "Forecasts", href: "/dashboard/forecasts", icon: BarChart3, current: location.pathname === "/dashboard/forecasts" },
    { name: "Inventory", href: "/dashboard/inventory", icon: Package, current: location.pathname === "/dashboard/inventory" },
    { name: "Purchase Orders", href: "/dashboard/purchase-orders", icon: ShoppingCart, current: location.pathname === "/dashboard/purchase-orders" },
    { name: "Analytics", href: "/dashboard/analytics", icon: TrendingUp, current: location.pathname === "/dashboard/analytics" },
    { name: "Reports", href: "/dashboard/reports", icon: FileText, current: location.pathname === "/dashboard/reports" },
    { name: "Alerts", href: "/dashboard/alerts", icon: AlertTriangle, current: location.pathname === "/dashboard/alerts", badge: "3" },
  ];

  const secondaryNavigation = [
    { name: "Team", href: "/dashboard/team", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Integrations", href: "/dashboard/integrations", icon: Slack },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-background border-r border-border">
            <SidebarContent 
              navigation={navigation} 
              secondaryNavigation={secondaryNavigation}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <SidebarContent navigation={navigation} secondaryNavigation={secondaryNavigation} />
      </div>

      {/* Main content */}
      <div className="lg:ml-64 flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="relative max-w-xs w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>
                <ThemeToggle />
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:block text-right">
                    <p className="text-sm font-medium text-foreground">John Doe</p>
                    <p className="text-xs text-muted-foreground">TechStyle Fashion</p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    JD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarContent({ 
  navigation, 
  secondaryNavigation, 
  onClose 
}: { 
  navigation: any[]; 
  secondaryNavigation: any[]; 
  onClose?: () => void;
}) {
  return (
    <div className="flex flex-col h-full bg-background border-r border-border">
      {/* Logo */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">StockPilot</span>
        </Link>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.current
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </div>
            {item.badge && (
              <Badge variant="secondary" className="h-5 px-2 text-xs">
                {item.badge}
              </Badge>
            )}
          </Link>
        ))}
      </nav>

      {/* Secondary navigation */}
      <div className="p-4 border-t border-border space-y-2">
        {secondaryNavigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        ))}
        
        <Link
          to="/"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Back to Website</span>
        </Link>
      </div>

      {/* Upgrade prompt */}
      <div className="p-4 border-t border-border">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Upgrade Plan</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unlock advanced analytics and unlimited SKUs
            </p>
            <Button size="sm" className="w-full">
              Upgrade Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
