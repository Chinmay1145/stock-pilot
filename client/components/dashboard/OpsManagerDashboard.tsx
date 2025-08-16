import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MetricCard, 
  AlertsWidget, 
  InventoryStatusWidget,
  RecentActivityWidget 
} from "@/components/dashboard/DashboardWidgets";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import { 
  Package, 
  Truck, 
  Clock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Settings,
  Target
} from "lucide-react";

export function OpsManagerDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setStats(dashboardData.getStats());
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading || !stats) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const alerts = dashboardData.getAlerts();
  const inventory = dashboardData.getInventoryData();
  const recentActivities = [
    {
      id: '1',
      type: 'po_approved' as const,
      title: 'PO Approval Required',
      description: 'PO-2024-156 ($25K) awaiting your approval',
      timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
      user: 'AI System'
    },
    {
      id: '2',
      type: 'stock_updated' as const,
      title: 'Stock Shipment Received',
      description: 'Wireless Headphones Pro - 500 units added to inventory',
      timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      user: 'Warehouse Team'
    },
    {
      id: '3',
      type: 'alert_created' as const,
      title: 'Supplier Delay Alert',
      description: 'Fashion Direct shipment delayed by 2 days',
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      user: 'System'
    }
  ];

  const urgentActions = [
    {
      id: '1',
      title: 'Approve 3 Purchase Orders',
      description: 'Total value: $47,500',
      priority: 'high',
      icon: ShoppingCart,
      action: 'Review POs'
    },
    {
      id: '2',
      title: 'Address Low Stock Items',
      description: '5 SKUs below threshold',
      priority: 'medium',
      icon: Package,
      action: 'View Items'
    },
    {
      id: '3',
      title: 'Review Supplier Performance',
      description: '2 suppliers with delays',
      priority: 'medium',
      icon: Truck,
      action: 'Check Suppliers'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Operations Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <Settings className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Operations Dashboard</h2>
          <p className="text-muted-foreground">Monitor daily operations and inventory flow</p>
        </div>
      </div>

      {/* Operational KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Orders to Process"
          value="24"
          change={-12.5}
          changeLabel="vs yesterday"
          icon={ShoppingCart}
          trend="down"
          description="Pending purchase orders"
        />
        <MetricCard
          title="Stockouts Prevented"
          value={stats.stockoutsPrevented.toString()}
          change={18.7}
          changeLabel="vs last week"
          icon={Target}
          trend="up"
          description="AI-driven prevention"
        />
        <MetricCard
          title="Forecast Accuracy"
          value={`${stats.averageForecastAccuracy.toFixed(1)}%`}
          change={2.3}
          changeLabel="vs last week"
          icon={BarChart3}
          trend="up"
          description="Prediction reliability"
        />
        <MetricCard
          title="Active SKUs"
          value={stats.totalSKUs.toString()}
          icon={Package}
          description="In inventory system"
        />
      </div>

      {/* Urgent Actions */}
      <Card className="border-warning/50 bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Action Items</span>
            <Badge variant="warning">{urgentActions.length}</Badge>
          </CardTitle>
          <CardDescription>Items requiring your immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {urgentActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <div
                  key={action.id}
                  className="flex items-center justify-between p-3 bg-card rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      action.priority === 'high' ? 'bg-destructive/10' : 'bg-warning/10'
                    }`}>
                      <IconComponent className={`h-4 w-4 ${
                        action.priority === 'high' ? 'text-destructive' : 'text-warning'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{action.title}</h4>
                      <p className="text-xs text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    {action.action}
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Operational Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Today's Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">POs Processed</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">8/12</span>
                <Progress value={67} className="w-20 h-2" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Stock Updates</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">15/18</span>
                <Progress value={83} className="w-20 h-2" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Alerts Resolved</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">12/15</span>
                <Progress value={80} className="w-20 h-2" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Shipments Tracked</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">6/6</span>
                <Progress value={100} className="w-20 h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="h-5 w-5" />
              <span>Supplier Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">TechSupply Co.</span>
              <Badge variant="success">On Time</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fashion Direct</span>
              <Badge variant="warning">Delayed</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">AudioTech Ltd.</span>
              <Badge variant="success">On Time</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Kitchen Pro</span>
              <Badge variant="secondary">In Transit</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Denim Factory</span>
              <Badge variant="destructive">Critical Delay</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Efficiency Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Order Cycle Time</span>
              <span className="text-sm font-medium">3.2 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Stock Accuracy</span>
              <span className="text-sm font-medium">98.7%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fill Rate</span>
              <span className="text-sm font-medium">96.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Lead Time Variance</span>
              <span className="text-sm font-medium">±2.1 days</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Operations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsWidget alerts={alerts} />
        <InventoryStatusWidget inventory={inventory} />
      </div>

      {/* Recent Activity */}
      <RecentActivityWidget activities={recentActivities} />

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Operations</CardTitle>
          <CardDescription>Common tasks and workflows</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-sm">Create PO</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Update Stock</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Truck className="h-6 w-6" />
              <span className="text-sm">Track Shipment</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
