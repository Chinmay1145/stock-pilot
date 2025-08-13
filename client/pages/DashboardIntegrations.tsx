import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Separator } from "@/components/ui/separator";
import { 
  Plug, 
  CheckCircle,
  XCircle,
  Plus,
  Settings,
  RefreshCw,
  ExternalLink,
  Key,
  Webhook,
  Database,
  MessageSquare,
  Mail,
  Cloud
} from "lucide-react";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: 'communication' | 'erp' | 'ecommerce' | 'analytics' | 'api';
  status: 'connected' | 'disconnected' | 'error';
  icon: React.ElementType;
  color: string;
  features: string[];
  lastSync?: string;
  config?: any;
}

const availableIntegrations: Integration[] = [
  {
    id: 'slack',
    name: 'Slack',
    description: 'Send notifications and alerts to Slack channels',
    category: 'communication',
    status: 'connected',
    icon: MessageSquare,
    color: 'text-purple-600',
    features: ['Purchase order approvals', 'Stock alerts', 'Daily reports'],
    lastSync: '2024-01-15T14:30:00Z',
    config: {
      webhook: 'https://hooks.slack.com/services/***',
      channel: '#inventory-alerts'
    }
  },
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Sync inventory levels and sales data with Shopify',
    category: 'ecommerce',
    status: 'connected',
    icon: Database,
    color: 'text-green-600',
    features: ['Real-time inventory sync', 'Sales data import', 'Product management'],
    lastSync: '2024-01-15T14:25:00Z',
    config: {
      apiKey: '***************',
      store: 'your-store.myshopify.com'
    }
  },
  {
    id: 'email',
    name: 'Email SMTP',
    description: 'Send email notifications and reports',
    category: 'communication',
    status: 'connected',
    icon: Mail,
    color: 'text-blue-600',
    features: ['Alert notifications', 'Scheduled reports', 'User invitations'],
    lastSync: '2024-01-15T14:20:00Z',
    config: {
      smtp: 'smtp.gmail.com',
      port: 587
    }
  },
  {
    id: 'sap',
    name: 'SAP ERP',
    description: 'Connect with SAP for enterprise resource planning',
    category: 'erp',
    status: 'disconnected',
    icon: Database,
    color: 'text-orange-600',
    features: ['Financial integration', 'Purchase orders', 'Supplier management']
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    description: 'Sync financial data and accounting records',
    category: 'erp',
    status: 'error',
    icon: Database,
    color: 'text-blue-500',
    features: ['Invoice sync', 'Expense tracking', 'Financial reporting'],
    lastSync: '2024-01-14T10:15:00Z'
  },
  {
    id: 'webhook',
    name: 'Custom Webhooks',
    description: 'Send data to custom endpoints via webhooks',
    category: 'api',
    status: 'connected',
    icon: Webhook,
    color: 'text-gray-600',
    features: ['Custom notifications', 'Data export', 'Third-party integrations'],
    lastSync: '2024-01-15T14:00:00Z',
    config: {
      endpoints: 2,
      events: ['stock_low', 'forecast_updated']
    }
  }
];

export default function DashboardIntegrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    loadIntegrationsData();
  }, []);

  const loadIntegrationsData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setIntegrations(availableIntegrations);
    } catch (error) {
      console.error('Failed to load integrations data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIntegrations(availableIntegrations);
    } catch (error) {
      console.error('Failed to refresh data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const toggleIntegration = (integrationId: string) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { 
            ...integration, 
            status: integration.status === 'connected' ? 'disconnected' : 'connected',
            lastSync: integration.status === 'disconnected' ? new Date().toISOString() : integration.lastSync
          }
        : integration
    ));
  };

  const filteredIntegrations = integrations.filter(integration => 
    selectedCategory === 'all' || integration.category === selectedCategory
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected': return <Badge variant="success">Connected</Badge>;
      case 'disconnected': return <Badge variant="secondary">Disconnected</Badge>;
      case 'error': return <Badge variant="destructive">Error</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'disconnected': return <XCircle className="h-5 w-5 text-gray-400" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-500" />;
      default: return null;
    }
  };

  const formatLastSync = (dateString?: string) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const connectedCount = integrations.filter(i => i.status === 'connected').length;
  const errorCount = integrations.filter(i => i.status === 'error').length;
  const categories = Array.from(new Set(integrations.map(i => i.category)));

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading integrations..." />
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
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Plug className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
              <p className="text-muted-foreground">
                Connect StockPilot with your favorite tools and services
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Integration
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Integrations</p>
                  <p className="text-2xl font-bold">{integrations.length}</p>
                </div>
                <Plug className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Connected</p>
                  <p className="text-2xl font-bold">{connectedCount}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Errors</p>
                  <p className="text-2xl font-bold">{errorCount}</p>
                </div>
                <XCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-2xl font-bold">{categories.length}</p>
                </div>
                <Cloud className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            <TabsTrigger value="erp">ERP</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Integrations</CardTitle>
                <CardDescription>
                  Connect StockPilot with external services and applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredIntegrations.map((integration) => {
                    const IconComponent = integration.icon;
                    return (
                      <div
                        key={integration.id}
                        className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100`}>
                          <IconComponent className={`h-6 w-6 ${integration.color}`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{integration.name}</h3>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(integration.status)}
                              {getStatusBadge(integration.status)}
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {integration.description}
                          </p>
                          
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Features:</p>
                              <div className="flex flex-wrap gap-1">
                                {integration.features.map((feature, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            {integration.lastSync && (
                              <p className="text-xs text-muted-foreground">
                                Last sync: {formatLastSync(integration.lastSync)}
                              </p>
                            )}
                            
                            <div className="flex items-center space-x-2">
                              {integration.status === 'connected' ? (
                                <>
                                  <Button size="sm" variant="outline">
                                    <Settings className="h-4 w-4 mr-1" />
                                    Configure
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => toggleIntegration(integration.id)}
                                  >
                                    Disconnect
                                  </Button>
                                </>
                              ) : (
                                <Button 
                                  size="sm"
                                  onClick={() => toggleIntegration(integration.id)}
                                >
                                  <Plus className="h-4 w-4 mr-1" />
                                  Connect
                                </Button>
                              )}
                              {integration.status === 'error' && (
                                <Button size="sm" variant="outline">
                                  <RefreshCw className="h-4 w-4 mr-1" />
                                  Retry
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">{category} Integrations</CardTitle>
                  <CardDescription>
                    {category === 'communication' && 'Messaging and notification services'}
                    {category === 'ecommerce' && 'E-commerce platforms and marketplaces'}
                    {category === 'erp' && 'Enterprise resource planning systems'}
                    {category === 'analytics' && 'Business intelligence and analytics tools'}
                    {category === 'api' && 'Custom APIs and webhook integrations'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {integrations
                      .filter(integration => integration.category === category)
                      .map((integration) => {
                        const IconComponent = integration.icon;
                        return (
                          <div
                            key={integration.id}
                            className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100`}>
                              <IconComponent className={`h-6 w-6 ${integration.color}`} />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{integration.name}</h3>
                                <div className="flex items-center space-x-2">
                                  {getStatusIcon(integration.status)}
                                  {getStatusBadge(integration.status)}
                                </div>
                              </div>
                              
                              <p className="text-sm text-muted-foreground mb-3">
                                {integration.description}
                              </p>
                              
                              <div className="space-y-3">
                                <div>
                                  <p className="text-xs text-muted-foreground mb-1">Features:</p>
                                  <div className="flex flex-wrap gap-1">
                                    {integration.features.map((feature, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                {integration.lastSync && (
                                  <p className="text-xs text-muted-foreground">
                                    Last sync: {formatLastSync(integration.lastSync)}
                                  </p>
                                )}
                                
                                <div className="flex items-center space-x-2">
                                  {integration.status === 'connected' ? (
                                    <>
                                      <Button size="sm" variant="outline">
                                        <Settings className="h-4 w-4 mr-1" />
                                        Configure
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        onClick={() => toggleIntegration(integration.id)}
                                      >
                                        Disconnect
                                      </Button>
                                    </>
                                  ) : (
                                    <Button 
                                      size="sm"
                                      onClick={() => toggleIntegration(integration.id)}
                                    >
                                      <Plus className="h-4 w-4 mr-1" />
                                      Connect
                                    </Button>
                                  )}
                                  {integration.status === 'error' && (
                                    <Button size="sm" variant="outline">
                                      <RefreshCw className="h-4 w-4 mr-1" />
                                      Retry
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Setup */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Setup</CardTitle>
            <CardDescription>
              Get started with popular integrations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <MessageSquare className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Slack Notifications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant alerts in your Slack channels
                </p>
                <Button size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Setup Guide
                </Button>
              </div>

              <div className="text-center p-4">
                <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-commerce Sync</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect your online store for real-time inventory sync
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Options
                </Button>
              </div>

              <div className="text-center p-4">
                <Webhook className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Custom API</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Build custom integrations with our API
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Key className="h-4 w-4 mr-2" />
                  API Docs
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
