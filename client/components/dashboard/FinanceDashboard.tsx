import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MetricCard } from "@/components/dashboard/DashboardWidgets";
import { dashboardData, type DashboardStats } from "@/lib/dashboard-data";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  PieChart,
  BarChart3,
  Calculator,
  CreditCard,
  Banknote,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export function FinanceDashboard() {
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

  const cashFlowData = [
    { month: 'Jan', inflow: 280000, outflow: 195000, net: 85000 },
    { month: 'Feb', inflow: 320000, outflow: 220000, net: 100000 },
    { month: 'Mar', inflow: 350000, outflow: 240000, net: 110000 },
    { month: 'Apr', inflow: 380000, outflow: 255000, net: 125000 }
  ];

  const expenseCategories = [
    { category: 'Inventory Purchase', amount: 185000, percentage: 65, trend: 'up' },
    { category: 'Operational Costs', amount: 45000, percentage: 16, trend: 'stable' },
    { category: 'Marketing', amount: 32000, percentage: 11, trend: 'up' },
    { category: 'Technology', amount: 15000, percentage: 5, trend: 'stable' },
    { category: 'Other', amount: 8000, percentage: 3, trend: 'down' }
  ];

  const financialAlerts = [
    {
      id: '1',
      type: 'positive',
      title: 'Cash Flow Optimization',
      description: 'Working capital improved by $45K this month due to better inventory management',
      amount: 45000
    },
    {
      id: '2',
      type: 'warning',
      title: 'High Inventory Investment',
      description: 'Q2 inventory purchases 15% above budget - review with ops team',
      amount: 28000
    },
    {
      id: '3',
      type: 'info',
      title: 'Payment Terms Improvement',
      description: 'Negotiated 45-day terms with Fashion Direct, improving cash position',
      amount: 12000
    }
  ];

  return (
    <div className="space-y-6">
      {/* Finance Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Financial Dashboard</h2>
          <p className="text-muted-foreground">Monitor financial performance and cash flow</p>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Revenue (MTD)"
          value={`$${(stats.totalRevenue / 1000000).toFixed(1)}M`}
          change={12.5}
          changeLabel="vs last month"
          icon={DollarSign}
          trend="up"
          description="Month-to-date revenue"
        />
        <MetricCard
          title="Gross Margin"
          value={`${stats.grossMargin.toFixed(1)}%`}
          change={2.1}
          changeLabel="vs last month"
          icon={Target}
          trend="up"
          description="Current gross margin"
        />
        <MetricCard
          title="Working Capital"
          value={`$${(stats.workingCapitalSaved / 1000).toFixed(0)}K`}
          change={8.3}
          changeLabel="vs last month"
          icon={Banknote}
          trend="up"
          description="Available working capital"
        />
        <MetricCard
          title="Inventory Value"
          value="$847K"
          change={-3.2}
          changeLabel="vs last month"
          icon={BarChart3}
          trend="down"
          description="Total inventory valuation"
        />
      </div>

      {/* Financial Alerts */}
      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-blue-600" />
            <span>Financial Insights</span>
          </CardTitle>
          <CardDescription>Important financial updates and recommendations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {financialAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start space-x-3 p-3 rounded-lg border ${
                alert.type === 'positive' 
                  ? 'bg-success/10 border-success/20' 
                  : alert.type === 'warning'
                  ? 'bg-warning/10 border-warning/20'
                  : 'bg-primary/10 border-primary/20'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                alert.type === 'positive' 
                  ? 'bg-success text-success-foreground' 
                  : alert.type === 'warning'
                  ? 'bg-warning text-warning-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}>
                {alert.type === 'positive' ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : alert.type === 'warning' ? (
                  <AlertTriangle className="h-3 w-3" />
                ) : (
                  <CheckCircle className="h-3 w-3" />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{alert.title}</h4>
                <p className="text-xs text-muted-foreground">{alert.description}</p>
                <Badge variant="outline" className="mt-1">
                  ${alert.amount.toLocaleString()}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Flow Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Cash Flow Trend</span>
            </CardTitle>
            <CardDescription>Monthly cash inflow vs outflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cashFlowData.map((month) => (
                <div key={month.month} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{month.month} 2024</span>
                    <span className={`font-medium ${month.net > 0 ? 'text-success' : 'text-destructive'}`}>
                      ${month.net.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">Inflow</div>
                      <div className="h-2 bg-success rounded-full" style={{ width: '100%' }}></div>
                      <div className="text-xs text-success mt-1">${month.inflow.toLocaleString()}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">Outflow</div>
                      <div 
                        className="h-2 bg-destructive rounded-full" 
                        style={{ width: `${(month.outflow / month.inflow) * 100}%` }}
                      ></div>
                      <div className="text-xs text-destructive mt-1">${month.outflow.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expense Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="h-5 w-5" />
              <span>Expense Breakdown</span>
            </CardTitle>
            <CardDescription>Current month expense categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseCategories.map((category) => (
                <div key={category.category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">${category.amount.toLocaleString()}</span>
                      {category.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3 text-success" />
                      ) : category.trend === 'down' ? (
                        <TrendingDown className="h-3 w-3 text-destructive" />
                      ) : (
                        <div className="w-3 h-3 bg-muted rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Progress value={category.percentage} className="flex-1" />
                    <span className="text-xs text-muted-foreground w-10">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5" />
              <span>Financial Ratios</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Current Ratio</span>
              <span className="text-sm font-medium">2.4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Quick Ratio</span>
              <span className="text-sm font-medium">1.8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Inventory Turnover</span>
              <span className="text-sm font-medium">8.4x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Days Sales Outstanding</span>
              <span className="text-sm font-medium">32 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Debt-to-Equity</span>
              <span className="text-sm font-medium">0.3</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Payment Terms</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">TechSupply Co.</span>
              <Badge variant="outline">30 days</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Fashion Direct</span>
              <Badge variant="success">45 days</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">AudioTech Ltd.</span>
              <Badge variant="outline">30 days</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Kitchen Pro</span>
              <Badge variant="warning">15 days</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Average Terms</span>
              <Badge variant="secondary">32 days</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Budget vs Actual</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Revenue</span>
                <span className="text-success">+12% vs budget</span>
              </div>
              <Progress value={112} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>COGS</span>
                <span className="text-warning">+5% vs budget</span>
              </div>
              <Progress value={105} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>OpEx</span>
                <span className="text-success">-8% vs budget</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Net Income</span>
                <span className="text-success">+18% vs budget</span>
              </div>
              <Progress value={118} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Actions</CardTitle>
          <CardDescription>Common financial tasks and reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <BarChart3 className="h-6 w-6" />
              <span className="text-sm">P&L Report</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <PieChart className="h-6 w-6" />
              <span className="text-sm">Cash Flow</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <Calculator className="h-6 w-6" />
              <span className="text-sm">Budget Review</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <DollarSign className="h-6 w-6" />
              <span className="text-sm">ROI Analysis</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
