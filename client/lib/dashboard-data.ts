// Types for dashboard data
export interface InventoryMetric {
  id: string;
  sku: string;
  productName: string;
  currentStock: number;
  forecastedDemand: number;
  daysOfStock: number;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'overstock';
  lastUpdated: string;
  category: string;
  supplier: string;
  cost: number;
  revenue: number;
}

export interface ForecastData {
  id: string;
  sku: string;
  week: string;
  predictedDemand: number;
  confidence: number;
  lowerBound: number;
  upperBound: number;
  actualDemand?: number;
  accuracy?: number;
}

export interface PurchaseOrderData {
  id: string;
  sku: string;
  productName: string;
  quantity: number;
  cost: number;
  supplier: string;
  status: 'pending' | 'approved' | 'ordered' | 'received' | 'cancelled';
  createdAt: string;
  expectedDelivery: string;
  approvedBy?: string;
  notes?: string;
}

export interface AlertData {
  id: string;
  type: 'stockout' | 'low_stock' | 'overstock' | 'forecast_accuracy' | 'supplier_delay';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  sku?: string;
  productName?: string;
  createdAt: string;
  acknowledged: boolean;
  actionRequired: boolean;
}

export interface DashboardStats {
  totalRevenue: number;
  totalCost: number;
  grossMargin: number;
  totalSKUs: number;
  outOfStockSKUs: number;
  lowStockSKUs: number;
  averageForecastAccuracy: number;
  totalPurchaseOrders: number;
  pendingApprovals: number;
  stockoutsPrevented: number;
  workingCapitalSaved: number;
}

// Mock data generators
export function generateMockInventoryData(): InventoryMetric[] {
  const products = [
    { sku: 'TECH-001', name: 'Wireless Headphones Pro', category: 'Electronics', supplier: 'TechCorp' },
    { sku: 'FASH-002', name: 'Premium Cotton T-Shirt', category: 'Apparel', supplier: 'FashionCo' },
    { sku: 'HOME-003', name: 'Smart LED Bulb', category: 'Home', supplier: 'SmartHome Inc' },
    { sku: 'TECH-004', name: 'Bluetooth Speaker', category: 'Electronics', supplier: 'AudioTech' },
    { sku: 'FASH-005', name: 'Denim Jeans Classic', category: 'Apparel', supplier: 'DenimWorks' },
    { sku: 'HOME-006', name: 'Coffee Maker Deluxe', category: 'Home', supplier: 'KitchenPro' },
    { sku: 'TECH-007', name: 'Smartphone Case', category: 'Electronics', supplier: 'AccessoryPlus' },
    { sku: 'FASH-008', name: 'Winter Jacket', category: 'Apparel', supplier: 'WinterWear' },
    { sku: 'HOME-009', name: 'Air Purifier', category: 'Home', supplier: 'CleanAir Co' },
    { sku: 'TECH-010', name: 'Laptop Stand', category: 'Electronics', supplier: 'WorkSpace' },
  ];

  return products.map((product, index) => {
    const currentStock = Math.floor(Math.random() * 500) + 10;
    const forecastedDemand = Math.floor(Math.random() * 100) + 20;
    const daysOfStock = Math.floor(currentStock / (forecastedDemand / 7));
    
    let status: InventoryMetric['status'] = 'in_stock';
    if (currentStock === 0) status = 'out_of_stock';
    else if (daysOfStock < 7) status = 'low_stock';
    else if (daysOfStock > 60) status = 'overstock';

    return {
      id: `inv-${index + 1}`,
      sku: product.sku,
      productName: product.name,
      currentStock,
      forecastedDemand,
      daysOfStock,
      status,
      lastUpdated: new Date(Date.now() - Math.random() * 86400000).toISOString(),
      category: product.category,
      supplier: product.supplier,
      cost: Math.floor(Math.random() * 50) + 10,
      revenue: Math.floor(Math.random() * 100) + 30,
    };
  });
}

export function generateMockForecastData(): ForecastData[] {
  const skus = ['TECH-001', 'FASH-002', 'HOME-003', 'TECH-004', 'FASH-005'];
  const data: ForecastData[] = [];

  skus.forEach((sku, skuIndex) => {
    for (let week = 0; week < 12; week++) {
      const date = new Date();
      date.setDate(date.getDate() + week * 7);
      
      const baseDemand = 50 + skuIndex * 10;
      const seasonality = Math.sin((week / 52) * 2 * Math.PI) * 10;
      const noise = (Math.random() - 0.5) * 20;
      const predictedDemand = Math.max(0, Math.floor(baseDemand + seasonality + noise));
      
      const confidence = 0.85 + Math.random() * 0.1;
      const variance = predictedDemand * (1 - confidence) * 0.5;

      data.push({
        id: `forecast-${sku}-${week}`,
        sku,
        week: date.toISOString().split('T')[0],
        predictedDemand,
        confidence,
        lowerBound: Math.floor(predictedDemand - variance),
        upperBound: Math.floor(predictedDemand + variance),
        actualDemand: week < 4 ? Math.floor(predictedDemand + (Math.random() - 0.5) * 10) : undefined,
        accuracy: week < 4 ? 0.9 + Math.random() * 0.08 : undefined,
      });
    }
  });

  return data;
}

export function generateMockPurchaseOrders(): PurchaseOrderData[] {
  const products = [
    { sku: 'TECH-001', name: 'Wireless Headphones Pro', supplier: 'TechCorp' },
    { sku: 'FASH-002', name: 'Premium Cotton T-Shirt', supplier: 'FashionCo' },
    { sku: 'HOME-003', name: 'Smart LED Bulb', supplier: 'SmartHome Inc' },
    { sku: 'TECH-004', name: 'Bluetooth Speaker', supplier: 'AudioTech' },
    { sku: 'FASH-005', name: 'Denim Jeans Classic', supplier: 'DenimWorks' },
  ];

  const statuses: PurchaseOrderData['status'][] = ['pending', 'approved', 'ordered', 'received', 'cancelled'];

  return products.map((product, index) => {
    const quantity = Math.floor(Math.random() * 500) + 100;
    const cost = (Math.floor(Math.random() * 30) + 10) * quantity;
    const createdAt = new Date(Date.now() - Math.random() * 30 * 86400000);
    const expectedDelivery = new Date(createdAt.getTime() + (7 + Math.random() * 14) * 86400000);

    return {
      id: `po-${index + 1}`,
      sku: product.sku,
      productName: product.name,
      quantity,
      cost,
      supplier: product.supplier,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: createdAt.toISOString(),
      expectedDelivery: expectedDelivery.toISOString(),
      approvedBy: Math.random() > 0.5 ? 'John Doe' : 'Sarah Smith',
      notes: Math.random() > 0.7 ? 'Urgent order - low stock levels' : undefined,
    };
  });
}

export function generateMockAlerts(): AlertData[] {
  const alerts = [
    {
      type: 'stockout' as const,
      severity: 'critical' as const,
      title: 'Critical Stockout Alert',
      description: 'Wireless Headphones Pro is completely out of stock',
      sku: 'TECH-001',
      productName: 'Wireless Headphones Pro',
      actionRequired: true,
    },
    {
      type: 'low_stock' as const,
      severity: 'high' as const,
      title: 'Low Stock Warning',
      description: 'Premium Cotton T-Shirt has only 3 days of stock remaining',
      sku: 'FASH-002',
      productName: 'Premium Cotton T-Shirt',
      actionRequired: true,
    },
    {
      type: 'forecast_accuracy' as const,
      severity: 'medium' as const,
      title: 'Forecast Accuracy Drop',
      description: 'Smart LED Bulb forecast accuracy dropped to 82%',
      sku: 'HOME-003',
      productName: 'Smart LED Bulb',
      actionRequired: false,
    },
    {
      type: 'supplier_delay' as const,
      severity: 'high' as const,
      title: 'Supplier Delay',
      description: 'TechCorp shipment delayed by 5 days',
      actionRequired: true,
    },
    {
      type: 'overstock' as const,
      severity: 'low' as const,
      title: 'Overstock Notice',
      description: 'Air Purifier has 90+ days of stock',
      sku: 'HOME-009',
      productName: 'Air Purifier',
      actionRequired: false,
    },
  ];

  return alerts.map((alert, index) => ({
    id: `alert-${index + 1}`,
    ...alert,
    createdAt: new Date(Date.now() - Math.random() * 7 * 86400000).toISOString(),
    acknowledged: Math.random() > 0.6,
  }));
}

export function generateMockDashboardStats(): DashboardStats {
  return {
    totalRevenue: 2485000,
    totalCost: 1490000,
    grossMargin: 40.04,
    totalSKUs: 2847,
    outOfStockSKUs: 23,
    lowStockSKUs: 127,
    averageForecastAccuracy: 94.2,
    totalPurchaseOrders: 156,
    pendingApprovals: 12,
    stockoutsPrevented: 89,
    workingCapitalSaved: 485000,
  };
}

// Data management utilities
export class DashboardDataManager {
  private static instance: DashboardDataManager;
  private data: {
    inventory: InventoryMetric[];
    forecasts: ForecastData[];
    purchaseOrders: PurchaseOrderData[];
    alerts: AlertData[];
    stats: DashboardStats;
  };

  private constructor() {
    this.data = {
      inventory: generateMockInventoryData(),
      forecasts: generateMockForecastData(),
      purchaseOrders: generateMockPurchaseOrders(),
      alerts: generateMockAlerts(),
      stats: generateMockDashboardStats(),
    };
  }

  static getInstance(): DashboardDataManager {
    if (!DashboardDataManager.instance) {
      DashboardDataManager.instance = new DashboardDataManager();
    }
    return DashboardDataManager.instance;
  }

  // Inventory methods
  getInventoryData(): InventoryMetric[] {
    return this.data.inventory;
  }

  getInventoryBySKU(sku: string): InventoryMetric | undefined {
    return this.data.inventory.find(item => item.sku === sku);
  }

  updateInventoryStock(sku: string, newStock: number): void {
    const item = this.data.inventory.find(inv => inv.sku === sku);
    if (item) {
      item.currentStock = newStock;
      item.lastUpdated = new Date().toISOString();
      // Recalculate status
      const daysOfStock = Math.floor(newStock / (item.forecastedDemand / 7));
      if (newStock === 0) item.status = 'out_of_stock';
      else if (daysOfStock < 7) item.status = 'low_stock';
      else if (daysOfStock > 60) item.status = 'overstock';
      else item.status = 'in_stock';
    }
  }

  // Forecast methods
  getForecastData(sku?: string): ForecastData[] {
    if (sku) {
      return this.data.forecasts.filter(forecast => forecast.sku === sku);
    }
    return this.data.forecasts;
  }

  // Purchase order methods
  getPurchaseOrders(): PurchaseOrderData[] {
    return this.data.purchaseOrders;
  }

  approvePurchaseOrder(id: string, approvedBy: string): void {
    const po = this.data.purchaseOrders.find(order => order.id === id);
    if (po && po.status === 'pending') {
      po.status = 'approved';
      po.approvedBy = approvedBy;
    }
  }

  // Alert methods
  getAlerts(unacknowledgedOnly: boolean = false): AlertData[] {
    if (unacknowledgedOnly) {
      return this.data.alerts.filter(alert => !alert.acknowledged);
    }
    return this.data.alerts;
  }

  acknowledgeAlert(id: string): void {
    const alert = this.data.alerts.find(a => a.id === id);
    if (alert) {
      alert.acknowledged = true;
    }
  }

  // Stats methods
  getStats(): DashboardStats {
    return this.data.stats;
  }

  // Refresh data (simulate API call)
  async refreshData(): Promise<void> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate new data
    this.data = {
      inventory: generateMockInventoryData(),
      forecasts: generateMockForecastData(),
      purchaseOrders: generateMockPurchaseOrders(),
      alerts: generateMockAlerts(),
      stats: generateMockDashboardStats(),
    };
  }
}

// Export singleton instance
export const dashboardData = DashboardDataManager.getInstance();
