import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Status from "./pages/Status";
import Integrations from "./pages/Integrations";
import ApiDocs from "./pages/ApiDocs";
import Docs from "./pages/Docs";
import Dashboard from "./pages/Dashboard";
import DashboardForecasts from "./pages/DashboardForecasts";
import DashboardInventory from "./pages/DashboardInventory";
import DashboardPurchaseOrders from "./pages/DashboardPurchaseOrders";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardReports from "./pages/DashboardReports";
import DashboardAlerts from "./pages/DashboardAlerts";
import DashboardTeam from "./pages/DashboardTeam";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardIntegrations from "./pages/DashboardIntegrations";
import Onboarding from "./pages/Onboarding";
import { DashboardSubPage } from "./components/DashboardSubPage";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <ThemeProvider defaultTheme="system" storageKey="stockpilot-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/forecasts"
              element={<DashboardForecasts />}
            />
            <Route
              path="/dashboard/inventory"
              element={<DashboardInventory />}
            />
            <Route
              path="/dashboard/purchase-orders"
              element={<DashboardPurchaseOrders />}
            />
            <Route
              path="/dashboard/analytics"
              element={<DashboardAnalytics />}
            />
            <Route path="/dashboard/reports" element={<DashboardReports />} />
            <Route path="/dashboard/alerts" element={<DashboardAlerts />} />
            <Route path="/dashboard/team" element={<DashboardTeam />} />
            <Route path="/dashboard/settings" element={<DashboardSettings />} />
            <Route
              path="/dashboard/integrations"
              element={<DashboardIntegrations />}
            />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/api" element={<ApiDocs />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/help" element={<Help />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/status" element={<Status />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

// Prevent multiple root creation during hot module replacement
const container = document.getElementById("root")!;

// Check if root already exists
let root = (container as any)._reactRoot;

if (!root) {
  root = createRoot(container);
  (container as any)._reactRoot = root;
}

root.render(<App />);
