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
import { LoadingSpinner } from "@/components/LoadingSpinner";
import {
  FileText,
  Download,
  RefreshCw,
  Plus,
  Calendar,
  Clock,
  Eye,
  Edit,
  Trash2,
  Share,
  Filter,
  Search,
} from "lucide-react";

interface Report {
  id: string;
  name: string;
  type: "inventory" | "forecast" | "purchase_order" | "analytics" | "custom";
  format: "pdf" | "excel" | "csv";
  schedule: "manual" | "daily" | "weekly" | "monthly";
  lastGenerated: string;
  size: string;
  status: "ready" | "generating" | "scheduled" | "failed";
  description: string;
  recipients: string[];
  createdBy: string;
}

const mockReports: Report[] = [
  {
    id: "1",
    name: "Monthly Inventory Summary",
    type: "inventory",
    format: "pdf",
    schedule: "monthly",
    lastGenerated: "2024-01-15T00:00:00Z",
    size: "2.3 MB",
    status: "ready",
    description: "Comprehensive inventory status and valuation report",
    recipients: ["manager@company.com", "finance@company.com"],
    createdBy: "Sarah Johnson",
  },
  {
    id: "2",
    name: "Weekly Forecast Accuracy",
    type: "forecast",
    format: "excel",
    schedule: "weekly",
    lastGenerated: "2024-01-14T00:00:00Z",
    size: "1.8 MB",
    status: "ready",
    description: "AI prediction accuracy metrics and trends",
    recipients: ["operations@company.com"],
    createdBy: "AI System",
  },
  {
    id: "3",
    name: "Purchase Order Analysis",
    type: "purchase_order",
    format: "pdf",
    schedule: "manual",
    lastGenerated: "2024-01-13T00:00:00Z",
    size: "1.2 MB",
    status: "ready",
    description: "Supplier performance and purchase order analytics",
    recipients: ["procurement@company.com"],
    createdBy: "Mike Wilson",
  },
  {
    id: "4",
    name: "Daily Stock Alerts",
    type: "inventory",
    format: "csv",
    schedule: "daily",
    lastGenerated: "2024-01-15T06:00:00Z",
    size: "0.5 MB",
    status: "ready",
    description: "Low stock and critical inventory alerts",
    recipients: ["warehouse@company.com", "ops@company.com"],
    createdBy: "AI System",
  },
  {
    id: "5",
    name: "Q1 Performance Dashboard",
    type: "analytics",
    format: "pdf",
    schedule: "manual",
    lastGenerated: "2024-01-12T00:00:00Z",
    size: "4.1 MB",
    status: "generating",
    description: "Quarterly business performance and KPI analysis",
    recipients: ["executives@company.com"],
    createdBy: "Lisa Chen",
  },
  {
    id: "6",
    name: "Custom SKU Performance",
    type: "custom",
    format: "excel",
    schedule: "weekly",
    lastGenerated: "2024-01-11T00:00:00Z",
    size: "3.7 MB",
    status: "scheduled",
    description: "Detailed performance metrics for top-selling SKUs",
    recipients: ["analytics@company.com"],
    createdBy: "John Smith",
  },
];

export default function DashboardReports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  useEffect(() => {
    loadReportsData();
  }, []);

  const loadReportsData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setReports(mockReports);
    } catch (error) {
      console.error("Failed to load reports data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setReports(mockReports);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredReports = reports
    .filter(
      (report) =>
        report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((report) => selectedType === "all" || report.type === selectedType)
    .filter(
      (report) => selectedStatus === "all" || report.status === selectedStatus,
    );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge variant="success">Ready</Badge>;
      case "generating":
        return <Badge variant="warning">Generating</Badge>;
      case "scheduled":
        return <Badge variant="secondary">Scheduled</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "inventory":
        return <Badge variant="outline">Inventory</Badge>;
      case "forecast":
        return <Badge variant="outline">Forecast</Badge>;
      case "purchase_order":
        return <Badge variant="outline">Purchase Order</Badge>;
      case "analytics":
        return <Badge variant="outline">Analytics</Badge>;
      case "custom":
        return <Badge variant="outline">Custom</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getScheduleBadge = (schedule: string) => {
    switch (schedule) {
      case "manual":
        return <Badge variant="secondary">Manual</Badge>;
      case "daily":
        return <Badge variant="success">Daily</Badge>;
      case "weekly":
        return <Badge variant="success">Weekly</Badge>;
      case "monthly":
        return <Badge variant="success">Monthly</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalReports = reports.length;
  const scheduledReports = reports.filter(
    (r) => r.schedule !== "manual",
  ).length;
  const readyReports = reports.filter((r) => r.status === "ready").length;
  const totalSize = reports.reduce(
    (sum, r) => sum + parseFloat(r.size.replace(" MB", "")),
    0,
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading reports..." />
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
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Reports & Exports
              </h1>
              <p className="text-muted-foreground">
                Comprehensive reporting and data export capabilities
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
              <Plus className="h-4 w-4 mr-2" />
              New Report
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
                    Total Reports
                  </p>
                  <p className="text-2xl font-bold">{totalReports}</p>
                </div>
                <FileText className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Automated
                  </p>
                  <p className="text-2xl font-bold">{scheduledReports}</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Scheduled reports
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ready Downloads
                  </p>
                  <p className="text-2xl font-bold">{readyReports}</p>
                </div>
                <Download className="h-8 w-8 text-success" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Available for download
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Size
                  </p>
                  <p className="text-2xl font-bold">
                    {totalSize.toFixed(1)} MB
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-warning" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Storage used</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="forecast">Forecast</SelectItem>
                  <SelectItem value="purchase_order">Purchase Order</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="ready">Ready</SelectItem>
                  <SelectItem value="generating">Generating</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>
              Showing {filteredReports.length} of {reports.length} reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold">{report.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {report.description}
                        </p>
                      </div>
                      {getTypeBadge(report.type)}
                      {getStatusBadge(report.status)}
                      {getScheduleBadge(report.schedule)}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Format</p>
                        <p className="font-medium uppercase">{report.format}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Size</p>
                        <p className="font-medium">{report.size}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Last Generated</p>
                        <p className="font-medium text-xs">
                          {formatDate(report.lastGenerated)}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Created By</p>
                        <p className="font-medium text-xs">
                          {report.createdBy}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Recipients</p>
                        <p className="font-medium text-xs">
                          {report.recipients.length} recipient
                          {report.recipients.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    {report.recipients.length > 0 && (
                      <div className="text-xs text-muted-foreground">
                        <strong>Recipients:</strong>{" "}
                        {report.recipients.join(", ")}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                    {report.status === "ready" && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Custom Report Builder</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Create custom reports with drag-and-drop interface
              </p>
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Build Report
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Schedule Reports</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Automate report generation and delivery
              </p>
              <Button variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Bulk Export</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Export multiple datasets in various formats
              </p>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
