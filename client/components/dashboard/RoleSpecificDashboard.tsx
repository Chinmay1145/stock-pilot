import { useUserRole } from "@/contexts/UserRoleContext";
import { FounderDashboard } from "./FounderDashboard";
import { OpsManagerDashboard } from "./OpsManagerDashboard";
import { FinanceDashboard } from "./FinanceDashboard";
import { InventoryManagerDashboard } from "./InventoryManagerDashboard";
import { AnalystDashboard } from "./AnalystDashboard";

export function RoleSpecificDashboard() {
  const { userRole, isLoading } = useUserRole();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  switch (userRole) {
    case 'founder':
      return <FounderDashboard />;
    case 'ops_manager':
      return <OpsManagerDashboard />;
    case 'finance':
      return <FinanceDashboard />;
    case 'inventory_manager':
      return <InventoryManagerDashboard />;
    case 'analyst':
      return <AnalystDashboard />;
    default:
      return <FounderDashboard />; // Fallback
  }
}
