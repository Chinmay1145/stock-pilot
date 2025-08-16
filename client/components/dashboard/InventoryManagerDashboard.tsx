import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MetricCard, 
  AlertsWidget, 
  InventoryStatusWidget,
  ForecastAccuracyWidget 
} from "@/components/dashboard/DashboardWidgets";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import { 
  Package, 
  AlertTriangle, 
  TrendingUp,
  BarChart3,
  Target,
  Clock,
  CheckCircle,
  Warehouse,
  Truck,
  RefreshCw
} from "lucide-react";

export function InventoryManagerDashboard() {
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
  
  const forecastAccuracy = [
    { sku: 'TECH-001', productName: 'Wireless Headphones Pro', accuracy: 94.2, trend: 'up' as const },
    { sku: 'FASH-002', productName: 'Premium Cotton T-Shirt', accuracy: 91.8, trend: 'stable' as const },
    { sku: 'HOME-003', productName: 'Smart LED Bulb', accuracy: 89.5, trend: 'down' as const },
    { sku: 'TECH-004', productName: 'Bluetooth Speaker', accuracy: 96.1, trend: 'up' as const },
  ];

  const stockMovements = [
    {
      id: '1',
      sku: 'TECH-001',
      product: 'Wireless Headphones Pro',
      type: 'in',
      quantity: 500,
      timestamp: '2024-01-15T10:30:00Z',
      source: 'Purchase Order'
    },
    {
      id: '2',
      sku: 'FASH-002',
      product: 'Premium Cotton T-Shirt',
      type: 'out',
      quantity: 150,
      timestamp: '2024-01-15T09:15:00Z',
      source: 'Sales Order'
    },
    {
      id: '3',
      sku: 'HOME-003',
      product: 'Smart LED Bulb',
      type: 'adjustment',
      quantity: -5,
      timestamp: '2024-01-15T08:45:00Z',
      source: 'Cycle Count'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Inventory Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Package className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Inventory Management</h2>
          <p className="text-muted-foreground">Monitor stock levels and optimize inventory flow</p>
        </div>
      </div>

      {/* Inventory KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total SKUs"
          value={stats.totalSKUs.toString()}
          icon={Package}
          description="Active products"
        />
        <MetricCard
          title="Low Stock Items"
          value={stats.lowStockSKUs.toString()}
          change={-15.3}
          changeLabel="vs last week"
          icon={AlertTriangle}
          trend="down"
          description="Items needing reorder"
        />
        <MetricCard
          title="Out of Stock"
          value={stats.outOfStockSKUs.toString()}
          change={-25.0}
          changeLabel="vs last week"
          icon={AlertTriangle}
          trend="down"
          description="Stockout prevention"
        />
        <MetricCard
          title="Forecast Accuracy"
          value={`${stats.averageForecastAccuracy.toFixed(1)}%`}
          change={2.3}
          changeLabel="vs last week"
          icon={Target}
          trend="up"
          description="Prediction reliability"
        />
      </div>

      {/* Critical Actions */}
      <Card className="border-warning/50 bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Critical Inventory Actions</span>
          </CardTitle>
          <CardDescription>Items requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
              <h4 className="font-semibold text-destructive mb-2">Stockouts</h4>
              <p className="text-2xl font-bold text-destructive">{stats.outOfStockSKUs}</p>
              <p className="text-sm text-muted-foreground">Items out of stock</p>
              <Button size="sm" className="mt-2 w-full" variant="destructive">
                View Items
              </Button>
            </div>
            
            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <h4 className="font-semibold text-warning mb-2">Low Stock</h4>
              <p className="text-2xl font-bold text-warning">{stats.lowStockSKUs}</p>
              <p className="text-sm text-muted-foreground">Items below threshold</p>
              <Button size="sm" className="mt-2 w-full" variant="outline">
                Create POs
              </Button>
            </div>
            
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <h4 className="font-semibold text-success mb-2">Overstock</h4>
              <p className="text-2xl font-bold text-success">8</p>
              <p className="text-sm text-muted-foreground">Items above max</p>
              <Button size="sm" className="mt-2 w-full" variant="outline">
                Review Items
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Warehouse className="h-5 w-5" />
              <span>Stock Health</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Healthy Stock</span>
                <span className="font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Low Stock</span>
                <span className="font-medium">12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Out of Stock</span>
                <span className="font-medium">3%</span>
              </div>
              <Progress value={3} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Reorder Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Electronics</span>
              <Badge variant="success">Optimized</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fashion</span>
              <Badge variant="warning">Review Needed</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Home</span>
              <Badge variant="success">Optimized</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Sports</span>
              <Badge variant="secondary">Not Set</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Turnover Rates</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Electronics</span>
              <span className="text-sm font-medium">12.4x/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fashion</span>
              <span className="text-sm font-medium">8.7x/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Home</span>
              <span className="text-sm font-medium">6.2x/year</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Average</span>
              <span className="text-sm font-medium">9.1x/year</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Stock Movements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <RefreshCw className="h-5 w-5" />
            <span>Recent Stock Movements</span>
          </CardTitle>
          <CardDescription>Latest inventory transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {stockMovements.map((movement) => (
              <div
                key={movement.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    movement.type === 'in' 
                      ? 'bg-success/10 text-success' 
                      : movement.type === 'out'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {movement.type === 'in' ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : movement.type === 'out' ? (
                      <Truck className="h-4 w-4" />
                    ) : (
                      <RefreshCw className="h-4 w-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{movement.product}</h4>
                    <p className="text-xs text-muted-foreground">{movement.sku} • {movement.source}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    movement.type === 'in' 
                      ? 'text-success' 
                      : movement.type === 'out'
                      ? 'text-primary'
                      : 'text-warning'
                  }`}>
                    {movement.type === 'in' ? '+' : movement.type === 'out' ? '-' : ''}
                    {Math.abs(movement.quantity)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(movement.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryStatusWidget inventory={inventory} />
        <ForecastAccuracyWidget accuracyData={forecastAccuracy} />
      </div>

      {/* Alerts */}
      <AlertsWidget alerts={alerts.filter(alert => 
        alert.type === 'low_stock' || alert.type === 'out_of_stock' || alert.type === 'overstock'
      )} />

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Actions</CardTitle>
          <CardDescription>Common inventory management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Package className="h-6 w-6" />
              <span className="text-sm">Add Stock</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <RefreshCw className="h-6 w-6" />
              <span className="text-sm">Cycle Count</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">ABC Analysis</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Target className="h-6 w-6" />
              <span className="text-sm">Reorder Points</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
