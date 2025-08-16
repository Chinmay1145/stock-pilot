import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  MetricCard,
  AlertsWidget,
  InventoryStatusWidget,
  RecentActivityWidget,
  ForecastAccuracyWidget,
} from "@/components/dashboard/DashboardWidgets";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { OnboardingProgress } from "@/components/OnboardingProgress";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import {
  DollarSign,
  Package,
  TrendingUp,
  AlertTriangle,
  ShoppingCart,
  Target,
  Banknote,
  BarChart3,
  RefreshCw,
  Calendar,
  Download,
} from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Mock data
  const [inventory] = useState(() => dashboardData.getInventoryData());
  const [alerts] = useState(() => dashboardData.getAlerts());
  const [purchaseOrders] = useState(() => dashboardData.getPurchaseOrders());

  // Generate mock activities
  const recentActivities = [
    {
      id: "1",
      type: "forecast_updated" as const,
      title: "Forecast Updated",
      description: "TECH-001 forecast updated with 94% confidence",
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
      user: "AI System",
    },
    {
      id: "2",
      type: "po_approved" as const,
      title: "Purchase Order Approved",
      description: "PO-156 for Wireless Headphones approved",
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      user: "John Doe",
    },
    {
      id: "3",
      type: "alert_created" as const,
      title: "Low Stock Alert",
      description: "Premium Cotton T-Shirt below threshold",
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      user: "System",
    },
    {
      id: "4",
      type: "stock_updated" as const,
      title: "Stock Updated",
      description: "Bluetooth Speaker stock increased by 200 units",
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
      user: "Sarah Smith",
    },
  ];

  // Generate mock forecast accuracy data
  const forecastAccuracy = [
    {
      sku: "TECH-001",
      productName: "Wireless Headphones Pro",
      accuracy: 94.2,
      trend: "up" as const,
    },
    {
      sku: "FASH-002",
      productName: "Premium Cotton T-Shirt",
      accuracy: 91.8,
      trend: "stable" as const,
    },
    {
      sku: "HOME-003",
      productName: "Smart LED Bulb",
      accuracy: 89.5,
      trend: "down" as const,
    },
    {
      sku: "TECH-004",
      productName: "Bluetooth Speaker",
      accuracy: 96.1,
      trend: "up" as const,
    },
    {
      sku: "FASH-005",
      productName: "Denim Jeans Classic",
      accuracy: 87.3,
      trend: "down" as const,
    },
  ];

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const dashboardStats = dashboardData.getStats();
      setStats(dashboardStats);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await dashboardData.refreshData();
      const dashboardStats = dashboardData.getStats();
      setStats(dashboardStats);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  if (loading || !stats) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading dashboard..." />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's your inventory overview.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={refreshing}
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total Revenue"
            value={`$${(stats.totalRevenue / 1000000).toFixed(1)}M`}
            change={12.5}
            changeLabel="vs last month"
            icon={DollarSign}
            trend="up"
            description="Gross revenue this month"
          />
          <MetricCard
            title="Gross Margin"
            value={`${stats.grossMargin.toFixed(1)}%`}
            change={2.1}
            changeLabel="vs last month"
            icon={Target}
            trend="up"
            description="Profit margin after costs"
          />
          <MetricCard
            title="Forecast Accuracy"
            value={`${stats.averageForecastAccuracy.toFixed(1)}%`}
            change={-1.2}
            changeLabel="vs last month"
            icon={BarChart3}
            trend="down"
            description="Average prediction accuracy"
          />
          <MetricCard
            title="Working Capital Saved"
            value={`$${(stats.workingCapitalSaved / 1000).toFixed(0)}K`}
            change={8.3}
            changeLabel="vs last month"
            icon={Banknote}
            trend="up"
            description="Cash flow optimization"
          />
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Total SKUs"
            value={stats.totalSKUs.toLocaleString()}
            icon={Package}
            description="Active product variants"
          />
          <MetricCard
            title="Out of Stock"
            value={stats.outOfStockSKUs}
            icon={AlertTriangle}
            trend={stats.outOfStockSKUs > 20 ? "down" : "neutral"}
            description="Items needing restock"
          />
          <MetricCard
            title="Pending POs"
            value={stats.pendingApprovals}
            icon={ShoppingCart}
            description="Awaiting approval"
          />
          <MetricCard
            title="Stockouts Prevented"
            value={stats.stockoutsPrevented}
            change={15.2}
            changeLabel="vs last month"
            icon={TrendingUp}
            trend="up"
            description="AI prevented stockouts"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Alerts and Inventory */}
          <div className="lg:col-span-2 space-y-6">
            <AlertsWidget alerts={alerts} />
            <InventoryStatusWidget inventory={inventory} />
          </div>

          {/* Right Column - Activity and Accuracy */}
          <div className="space-y-6">
            <RecentActivityWidget activities={recentActivities} />
            <ForecastAccuracyWidget accuracyData={forecastAccuracy} />
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <BarChart3 className="h-6 w-6" />
                <span className="text-sm">View Forecasts</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="text-sm">Create PO</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <Package className="h-6 w-6" />
                <span className="text-sm">Update Stock</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <Download className="h-6 w-6" />
                <span className="text-sm">Export Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Revenue</span>
                <span className="text-sm font-medium">$2.48M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Orders</span>
                <span className="text-sm font-medium">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Avg Order Value
                </span>
                <span className="text-sm font-medium">$1,990</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inventory Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">In Stock</span>
                <Badge variant="success">
                  {stats.totalSKUs - stats.outOfStockSKUs - stats.lowStockSKUs}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Low Stock</span>
                <Badge variant="warning">{stats.lowStockSKUs}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Out of Stock
                </span>
                <Badge variant="destructive">{stats.outOfStockSKUs}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Accuracy</span>
                <span className="text-sm font-medium">
                  {stats.averageForecastAccuracy.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Predictions
                </span>
                <span className="text-sm font-medium">12,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Stockouts Prevented
                </span>
                <span className="text-sm font-medium">
                  {stats.stockoutsPrevented}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
