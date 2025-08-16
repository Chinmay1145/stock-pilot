import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'founder' | 'ops_manager' | 'finance' | 'inventory_manager' | 'analyst';

interface UserRoleContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  permissions: string[];
  isLoading: boolean;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export function useUserRole() {
  const context = useContext(UserRoleContext);
  if (context === undefined) {
    throw new Error('useUserRole must be used within a UserRoleProvider');
  }
  return context;
}

const rolePermissions: Record<UserRole, string[]> = {
  founder: [
    'full_access',
    'analytics',
    'forecasts',
    'inventory',
    'purchase_orders',
    'reports',
    'alerts',
    'team_management',
    'settings',
    'integrations',
    'financial_overview'
  ],
  ops_manager: [
    'analytics',
    'forecasts',
    'inventory',
    'purchase_orders',
    'reports',
    'alerts',
    'operational_metrics'
  ],
  finance: [
    'analytics',
    'reports',
    'purchase_orders',
    'financial_overview',
    'cost_analysis',
    'budget_tracking'
  ],
  inventory_manager: [
    'forecasts',
    'inventory',
    'purchase_orders',
    'alerts',
    'stock_management'
  ],
  analyst: [
    'analytics',
    'forecasts',
    'reports',
    'data_insights'
  ]
};

interface UserRoleProviderProps {
  children: React.ReactNode;
}

export function UserRoleProvider({ children }: UserRoleProviderProps) {
  const [userRole, setUserRole] = useState<UserRole>('founder');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user role from localStorage or API
    const savedUserInfo = localStorage.getItem('stockpilot-user-info');
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        if (userInfo.role && rolePermissions[userInfo.role as UserRole]) {
          setUserRole(userInfo.role as UserRole);
        }
      } catch (error) {
        console.error('Failed to parse user info:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleSetUserRole = (role: UserRole) => {
    setUserRole(role);
    // Update localStorage
    const savedUserInfo = localStorage.getItem('stockpilot-user-info');
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        userInfo.role = role;
        localStorage.setItem('stockpilot-user-info', JSON.stringify(userInfo));
      } catch (error) {
        console.error('Failed to update user info:', error);
      }
    }
  };

  const permissions = rolePermissions[userRole] || [];

  return (
    <UserRoleContext.Provider
      value={{
        userRole,
        setUserRole: handleSetUserRole,
        permissions,
        isLoading
      }}
    >
      {children}
    </UserRoleContext.Provider>
  );
}
