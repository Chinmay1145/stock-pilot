import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { dashboardData } from "@/lib/dashboard-data";
import { 
  Package, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  Search,
  Download,
  RefreshCw,
  Plus,
  Edit,
  Eye,
  Warehouse,
  DollarSign,
  Calendar,
  Filter
} from "lucide-react";

interface InventoryItem {
  sku: string;
  productName: string;
  currentStock: number;
  minStockLevel: number;
  maxStockLevel: number;
  daysOfStock: number;
  inventoryValue: number;
  lastRestocked: string;
  location: string;
  category: string;
  supplier: string;
  unitCost: number;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstock';
  movement: 'up' | 'down' | 'stable';
  salesVelocity: number;
}

const mockInventory: InventoryItem[] = [
  {
    sku: 'TECH-001',
    productName: 'Wireless Headphones Pro',
    currentStock: 245,
    minStockLevel: 50,
    maxStockLevel: 500,
    daysOfStock: 18,
    inventoryValue: 12250,
    lastRestocked: '2024-01-10T00:00:00Z',
    location: 'Warehouse A',
    category: 'Electronics',
    supplier: 'TechSupply Co.',
    unitCost: 50,
    status: 'in_stock',
    movement: 'down',
    salesVelocity: 13.6
  },
  {
    sku: 'FASH-002',
    productName: 'Premium Cotton T-Shirt',
    currentStock: 89,
    minStockLevel: 100,
    maxStockLevel: 300,
    daysOfStock: 12,
    inventoryValue: 1780,
    lastRestocked: '2024-01-12T00:00:00Z',
    location: 'Warehouse B',
    category: 'Fashion',
    supplier: 'Fashion Direct',
    unitCost: 20,
    status: 'low_stock',
    movement: 'down',
    salesVelocity: 7.4
  },
  {
    sku: 'HOME-003',
    productName: 'Smart LED Bulb',
    currentStock: 456,
    minStockLevel: 75,
    maxStockLevel: 400,
    daysOfStock: 45,
    inventoryValue: 6840,
    lastRestocked: '2024-01-08T00:00:00Z',
    location: 'Warehouse A',
    category: 'Home',
    supplier: 'SmartHome Inc.',
    unitCost: 15,
    status: 'overstock',
    movement: 'stable',
    salesVelocity: 10.1
  },
  {
    sku: 'TECH-004',
    productName: 'Bluetooth Speaker',
    currentStock: 178,
    minStockLevel: 80,
    maxStockLevel: 350,
    daysOfStock: 14,
    inventoryValue: 13340,
    lastRestocked: '2024-01-14T00:00:00Z',
    location: 'Warehouse C',
    category: 'Electronics',
    supplier: 'AudioTech Ltd.',
    unitCost: 75,
    status: 'in_stock',
    movement: 'up',
    salesVelocity: 12.7
  },
  {
    sku: 'FASH-005',
    productName: 'Denim Jeans Classic',
    currentStock: 0,
    minStockLevel: 40,
    maxStockLevel: 200,
    daysOfStock: 0,
    inventoryValue: 0,
    lastRestocked: '2024-01-05T00:00:00Z',
    location: 'Warehouse B',
    category: 'Fashion',
    supplier: 'Denim Factory',
    unitCost: 45,
    status: 'out_of_stock',
    movement: 'down',
    salesVelocity: 0
  },
  {
    sku: 'HOME-006',
    productName: 'Kitchen Knife Set',
    currentStock: 67,
    minStockLevel: 25,
    maxStockLevel: 150,
    daysOfStock: 22,
    inventoryValue: 6700,
    lastRestocked: '2024-01-11T00:00:00Z',
    location: 'Warehouse A',
    category: 'Home',
    supplier: 'Kitchen Pro',
    unitCost: 100,
    status: 'in_stock',
    movement: 'stable',
    salesVelocity: 3.0
  }
];

export default function DashboardInventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortBy, setSortBy] = useState('daysOfStock');

  useEffect(() => {
    loadInventoryData();
  }, []);

  const loadInventoryData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setInventory(mockInventory);
    } catch (error) {
      console.error('Failed to load inventory data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Simulate stock changes
      const updatedInventory = mockInventory.map(item => ({
        ...item,
        currentStock: Math.max(0, item.currentStock + Math.floor((Math.random() - 0.5) * 20)),
        daysOfStock: Math.max(0, item.daysOfStock + Math.floor((Math.random() - 0.5) * 5))
      }));
      setInventory(updatedInventory);
    } catch (error) {
      console.error('Failed to refresh data:', error);
    } finally {
      setRefreshing(false);
    }
  };

  const filteredInventory = inventory
    .filter(item => 
      item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => selectedLocation === 'all' || item.location === selectedLocation)
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .filter(item => selectedStatus === 'all' || item.status === selectedStatus)
    .sort((a, b) => {
      switch (sortBy) {
        case 'daysOfStock':
          return a.daysOfStock - b.daysOfStock;
        case 'currentStock':
          return b.currentStock - a.currentStock;
        case 'inventoryValue':
          return b.inventoryValue - a.inventoryValue;
        case 'salesVelocity':
          return b.salesVelocity - a.salesVelocity;
        default:
          return 0;
      }
    });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in_stock': return <Badge variant="success">In Stock</Badge>;
      case 'low_stock': return <Badge variant="warning">Low Stock</Badge>;
      case 'out_of_stock': return <Badge variant="destructive">Out of Stock</Badge>;
      case 'overstock': return <Badge variant="secondary">Overstock</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getMovementIcon = (movement: string) => {
    switch (movement) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      default: return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const locations = Array.from(new Set(inventory.map(item => item.location)));
  const categories = Array.from(new Set(inventory.map(item => item.category)));
  
  const totalValue = inventory.reduce((sum, item) => sum + item.inventoryValue, 0);
  const lowStockItems = inventory.filter(item => item.status === 'low_stock' || item.status === 'out_of_stock').length;
  const overstockItems = inventory.filter(item => item.status === 'overstock').length;
  const avgDaysOfStock = inventory.reduce((sum, item) => sum + item.daysOfStock, 0) / inventory.length;

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <LoadingSpinner size="lg" text="Loading inventory..." />
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
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Package className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
              <p className="text-muted-foreground">
                Real-time stock levels and inventory optimization
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={refreshing}>
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Item
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
                  <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                  <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Current inventory value
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low/Out Stock</p>
                  <p className="text-2xl font-bold">{lowStockItems}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Items needing attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Overstock</p>
                  <p className="text-2xl font-bold">{overstockItems}</p>
                </div>
                <Warehouse className="h-8 w-8 text-warning" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Excess inventory items
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Days Stock</p>
                  <p className="text-2xl font-bold">{avgDaysOfStock.toFixed(0)}</p>
                </div>
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Average days of stock
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search inventory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="in_stock">In Stock</SelectItem>
                  <SelectItem value="low_stock">Low Stock</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                  <SelectItem value="overstock">Overstock</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daysOfStock">Days of Stock</SelectItem>
                  <SelectItem value="currentStock">Current Stock</SelectItem>
                  <SelectItem value="inventoryValue">Inventory Value</SelectItem>
                  <SelectItem value="salesVelocity">Sales Velocity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Table */}
        <Card>
          <CardHeader>
            <CardTitle>Inventory Items</CardTitle>
            <CardDescription>
              Showing {filteredInventory.length} of {inventory.length} items
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredInventory.map((item) => (
                <div
                  key={item.sku}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 space-y-2 lg:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div>
                        <h3 className="font-semibold">{item.productName}</h3>
                        <p className="text-sm text-muted-foreground">{item.sku}</p>
                      </div>
                      <Badge variant="outline">{item.category}</Badge>
                      {getStatusBadge(item.status)}
                      {getMovementIcon(item.movement)}
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mt-3 lg:mt-0">
                      <div>
                        <p className="text-xs text-muted-foreground">Current Stock</p>
                        <p className="font-medium">{item.currentStock}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Days of Stock</p>
                        <p className="font-medium">{item.daysOfStock}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Min/Max</p>
                        <p className="font-medium text-xs">{item.minStockLevel}/{item.maxStockLevel}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Value</p>
                        <p className="font-medium">${item.inventoryValue.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="font-medium text-xs">{item.location}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Velocity</p>
                        <p className="font-medium">{item.salesVelocity}/day</p>
                      </div>
                    </div>

                    {/* Stock Level Progress */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Stock Level</span>
                        <span>{item.currentStock}/{item.maxStockLevel}</span>
                      </div>
                      <Progress 
                        value={(item.currentStock / item.maxStockLevel) * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
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
