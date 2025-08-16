import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MetricCard, 
  AlertsWidget, 
  RecentActivityWidget 
} from "@/components/dashboard/DashboardWidgets";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import { 
  DollarSign, 
  TrendingUp, 
  Target,
  Users,
  Package,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Crown,
  Zap
} from "lucide-react";

export function FounderDashboard() {
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
  const recentActivities = [
    {
      id: '1',
      type: 'forecast_updated' as const,
      title: 'Monthly Revenue Target',
      description: 'On track to exceed Q1 target by 15%',
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      user: 'AI System'
    },
    {
      id: '2',
      type: 'po_approved' as const,
      title: 'Major PO Approved',
      description: '$45K purchase order approved for Q2 inventory',
      timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      user: 'Operations Team'
    },
    {
      id: '3',
      type: 'alert_created' as const,
      title: 'Cash Flow Optimization',
      description: 'StockPilot prevented $25K in overstock this month',
      timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
      user: 'AI System'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Founder Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
          <Crown className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Executive Overview</h2>
          <p className="text-muted-foreground">High-level business insights and key metrics</p>
        </div>
      </div>

      {/* Executive KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value={`$${(stats.totalRevenue / 1000000).toFixed(1)}M`}
          change={15.3}
          changeLabel="vs last month"
          icon={DollarSign}
          trend="up"
          description="Total monthly recurring revenue"
        />
        <MetricCard
          title="Gross Margin"
          value={`${stats.grossMargin.toFixed(1)}%`}
          change={2.8}
          changeLabel="vs last month"
          icon={Target}
          trend="up"
          description="Profit margin optimization"
        />
        <MetricCard
          title="Working Capital Saved"
          value={`$${(stats.workingCapitalSaved / 1000).toFixed(0)}K`}
          change={12.7}
          changeLabel="vs last month"
          icon={TrendingUp}
          trend="up"
          description="Cash flow improvement"
        />
        <MetricCard
          title="AI ROI"
          value="340%"
          change={45.2}
          changeLabel="quarterly increase"
          icon={Zap}
          trend="up"
          description="Return on StockPilot investment"
        />
      </div>

      {/* Business Health Score */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span>Business Health Score</span>
            <Badge variant="success" className="ml-auto">Excellent</Badge>
          </CardTitle>
          <CardDescription>
            Overall business performance based on inventory, forecasting, and financial metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Inventory Optimization</span>
              <span className="text-sm text-muted-foreground">94/100</span>
            </div>
            <Progress value={94} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Forecast Accuracy</span>
              <span className="text-sm text-muted-foreground">91/100</span>
            </div>
            <Progress value={91} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cash Flow Management</span>
              <span className="text-sm text-muted-foreground">87/100</span>
            </div>
            <Progress value={87} className="h-2" />
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Operational Efficiency</span>
              <span className="text-sm text-muted-foreground">89/100</span>
            </div>
            <Progress value={89} className="h-2" />
          </div>
          
          <div className="mt-4 p-3 bg-success/10 rounded-lg border border-success/20">
            <p className="text-sm text-success font-medium">
              🎯 Your business is performing exceptionally well! StockPilot has optimized your inventory management.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Strategic Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Strategic Growth Opportunities</CardTitle>
            <CardDescription>AI-identified opportunities for business expansion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <ArrowUpRight className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Electronics Category Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  94% forecast accuracy suggests 30% inventory increase could boost revenue by $180K
                </p>
                <Badge variant="outline" className="mt-1">High Impact</Badge>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
              <TrendingUp className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <h4 className="font-medium">Seasonal Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Q2 demand patterns show opportunity for 25% margin improvement in fashion category
                </p>
                <Badge variant="outline" className="mt-1">Medium Impact</Badge>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-warning/5 rounded-lg border border-warning/20">
              <Target className="h-5 w-5 text-warning mt-0.5" />
              <div>
                <h4 className="font-medium">Supplier Diversification</h4>
                <p className="text-sm text-muted-foreground">
                  Consider adding 2-3 suppliers to reduce risk and improve negotiating power
                </p>
                <Badge variant="outline" className="mt-1">Strategic</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {/* Team Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Team Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Operations</span>
                <Badge variant="success">Excellent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Finance</span>
                <Badge variant="success">Excellent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Inventory</span>
                <Badge variant="secondary">Good</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Analytics</span>
                <Badge variant="success">Excellent</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Risk Assessment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Risk Assessment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Inventory Risk</span>
                  <Badge variant="success">Low</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Supplier Risk</span>
                  <Badge variant="warning">Medium</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Demand Risk</span>
                  <Badge variant="success">Low</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cash Flow Risk</span>
                  <Badge variant="success">Low</Badge>
                </div>
              </div>
              <div className="mt-3 p-2 bg-muted/50 rounded text-xs text-muted-foreground">
                Overall risk level is well managed with StockPilot's AI monitoring.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsWidget alerts={alerts.slice(0, 3)} />
        <RecentActivityWidget activities={recentActivities} />
      </div>

      {/* Key Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recommended Actions</CardTitle>
          <CardDescription>Based on current business performance and AI insights</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto p-4 flex flex-col items-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">Review Q2 Strategy</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Team Performance Review</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Target className="h-6 w-6" />
              <span className="text-sm">Set Q2 Goals</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
