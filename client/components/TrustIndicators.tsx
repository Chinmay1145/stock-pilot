import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, CheckCircle, Award, Globe, Users } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      label: "SOC 2 Type II",
      description: "Security & Privacy Certified",
    },
    {
      icon: Lock,
      label: "256-bit SSL",
      description: "Bank-level Encryption",
    },
    {
      icon: CheckCircle,
      label: "GDPR Compliant",
      description: "EU Privacy Standards",
    },
    {
      icon: Award,
      label: "ISO 27001",
      description: "Information Security",
    },
    {
      icon: Globe,
      label: "99.9% Uptime",
      description: "Enterprise SLA",
    },
    {
      icon: Users,
      label: "500+ Customers",
      description: "Trusted Worldwide",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Enterprise-Grade Security & Compliance
          </h3>
          <p className="text-muted-foreground text-sm">
            Your data is protected by industry-leading security standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {indicators.map((indicator, index) => (
            <Card
              key={index}
              className="border-border/50 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                  <indicator.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs font-semibold text-foreground mb-1">
                  {indicator.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {indicator.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
