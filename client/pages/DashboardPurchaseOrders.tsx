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
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { dashboardData } from "@/lib/dashboard-data";
import {
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Search,
  Download,
  RefreshCw,
  Plus,
  Eye,
  Edit,
  Send,
  DollarSign,
  Package,
  Truck,
  Calendar,
} from "lucide-react";

interface PurchaseOrder {
  id: string;
  poNumber: string;
  supplier: string;
  status:
    | "draft"
    | "pending_approval"
    | "approved"
    | "sent"
    | "received"
    | "cancelled";
  priority: "low" | "medium" | "high" | "urgent";
  totalAmount: number;
  orderDate: string;
  expectedDelivery: string;
  approver: string;
  items: POItem[];
  notes?: string;
  createdBy: "ai" | "manual";
}

interface POItem {
  sku: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  urgency: "low" | "medium" | "high";
}

const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: "1",
    poNumber: "PO-2024-001",
    supplier: "TechSupply Co.",
    status: "pending_approval",
    priority: "high",
    totalAmount: 25000,
    orderDate: "2024-01-15T00:00:00Z",
    expectedDelivery: "2024-01-22T00:00:00Z",
    approver: "John Smith",
    createdBy: "ai",
    items: [
      {
        sku: "TECH-001",
        productName: "Wireless Headphones Pro",
        quantity: 500,
        unitPrice: 50,
        totalPrice: 25000,
        urgency: "high",
      },
    ],
    notes: "Urgent restock due to low inventory levels",
  },
  {
    id: "2",
    poNumber: "PO-2024-002",
    supplier: "Fashion Direct",
    status: "approved",
    priority: "urgent",
    totalAmount: 16000,
    orderDate: "2024-01-14T00:00:00Z",
    expectedDelivery: "2024-01-20T00:00:00Z",
    approver: "Sarah Johnson",
    createdBy: "ai",
    items: [
      {
        sku: "FASH-002",
        productName: "Premium Cotton T-Shirt",
        quantity: 800,
        unitPrice: 20,
        totalPrice: 16000,
        urgency: "urgent",
      },
    ],
    notes: "Critical stockout prevention",
  },
  {
    id: "3",
    poNumber: "PO-2024-003",
    supplier: "AudioTech Ltd.",
    status: "sent",
    priority: "medium",
    totalAmount: 45000,
    orderDate: "2024-01-13T00:00:00Z",
    expectedDelivery: "2024-01-25T00:00:00Z",
    approver: "Mike Wilson",
    createdBy: "manual",
    items: [
      {
        sku: "TECH-004",
        productName: "Bluetooth Speaker",
        quantity: 600,
        unitPrice: 75,
        totalPrice: 45000,
        urgency: "medium",
      },
    ],
  },
  {
    id: "4",
    poNumber: "PO-2024-004",
    supplier: "Kitchen Pro",
    status: "draft",
    priority: "low",
    totalAmount: 20000,
    orderDate: "2024-01-15T00:00:00Z",
    expectedDelivery: "2024-01-30T00:00:00Z",
    approver: "Lisa Chen",
    createdBy: "ai",
    items: [
      {
        sku: "HOME-006",
        productName: "Kitchen Knife Set",
        quantity: 200,
        unitPrice: 100,
        totalPrice: 20000,
        urgency: "low",
      },
    ],
    notes: "Proactive inventory replenishment",
  },
  {
    id: "5",
    poNumber: "PO-2024-005",
    supplier: "Denim Factory",
    status: "received",
    priority: "high",
    totalAmount: 13500,
    orderDate: "2024-01-10T00:00:00Z",
    expectedDelivery: "2024-01-17T00:00:00Z",
    approver: "John Smith",
    createdBy: "manual",
    items: [
      {
        sku: "FASH-005",
        productName: "Denim Jeans Classic",
        quantity: 300,
        unitPrice: 45,
        totalPrice: 13500,
        urgency: "high",
      },
    ],
  },
];

export default function DashboardPurchaseOrders() {
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [sortBy, setSortBy] = useState("orderDate");

  useEffect(() => {
    loadPurchaseOrderData();
  }, []);

  const loadPurchaseOrderData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setPurchaseOrders(mockPurchaseOrders);
    } catch (error) {
      console.error("Failed to load purchase order data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPurchaseOrders(mockPurchaseOrders);
    } catch (error) {
      console.error("Failed to refresh data:", error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredPOs = purchaseOrders
    .filter(
      (po) =>
        po.poNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        po.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        po.items.some((item) =>
          item.productName.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )
    .filter((po) => selectedStatus === "all" || po.status === selectedStatus)
    .filter(
      (po) => selectedPriority === "all" || po.priority === selectedPriority,
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "orderDate":
          return (
            new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
          );
        case "totalAmount":
          return b.totalAmount - a.totalAmount;
        case "expectedDelivery":
          return (
            new Date(a.expectedDelivery).getTime() -
            new Date(b.expectedDelivery).getTime()
          );
        default:
          return 0;
      }
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "draft":
        return <Badge variant="outline">Draft</Badge>;
      case "pending_approval":
        return <Badge variant="warning">Pending Approval</Badge>;
      case "approved":
        return <Badge variant="success">Approved</Badge>;
      case "sent":
        return <Badge variant="secondary">Sent</Badge>;
      case "received":
        return <Badge variant="success">Received</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      case "high":
        return <Badge variant="warning">High</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "draft":
        return <Edit className="h-4 w-4 text-muted-foreground" />;
      case "pending_approval":
        return <Clock className="h-4 w-4 text-warning" />;
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "sent":
        return <Send className="h-4 w-4 text-blue-500" />;
      case "received":
        return <Package className="h-4 w-4 text-success" />;
      case "cancelled":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Calculate metrics
  const totalValue = purchaseOrders.reduce(
    (sum, po) => sum + po.totalAmount,
    0,
  );
  const pendingApprovals = purchaseOrders.filter(
    (po) => po.status === "pending_approval",
  ).length;
  const aiGenerated = purchaseOrders.filter(
    (po) => po.createdBy === "ai",
  ).length;
  const urgentOrders = purchaseOrders.filter(
    (po) => po.priority === "urgent" || po.priority === "high",
  ).length;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading purchase orders..." />
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
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-success" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Purchase Orders
              </h1>
              <p className="text-muted-foreground">
                Automated PO generation and approval workflows
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
              Create PO
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
                    Total PO Value
                  </p>
                  <p className="text-2xl font-bold">
                    ${totalValue.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Current order pipeline
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Pending Approvals
                  </p>
                  <p className="text-2xl font-bold">{pendingApprovals}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Awaiting approval
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    AI Generated
                  </p>
                  <p className="text-2xl font-bold">{aiGenerated}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Automated orders
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Urgent Orders
                  </p>
                  <p className="text-2xl font-bold">{urgentOrders}</p>
                </div>
                <Package className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                High priority items
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search POs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending_approval">
                    Pending Approval
                  </SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={selectedPriority}
                onValueChange={setSelectedPriority}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="orderDate">Order Date</SelectItem>
                  <SelectItem value="totalAmount">Total Amount</SelectItem>
                  <SelectItem value="expectedDelivery">
                    Expected Delivery
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Purchase Orders</CardTitle>
            <CardDescription>
              Showing {filteredPOs.length} of {purchaseOrders.length} purchase
              orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPOs.map((po) => (
                <div
                  key={po.id}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(po.status)}
                      <div>
                        <h3 className="font-semibold">{po.poNumber}</h3>
                        <p className="text-sm text-muted-foreground">
                          {po.supplier}
                        </p>
                      </div>
                      {getStatusBadge(po.status)}
                      {getPriorityBadge(po.priority)}
                      {po.createdBy === "ai" && (
                        <Badge variant="outline" className="text-xs">
                          AI Generated
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Total Amount
                        </p>
                        <p className="font-medium">
                          ${po.totalAmount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Order Date
                        </p>
                        <p className="font-medium text-sm">
                          {formatDate(po.orderDate)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Expected Delivery
                        </p>
                        <p className="font-medium text-sm">
                          {formatDate(po.expectedDelivery)}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Approver
                        </p>
                        <p className="font-medium text-sm">{po.approver}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Items</p>
                        <p className="font-medium">
                          {po.items.length} item
                          {po.items.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>

                    {/* Items Summary */}
                    <div className="space-y-2">
                      {po.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm bg-muted/30 p-2 rounded"
                        >
                          <span>
                            {item.productName} ({item.sku})
                          </span>
                          <span className="font-medium">
                            {item.quantity} × ${item.unitPrice} = $
                            {item.totalPrice.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>

                    {po.notes && (
                      <div className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                        <strong>Notes:</strong> {po.notes}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    {po.status === "draft" && (
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                    )}
                    {po.status === "pending_approval" && (
                      <Button
                        size="sm"
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                    )}
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
