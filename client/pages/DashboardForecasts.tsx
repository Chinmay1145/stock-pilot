import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { dashboardData } from "@/lib/dashboard-data";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
  Search,
  Download,
  RefreshCw,
  Target,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Filter,
} from "lucide-react";

interface ForecastData {
  sku: string;
  productName: string;
  currentStock: number;
  forecastDemand: number;
  accuracy: number;
  confidence: number;
  trend: "up" | "down" | "stable";
  daysToStockout: number | null;
  suggestedOrder: number;
  lastUpdated: string;
  category: string;
  seasonality: "high" | "medium" | "low";
}

const mockForecasts: ForecastData[] = [
  {
    sku: "TECH-001",
    productName: "Wireless Headphones Pro",
    currentStock: 245,
    forecastDemand: 180,
    accuracy: 94.2,
    confidence: 92,
    trend: "up",
    daysToStockout: 8,
    suggestedOrder: 500,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Electronics",
    seasonality: "low",
  },
  {
    sku: "FASH-002",
    productName: "Premium Cotton T-Shirt",
    currentStock: 89,
    forecastDemand: 220,
    accuracy: 91.8,
    confidence: 88,
    trend: "up",
    daysToStockout: 3,
    suggestedOrder: 800,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Fashion",
    seasonality: "high",
  },
  {
    sku: "HOME-003",
    productName: "Smart LED Bulb",
    currentStock: 456,
    forecastDemand: 95,
    accuracy: 89.5,
    confidence: 85,
    trend: "stable",
    daysToStockout: 28,
    suggestedOrder: 0,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Home",
    seasonality: "low",
  },
  {
    sku: "TECH-004",
    productName: "Bluetooth Speaker",
    currentStock: 178,
    forecastDemand: 310,
    accuracy: 96.1,
    confidence: 94,
    trend: "up",
    daysToStockout: 4,
    suggestedOrder: 600,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Electronics",
    seasonality: "medium",
  },
  {
    sku: "FASH-005",
    productName: "Denim Jeans Classic",
    currentStock: 234,
    forecastDemand: 140,
    accuracy: 87.3,
    confidence: 81,
    trend: "down",
    daysToStockout: 12,
    suggestedOrder: 300,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Fashion",
    seasonality: "medium",
  },
  {
    sku: "HOME-006",
    productName: "Kitchen Knife Set",
    currentStock: 67,
    forecastDemand: 85,
    accuracy: 93.7,
    confidence: 90,
    trend: "stable",
    daysToStockout: 6,
    suggestedOrder: 200,
    lastUpdated: "2024-01-15T10:30:00Z",
    category: "Home",
    seasonality: "high",
  },
];

export default function DashboardForecasts() {
  const [forecasts, setForecasts] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("daysToStockout");

  useEffect(() => {
    loadForecastData();
  }, []);

  const loadForecastData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setForecasts(mockForecasts);
    } catch (error) {
      console.error("Failed to load forecast data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Simulate slight data changes
      const updatedForecasts = mockForecasts.map((forecast) => ({
        ...forecast,
        accuracy: Math.max(
          85,
          Math.min(98, forecast.accuracy + (Math.random() - 0.5) * 2),
        ),
        confidence: Math.max(
          80,
          Math.min(95, forecast.confidence + (Math.random() - 0.5) * 3),
        ),
        lastUpdated: new Date().toISOString(),
      }));
      setForecasts(updatedForecasts);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredForecasts = forecasts
    .filter(
      (forecast) =>
        forecast.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        forecast.sku.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (forecast) =>
        selectedCategory === "all" || forecast.category === selectedCategory,
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "daysToStockout":
          return (a.daysToStockout || 999) - (b.daysToStockout || 999);
        case "accuracy":
          return b.accuracy - a.accuracy;
        case "demand":
          return b.forecastDemand - a.forecastDemand;
        default:
          return 0;
      }
    });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStockoutBadge = (days: number | null) => {
    if (!days) return <Badge variant="success">Safe</Badge>;
    if (days <= 3) return <Badge variant="destructive">Critical</Badge>;
    if (days <= 7) return <Badge variant="warning">Low</Badge>;
    return <Badge variant="success">Safe</Badge>;
  };

  const categories = Array.from(new Set(forecasts.map((f) => f.category)));
  const avgAccuracy =
    forecasts.reduce((sum, f) => sum + f.accuracy, 0) / forecasts.length;
  const criticalItems = forecasts.filter(
    (f) => f.daysToStockout && f.daysToStockout <= 7,
  ).length;
  const totalSuggestedOrders = forecasts.reduce(
    (sum, f) => sum + f.suggestedOrder,
    0,
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading forecasts..." />
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
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Demand Forecasts
              </h1>
              <p className="text-muted-foreground">
                AI-powered SKU-level demand predictions and accuracy tracking
              </p>
            </div>
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
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Avg Accuracy
                  </p>
                  <p className="text-2xl font-bold">
                    {avgAccuracy.toFixed(1)}%
                  </p>
                </div>
                <Target className="h-8 w-8 text-primary" />
              </div>
              <Progress value={avgAccuracy} className="mt-3" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Critical Items
                  </p>
                  <p className="text-2xl font-bold">{criticalItems}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Items with ≤7 days stock
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total SKUs
                  </p>
                  <p className="text-2xl font-bold">{forecasts.length}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Active forecasts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Suggested Orders
                  </p>
                  <p className="text-2xl font-bold">
                    {totalSuggestedOrders.toLocaleString()}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Total units to order
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by SKU or product name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daysToStockout">
                    Days to Stockout
                  </SelectItem>
                  <SelectItem value="accuracy">Accuracy</SelectItem>
                  <SelectItem value="demand">Demand</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Forecasts Table */}
        <Card>
          <CardHeader>
            <CardTitle>SKU Forecasts</CardTitle>
            <CardDescription>
              Showing {filteredForecasts.length} of {forecasts.length} forecasts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredForecasts.map((forecast) => (
                <div
                  key={forecast.sku}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 space-y-2 lg:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold">
                          {forecast.productName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {forecast.sku}
                        </p>
                      </div>
                      <Badge variant="outline">{forecast.category}</Badge>
                      {getTrendIcon(forecast.trend)}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-3 lg:mt-0">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Current Stock
                        </p>
                        <p className="font-medium">{forecast.currentStock}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Forecast Demand
                        </p>
                        <p className="font-medium">{forecast.forecastDemand}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Accuracy
                        </p>
                        <p className="font-medium">
                          {forecast.accuracy.toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Confidence
                        </p>
                        <p className="font-medium">{forecast.confidence}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Days to Stockout
                        </p>
                        <div className="flex items-center space-x-2">
                          <p className="font-medium">
                            {forecast.daysToStockout || "Safe"}
                          </p>
                          {getStockoutBadge(forecast.daysToStockout)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-4 lg:mt-0">
                    {forecast.suggestedOrder > 0 && (
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          Suggested Order
                        </p>
                        <p className="font-semibold text-primary">
                          {forecast.suggestedOrder} units
                        </p>
                      </div>
                    )}
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
