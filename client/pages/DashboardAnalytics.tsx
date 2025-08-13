import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  RefreshCw,
  Calendar,
  DollarSign,
  Package,
  Target,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

interface AnalyticsData {
  revenue: {
    current: number;
    previous: number;
    change: number;
    trend: 'up' | 'down';
  };
  margin: {
    current: number;
    previous: number;
    change: number;
    trend: 'up' | 'down';
  };
  forecastAccuracy: {
    current: number;
    previous: number;
    change: number;
    trend: 'up' | 'down';
  };
  inventoryTurnover: {
    current: number;
    previous: number;
    change: number;
    trend: 'up' | 'down';
  };
}

interface CategoryPerformance {
  category: string;
  revenue: number;
  margin: number;
  growth: number;
  items: number;
}

interface SupplierPerformance {
  supplier: string;
  onTimeDelivery: number;
  qualityScore: number;
  totalOrders: number;
  totalValue: number;
  rating: 'excellent' | 'good' | 'average' | 'poor';
}

const mockAnalytics: AnalyticsData = {
  revenue: {
    current: 2480000,
    previous: 2210000,
    change: 12.2,
    trend: 'up'
  },
  margin: {
    current: 34.5,
    previous: 32.1,
    change: 7.5,
    trend: 'up'
  },
  forecastAccuracy: {
    current: 91.8,
    previous: 89.3,
    change: 2.8,
    trend: 'up'
  },
  inventoryTurnover: {
    current: 8.4,
    previous: 7.9,
    change: 6.3,
    trend: 'up'
  }
};

const mockCategoryPerformance: CategoryPerformance[] = [
  {
    category: 'Electronics',
    revenue: 1240000,
    margin: 38.2,
    growth: 15.3,
    items: 245
  },
  {
    category: 'Fashion',
    revenue: 890000,
    margin: 42.1,
    growth: 8.7,
    items: 189
  },
  {
    category: 'Home',
    revenue: 350000,
    margin: 28.5,
    growth: 12.4,
    items: 156
  }
];

const mockSupplierPerformance: SupplierPerformance[] = [
  {
    supplier: 'TechSupply Co.',
    onTimeDelivery: 96.5,
    qualityScore: 4.8,
    totalOrders: 24,
    totalValue: 580000,
    rating: 'excellent'
  },
  {
    supplier: 'Fashion Direct',
    onTimeDelivery: 88.2,
    qualityScore: 4.5,
    totalOrders: 18,
    totalValue: 320000,
    rating: 'good'
  },
  {
    supplier: 'AudioTech Ltd.',
    onTimeDelivery: 92.1,
    qualityScore: 4.6,
    totalOrders: 15,
    totalValue: 275000,
    rating: 'good'
  },
  {
    supplier: 'Kitchen Pro',
    onTimeDelivery: 78.5,
    qualityScore: 4.2,
    totalOrders: 12,
    totalValue: 185000,
    rating: 'average'
  }
];

export default function DashboardAnalytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [categoryData, setCategoryData] = useState<CategoryPerformance[]>([]);
  const [supplierData, setSupplierData] = useState<SupplierPerformance[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalytics(mockAnalytics);
      setCategoryData(mockCategoryPerformance);
      setSupplierData(mockSupplierPerformance);
    } catch (error) {
      console.error('Failed to load analytics data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulate data updates
      const updatedAnalytics = {
        ...mockAnalytics,
        revenue: {
          ...mockAnalytics.revenue,
          current: mockAnalytics.revenue.current + Math.floor(Math.random() * 100000),
          change: mockAnalytics.revenue.change + (Math.random() - 0.5) * 2
        }
      };
      setAnalytics(updatedAnalytics);
    } catch (error) {
      console.error('Failed to refresh data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const getTrendIcon = (trend: 'up' | 'down') => {
    return trend === 'up' ? 
      <ArrowUpRight className="h-4 w-4 text-green-500" /> : 
      <ArrowDownRight className="h-4 w-4 text-red-500" />;
  };

  const getSupplierRatingBadge = (rating: string) => {
    switch (rating) {
      case 'excellent': return <Badge variant="success">Excellent</Badge>;
      case 'good': return <Badge variant="secondary">Good</Badge>;
      case 'average': return <Badge variant="warning">Average</Badge>;
      case 'poor': return <Badge variant="destructive">Poor</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading || !analytics) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading analytics..." />
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
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-warning" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics & Insights</h1>
              <p className="text-muted-foreground">
                Business intelligence and performance metrics
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="90d">90 days</SelectItem>
                <SelectItem value="1y">1 year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                </div>
                {getTrendIcon(analytics.revenue.trend)}
              </div>
              <p className="text-2xl font-bold">{formatCurrency(analytics.revenue.current)}</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={analytics.revenue.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {analytics.revenue.change > 0 ? '+' : ''}{analytics.revenue.change.toFixed(1)}%
                </span> vs previous period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-success" />
                  <p className="text-sm font-medium text-muted-foreground">Gross Margin</p>
                </div>
                {getTrendIcon(analytics.margin.trend)}
              </div>
              <p className="text-2xl font-bold">{analytics.margin.current.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={analytics.margin.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {analytics.margin.change > 0 ? '+' : ''}{analytics.margin.change.toFixed(1)}%
                </span> vs previous period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <p className="text-sm font-medium text-muted-foreground">Forecast Accuracy</p>
                </div>
                {getTrendIcon(analytics.forecastAccuracy.trend)}
              </div>
              <p className="text-2xl font-bold">{analytics.forecastAccuracy.current.toFixed(1)}%</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={analytics.forecastAccuracy.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {analytics.forecastAccuracy.change > 0 ? '+' : ''}{analytics.forecastAccuracy.change.toFixed(1)}%
                </span> vs previous period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-warning" />
                  <p className="text-sm font-medium text-muted-foreground">Inventory Turnover</p>
                </div>
                {getTrendIcon(analytics.inventoryTurnover.trend)}
              </div>
              <p className="text-2xl font-bold">{analytics.inventoryTurnover.current.toFixed(1)}x</p>
              <p className="text-xs text-muted-foreground mt-1">
                <span className={analytics.inventoryTurnover.change > 0 ? 'text-green-600' : 'text-red-600'}>
                  {analytics.inventoryTurnover.change > 0 ? '+' : ''}{analytics.inventoryTurnover.change.toFixed(1)}%
                </span> vs previous period
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Category Performance</TabsTrigger>
            <TabsTrigger value="suppliers">Supplier Analytics</TabsTrigger>
            <TabsTrigger value="trends">Forecast Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Category Performance</span>
                </CardTitle>
                <CardDescription>
                  Revenue and margin analysis by product category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {categoryData.map((category) => (
                    <div key={category.category} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{category.category}</h3>
                          <p className="text-sm text-muted-foreground">{category.items} items</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{formatCurrency(category.revenue)}</p>
                          <p className="text-sm text-green-600">+{category.growth.toFixed(1)}% growth</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Revenue</p>
                          <Progress 
                            value={(category.revenue / Math.max(...categoryData.map(c => c.revenue))) * 100} 
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <p className="text-muted-foreground">Margin: {category.margin.toFixed(1)}%</p>
                          <Progress value={category.margin} className="mt-1" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">Growth: {category.growth.toFixed(1)}%</p>
                          <Progress value={Math.min(category.growth * 5, 100)} className="mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suppliers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5" />
                  <span>Supplier Performance</span>
                </CardTitle>
                <CardDescription>
                  Delivery performance and quality metrics by supplier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {supplierData.map((supplier) => (
                    <div
                      key={supplier.supplier}
                      className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-semibold">{supplier.supplier}</h3>
                          {getSupplierRatingBadge(supplier.rating)}
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">On-Time Delivery</p>
                            <p className="font-medium">{supplier.onTimeDelivery.toFixed(1)}%</p>
                            <Progress value={supplier.onTimeDelivery} className="mt-1 h-2" />
                          </div>
                          <div>
                            <p className="text-muted-foreground">Quality Score</p>
                            <p className="font-medium">{supplier.qualityScore.toFixed(1)}/5.0</p>
                            <Progress value={(supplier.qualityScore / 5) * 100} className="mt-1 h-2" />
                          </div>
                          <div>
                            <p className="text-muted-foreground">Total Orders</p>
                            <p className="font-medium">{supplier.totalOrders}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Total Value</p>
                            <p className="font-medium">{formatCurrency(supplier.totalValue)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5" />
                  <span>Forecast Accuracy Trends</span>
                </CardTitle>
                <CardDescription>
                  AI prediction accuracy trends over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">94.2%</p>
                          <p className="text-sm text-muted-foreground">Best Accuracy</p>
                          <p className="text-xs text-muted-foreground mt-1">TECH-001</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">91.8%</p>
                          <p className="text-sm text-muted-foreground">Average Accuracy</p>
                          <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-warning">87.3%</p>
                          <p className="text-sm text-muted-foreground">Lowest Accuracy</p>
                          <p className="text-xs text-muted-foreground mt-1">FASH-005</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Accuracy Improvement Insights</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Electronics category shows highest prediction accuracy (94.2% avg)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span>Fashion items with seasonal patterns need model refinement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Recent data suggests 2.8% improvement in overall accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
