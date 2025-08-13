import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Package, 
  DollarSign, 
  ShoppingCart,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  ExternalLink
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ElementType;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  changeLabel, 
  icon: Icon, 
  trend = 'neutral',
  description 
}: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return <ArrowUpRight className="h-3 w-3" />;
      case 'down': return <ArrowDownRight className="h-3 w-3" />;
      default: return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(change !== undefined || changeLabel) && (
          <div className={`flex items-center text-xs ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="ml-1">
              {change !== undefined && `${change > 0 ? '+' : ''}${change}%`}
              {changeLabel && ` ${changeLabel}`}
            </span>
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}

interface AlertsWidgetProps {
  alerts: Array<{
    id: string;
    type: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    title: string;
    description: string;
    createdAt: string;
    acknowledged: boolean;
  }>;
}

export function AlertsWidget({ alerts }: AlertsWidgetProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const unacknowledgedAlerts = alerts.filter(alert => !alert.acknowledged);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Recent Alerts</CardTitle>
          <CardDescription>
            {unacknowledgedAlerts.length} unacknowledged alerts
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.slice(0, 5).map((alert) => (
            <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border">
              <AlertTriangle className={`h-4 w-4 mt-0.5 ${
                alert.severity === 'critical' ? 'text-destructive' : 
                alert.severity === 'high' ? 'text-destructive' :
                alert.severity === 'medium' ? 'text-warning' : 'text-muted-foreground'
              }`} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground truncate">
                    {alert.title}
                  </p>
                  <Badge variant={getSeverityColor(alert.severity)} className="ml-2">
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {alert.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(alert.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface InventoryStatusWidgetProps {
  inventory: Array<{
    sku: string;
    productName: string;
    currentStock: number;
    daysOfStock: number;
    status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstock';
    category: string;
  }>;
}

export function InventoryStatusWidget({ inventory }: InventoryStatusWidgetProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'out_of_stock': return 'destructive';
      case 'low_stock': return 'warning';
      case 'overstock': return 'secondary';
      case 'in_stock': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'out_of_stock': return 'Out of Stock';
      case 'low_stock': return 'Low Stock';
      case 'overstock': return 'Overstock';
      case 'in_stock': return 'In Stock';
      default: return status;
    }
  };

  const criticalItems = inventory.filter(item => 
    item.status === 'out_of_stock' || item.status === 'low_stock'
  ).slice(0, 8);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Inventory Status</CardTitle>
          <CardDescription>
            {criticalItems.length} items need attention
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Package className="h-4 w-4 mr-2" />
          View Inventory
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {criticalItems.map((item) => (
            <div key={item.sku} className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.productName}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {item.sku}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 mt-1">
                  <p className="text-xs text-muted-foreground">
                    Stock: {item.currentStock}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.daysOfStock} days left
                  </p>
                </div>
              </div>
              <Badge variant={getStatusColor(item.status)}>
                {getStatusLabel(item.status)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface RecentActivityWidgetProps {
  activities: Array<{
    id: string;
    type: 'forecast_updated' | 'po_approved' | 'stock_updated' | 'alert_created';
    title: string;
    description: string;
    timestamp: string;
    user?: string;
  }>;
}

export function RecentActivityWidget({ activities }: RecentActivityWidgetProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'forecast_updated': return TrendingUp;
      case 'po_approved': return CheckCircle;
      case 'stock_updated': return Package;
      case 'alert_created': return AlertTriangle;
      default: return Clock;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'forecast_updated': return 'text-primary';
      case 'po_approved': return 'text-success';
      case 'stock_updated': return 'text-accent';
      case 'alert_created': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
          <CardDescription>
            Latest updates and changes
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.slice(0, 6).map((activity) => {
            const Icon = getActivityIcon(activity.type);
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <Icon className={`h-4 w-4 mt-0.5 ${getActivityColor(activity.type)}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">
                      {new Date(activity.timestamp).toLocaleTimeString()}
                    </p>
                    {activity.user && (
                      <p className="text-xs text-muted-foreground">
                        by {activity.user}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

interface ForecastAccuracyWidgetProps {
  accuracyData: Array<{
    sku: string;
    productName: string;
    accuracy: number;
    trend: 'up' | 'down' | 'stable';
  }>;
}

export function ForecastAccuracyWidget({ accuracyData }: ForecastAccuracyWidgetProps) {
  const averageAccuracy = accuracyData.reduce((sum, item) => sum + item.accuracy, 0) / accuracyData.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Forecast Accuracy</CardTitle>
        <CardDescription>
          Average accuracy: {averageAccuracy.toFixed(1)}%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Overall Accuracy</span>
              <span className="font-medium">{averageAccuracy.toFixed(1)}%</span>
            </div>
            <Progress value={averageAccuracy} className="h-2" />
          </div>
          
          <div className="space-y-3">
            {accuracyData.slice(0, 5).map((item) => (
              <div key={item.sku} className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.productName}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.sku}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">{item.accuracy.toFixed(1)}%</span>
                  {item.trend === 'up' && <TrendingUp className="h-3 w-3 text-success" />}
                  {item.trend === 'down' && <TrendingDown className="h-3 w-3 text-destructive" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
