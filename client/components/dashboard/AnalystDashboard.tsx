import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard, ForecastAccuracyWidget } from "@/components/dashboard/DashboardWidgets";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Target,
  PieChart,
  LineChart,
  Activity,
  Zap,
  Database,
  Brain,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export function AnalystDashboard() {
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

  const forecastAccuracy = [
    { sku: 'TECH-001', productName: 'Wireless Headphones Pro', accuracy: 94.2, trend: 'up' as const },
    { sku: 'FASH-002', productName: 'Premium Cotton T-Shirt', accuracy: 91.8, trend: 'stable' as const },
    { sku: 'HOME-003', productName: 'Smart LED Bulb', accuracy: 89.5, trend: 'down' as const },
    { sku: 'TECH-004', productName: 'Bluetooth Speaker', accuracy: 96.1, trend: 'up' as const },
    { sku: 'FASH-005', productName: 'Denim Jeans Classic', accuracy: 87.3, trend: 'down' as const },
  ];

  const modelPerformance = [
    { model: 'ARIMA', accuracy: 89.2, category: 'Seasonal Items', status: 'active' },
    { model: 'Prophet', accuracy: 92.5, category: 'Electronics', status: 'active' },
    { model: 'LightGBM', accuracy: 95.1, category: 'Fashion', status: 'champion' },
    { model: 'Linear Regression', accuracy: 78.4, category: 'Home', status: 'retired' }
  ];

  const dataQuality = [
    { metric: 'Completeness', score: 98.5, status: 'excellent' },
    { metric: 'Accuracy', score: 94.2, status: 'good' },
    { metric: 'Consistency', score: 91.8, status: 'good' },
    { metric: 'Timeliness', score: 96.7, status: 'excellent' },
    { metric: 'Validity', score: 88.9, status: 'fair' }
  ];

  const insights = [
    {
      id: '1',
      type: 'positive',
      title: 'Model Performance Improvement',
      description: 'LightGBM model for Fashion category achieved 95.1% accuracy, +3.2% vs last month',
      impact: 'High',
      confidence: 95
    },
    {
      id: '2',
      type: 'warning',
      title: 'Seasonal Pattern Deviation',
      description: 'Home category showing unusual demand patterns, 15% below seasonal trend',
      impact: 'Medium',
      confidence: 87
    },
    {
      id: '3',
      type: 'info',
      title: 'New Feature Correlation',
      description: 'Weather data correlation with outdoor products increased accuracy by 8%',
      impact: 'Medium',
      confidence: 92
    }
  ];

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Deep insights and predictive analytics</p>
        </div>
      </div>

      {/* Analytics KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Forecast Accuracy"
          value={`${stats.averageForecastAccuracy.toFixed(1)}%`}
          change={2.8}
          changeLabel="vs last month"
          icon={Target}
          trend="up"
          description="Overall model performance"
        />
        <MetricCard
          title="Data Quality Score"
          value="94.2%"
          change={1.5}
          changeLabel="vs last month"
          icon={Database}
          trend="up"
          description="Data completeness & accuracy"
        />
        <MetricCard
          title="Model Efficiency"
          value="89.7%"
          change={5.2}
          changeLabel="vs last month"
          icon={Zap}
          trend="up"
          description="Processing optimization"
        />
        <MetricCard
          title="Insights Generated"
          value="47"
          change={12.3}
          changeLabel="vs last month"
          icon={Activity}
          trend="up"
          description="Actionable recommendations"
        />
      </div>

      {/* AI Insights */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5 text-primary" />
            <span>AI-Generated Insights</span>
          </CardTitle>
          <CardDescription>Key findings from predictive analytics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`flex items-start space-x-3 p-3 rounded-lg border ${
                insight.type === 'positive' 
                  ? 'bg-success/10 border-success/20' 
                  : insight.type === 'warning'
                  ? 'bg-warning/10 border-warning/20'
                  : 'bg-primary/10 border-primary/20'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                insight.type === 'positive' 
                  ? 'bg-success text-success-foreground' 
                  : insight.type === 'warning'
                  ? 'bg-warning text-warning-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}>
                {insight.type === 'positive' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : insight.type === 'warning' ? (
                  <AlertTriangle className="h-3 w-3" />
                ) : (
                  <CheckCircle className="h-3 w-3" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-sm">{insight.title}</h4>
                  <Badge variant="outline">{insight.impact} Impact</Badge>
                  <Badge variant="secondary">{insight.confidence}% Confidence</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{insight.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Tabs defaultValue="models" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="models">Model Performance</TabsTrigger>
          <TabsTrigger value="data">Data Quality</TabsTrigger>
          <TabsTrigger value="forecasts">Forecast Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="models" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>ML Model Performance</span>
              </CardTitle>
              <CardDescription>Accuracy and status of different forecasting models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modelPerformance.map((model, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        model.status === 'champion' 
                          ? 'bg-success/10 text-success' 
                          : model.status === 'active'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <BarChart3 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">{model.model}</h4>
                        <p className="text-sm text-muted-foreground">{model.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="font-medium">{model.accuracy.toFixed(1)}%</p>
                        <p className="text-xs text-muted-foreground">Accuracy</p>
                      </div>
                      <Badge variant={
                        model.status === 'champion' ? 'success' : 
                        model.status === 'active' ? 'secondary' : 'outline'
                      }>
                        {model.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Data Quality Metrics</span>
              </CardTitle>
              <CardDescription>Assessment of data completeness and reliability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {dataQuality.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{metric.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">{metric.score.toFixed(1)}%</span>
                        <Badge variant={
                          metric.status === 'excellent' ? 'success' : 
                          metric.status === 'good' ? 'secondary' : 'warning'
                        }>
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={metric.score} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Data Quality Summary</h4>
                <p className="text-sm text-muted-foreground">
                  Overall data quality is excellent with 94.2% average score. Focus on improving validity 
                  metrics through enhanced data validation rules.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasts" className="space-y-6">
          <ForecastAccuracyWidget accuracyData={forecastAccuracy} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LineChart className="h-5 w-5" />
                  <span>Accuracy Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last 7 days</span>
                    <span className="text-sm font-medium text-success">+2.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last 30 days</span>
                    <span className="text-sm font-medium text-success">+1.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Last 90 days</span>
                    <span className="text-sm font-medium text-success">+5.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Year to date</span>
                    <span className="text-sm font-medium text-success">+8.7%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Error Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Under-forecast</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Over-forecast</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Accurate (±5%)</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="mt-3 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                    Slight tendency toward under-forecasting indicates conservative model behavior.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics Tools</CardTitle>
          <CardDescription>Advanced analytics and reporting capabilities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Model Training</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Database className="h-6 w-6" />
              <span className="text-sm">Data Explorer</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Target className="h-6 w-6" />
              <span className="text-sm">A/B Testing</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <PieChart className="h-6 w-6" />
              <span className="text-sm">Custom Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
