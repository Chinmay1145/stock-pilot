import { DashboardLayout } from "@/components/DashboardLayout";
import { OnboardingProgress } from "@/components/OnboardingProgress";
import { RoleSpecificDashboard } from "@/components/dashboard/RoleSpecificDashboard";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Onboarding Progress */}
        <OnboardingProgress />

        {/* Role-Specific Dashboard Content */}
        <RoleSpecificDashboard />
      </div>
    </DashboardLayout>
  );
}
