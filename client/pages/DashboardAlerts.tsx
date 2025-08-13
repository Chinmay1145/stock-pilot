import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Switch } from "@/components/ui/switch";
import { 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Bell,
  BellOff,
  Search,
  RefreshCw,
  Settings,
  Plus,
  Eye,
  X,
  Package,
  TrendingDown,
  Truck,
  DollarSign
} from "lucide-react";

interface Alert {
  id: string;
  title: string;
  description: string;
  type: 'stockout' | 'low_stock' | 'overstock' | 'forecast_accuracy' | 'supplier_delay' | 'cost_increase';
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'acknowledged' | 'resolved';
  createdAt: string;
  acknowledgedAt?: string;
  acknowledgedBy?: string;
  sku?: string;
  supplier?: string;
  value?: number;
  threshold?: number;
}

interface AlertConfig {
  type: string;
  enabled: boolean;
  threshold: number;
  recipients: string[];
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    title: 'Critical Stock Level - Premium Cotton T-Shirt',
    description: 'Stock level dropped below critical threshold. Only 3 days of stock remaining.',
    type: 'stockout',
    severity: 'critical',
    status: 'active',
    createdAt: '2024-01-15T08:30:00Z',
    sku: 'FASH-002',
    value: 89,
    threshold: 100
  },
  {
    id: '2',
    title: 'Low Stock Alert - Kitchen Knife Set',
    description: 'Inventory level is below recommended threshold. Consider reordering.',
    type: 'low_stock',
    severity: 'medium',
    status: 'active',
    createdAt: '2024-01-15T07:15:00Z',
    sku: 'HOME-006',
    value: 67,
    threshold: 100
  },
  {
    id: '3',
    title: 'Forecast Accuracy Drop - Electronics',
    description: 'Prediction accuracy for Electronics category dropped below 85%.',
    type: 'forecast_accuracy',
    severity: 'high',
    status: 'acknowledged',
    createdAt: '2024-01-14T16:45:00Z',
    acknowledgedAt: '2024-01-14T17:30:00Z',
    acknowledgedBy: 'John Smith',
    value: 82.3,
    threshold: 85
  },
  {
    id: '4',
    title: 'Supplier Delay - Fashion Direct',
    description: 'Expected delivery delayed by 3 days. PO-2024-002 affected.',
    type: 'supplier_delay',
    severity: 'high',
    status: 'active',
    createdAt: '2024-01-14T14:20:00Z',
    supplier: 'Fashion Direct'
  },
  {
    id: '5',
    title: 'Overstock Warning - Smart LED Bulb',
    description: 'Inventory level significantly exceeds maximum threshold.',
    type: 'overstock',
    severity: 'low',
    status: 'resolved',
    createdAt: '2024-01-13T11:10:00Z',
    sku: 'HOME-003',
    value: 456,
    threshold: 400
  },
  {
    id: '6',
    title: 'Cost Increase Alert - TechSupply Co.',
    description: 'Unit cost increased by 15% for Wireless Headphones Pro.',
    type: 'cost_increase',
    severity: 'medium',
    status: 'acknowledged',
    createdAt: '2024-01-12T09:45:00Z',
    acknowledgedAt: '2024-01-12T10:15:00Z',
    acknowledgedBy: 'Sarah Johnson',
    supplier: 'TechSupply Co.',
    sku: 'TECH-001'
  }
];

const mockAlertConfigs: AlertConfig[] = [
  {
    type: 'stockout',
    enabled: true,
    threshold: 3,
    recipients: ['warehouse@company.com', 'ops@company.com']
  },
  {
    type: 'low_stock',
    enabled: true,
    threshold: 7,
    recipients: ['procurement@company.com']
  },
  {
    type: 'forecast_accuracy',
    enabled: true,
    threshold: 85,
    recipients: ['analytics@company.com']
  },
  {
    type: 'supplier_delay',
    enabled: true,
    threshold: 1,
    recipients: ['procurement@company.com', 'ops@company.com']
  }
];

export default function DashboardAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [alertConfigs, setAlertConfigs] = useState<AlertConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    loadAlertsData();
  }, []);

  const loadAlertsData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setAlerts(mockAlerts);
      setAlertConfigs(mockAlertConfigs);
    } catch (error) {
      console.error('Failed to load alerts data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAlerts(mockAlerts);
    } catch (error) {
      console.error('Failed to refresh data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredAlerts = alerts
    .filter(alert => 
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (alert.sku && alert.sku.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(alert => selectedType === 'all' || alert.type === selectedType)
    .filter(alert => selectedSeverity === 'all' || alert.severity === selectedSeverity)
    .filter(alert => selectedStatus === 'all' || alert.status === selectedStatus)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical': return <Badge variant="destructive">Critical</Badge>;
      case 'high': return <Badge variant="warning">High</Badge>;
      case 'medium': return <Badge variant="secondary">Medium</Badge>;
      case 'low': return <Badge variant="outline">Low</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge variant="destructive">Active</Badge>;
      case 'acknowledged': return <Badge variant="warning">Acknowledged</Badge>;
      case 'resolved': return <Badge variant="success">Resolved</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'stockout':
      case 'low_stock': return <Package className="h-5 w-5 text-red-500" />;
      case 'overstock': return <Package className="h-5 w-5 text-yellow-500" />;
      case 'forecast_accuracy': return <TrendingDown className="h-5 w-5 text-orange-500" />;
      case 'supplier_delay': return <Truck className="h-5 w-5 text-blue-500" />;
      case 'cost_increase': return <DollarSign className="h-5 w-5 text-purple-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleAcknowledge = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { 
            ...alert, 
            status: 'acknowledged', 
            acknowledgedAt: new Date().toISOString(),
            acknowledgedBy: 'Current User'
          }
        : alert
    ));
  };

  const handleResolve = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { ...alert, status: 'resolved' }
        : alert
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const activeAlerts = alerts.filter(a => a.status === 'active').length;
  const criticalAlerts = alerts.filter(a => a.severity === 'critical' && a.status === 'active').length;
  const acknowledgedAlerts = alerts.filter(a => a.status === 'acknowledged').length;
  const resolvedToday = alerts.filter(a => 
    a.status === 'resolved' && 
    new Date(a.createdAt).toDateString() === new Date().toDateString()
  ).length;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading alerts..." />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alerts & Notifications</h1>
              <p className="text-muted-foreground">
                Proactive monitoring and alert management
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Alerts</p>
                  <p className="text-2xl font-bold">{activeAlerts}</p>
                </div>
                <Bell className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Require attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Critical</p>
                  <p className="text-2xl font-bold">{criticalAlerts}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                High priority alerts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Acknowledged</p>
                  <p className="text-2xl font-bold">{acknowledgedAlerts}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Awaiting resolution
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resolved Today</p>
                  <p className="text-2xl font-bold">{resolvedToday}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Completed today
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="alerts">Alert Management</TabsTrigger>
            <TabsTrigger value="settings">Alert Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search alerts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Alert Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="stockout">Stockout</SelectItem>
                      <SelectItem value="low_stock">Low Stock</SelectItem>
                      <SelectItem value="overstock">Overstock</SelectItem>
                      <SelectItem value="forecast_accuracy">Forecast Accuracy</SelectItem>
                      <SelectItem value="supplier_delay">Supplier Delay</SelectItem>
                      <SelectItem value="cost_increase">Cost Increase</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="acknowledged">Acknowledged</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Alerts List */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>
                  Showing {filteredAlerts.length} of {alerts.length} alerts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          {getTypeIcon(alert.type)}
                          <div>
                            <h3 className="font-semibold">{alert.title}</h3>
                            <p className="text-sm text-muted-foreground">{alert.description}</p>
                          </div>
                          {getSeverityBadge(alert.severity)}
                          {getStatusBadge(alert.status)}
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Created</p>
                            <p className="font-medium">{formatDate(alert.createdAt)}</p>
                          </div>
                          {alert.sku && (
                            <div>
                              <p className="text-muted-foreground">SKU</p>
                              <p className="font-medium">{alert.sku}</p>
                            </div>
                          )}
                          {alert.supplier && (
                            <div>
                              <p className="text-muted-foreground">Supplier</p>
                              <p className="font-medium">{alert.supplier}</p>
                            </div>
                          )}
                          {alert.value !== undefined && alert.threshold !== undefined && (
                            <div>
                              <p className="text-muted-foreground">Value/Threshold</p>
                              <p className="font-medium">{alert.value}/{alert.threshold}</p>
                            </div>
                          )}
                        </div>

                        {alert.acknowledgedBy && (
                          <div className="text-xs text-muted-foreground">
                            Acknowledged by {alert.acknowledgedBy} on {formatDate(alert.acknowledgedAt!)}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                        {alert.status === 'active' && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleAcknowledge(alert.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Acknowledge
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleResolve(alert.id)}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Resolve
                            </Button>
                          </>
                        )}
                        {alert.status === 'acknowledged' && (
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700"
                            onClick={() => handleResolve(alert.id)}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Resolve
                          </Button>
                        )}
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alert Configuration</CardTitle>
                <CardDescription>
                  Configure alert thresholds and notification settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {alertConfigs.map((config) => (
                    <div key={config.type} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <h3 className="font-semibold capitalize">{config.type.replace('_', ' ')}</h3>
                        <p className="text-sm text-muted-foreground">
                          Threshold: {config.threshold} | Recipients: {config.recipients.length}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Switch checked={config.enabled} />
                        <Button size="sm" variant="outline">
                          <Settings className="h-4 w-4 mr-1" />
                          Configure
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
