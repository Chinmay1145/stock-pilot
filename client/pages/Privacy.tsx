import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Policy
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Your privacy is our priority
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            We're committed to protecting your personal information and being transparent about how we use it.
          </p>
          <div className="flex items-center justify-center text-muted-foreground text-sm gap-2">
            <Calendar className="h-4 w-4" />
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    When you sign up for StockPilot, we collect information such as your name, email address, 
                    company name, and billing information. This information is necessary to provide our services 
                    and communicate with you about your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Data</h4>
                  <p className="text-muted-foreground">
                    To provide demand forecasting services, we collect and process your inventory data, 
                    sales history, and product information. This data is used solely to generate forecasts 
                    and insights for your business.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Usage Information</h4>
                  <p className="text-muted-foreground">
                    We automatically collect information about how you use our service, including features accessed, 
                    time spent, and technical data like IP addresses and browser information to improve our service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Provision</h4>
                  <p className="text-muted-foreground">
                    We use your information to provide StockPilot services, including generating demand forecasts, 
                    processing purchase orders, and enabling Slack integrations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                  <p className="text-muted-foreground">
                    We may send you service-related notifications, product updates, and marketing communications 
                    (which you can opt out of at any time).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Improvement and Analytics</h4>
                  <p className="text-muted-foreground">
                    We analyze usage patterns to improve our service, develop new features, and ensure 
                    optimal performance and security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">We Don't Sell Your Data</h4>
                  <p className="text-muted-foreground">
                    We never sell, rent, or trade your personal information or business data to third parties.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                  <p className="text-muted-foreground">
                    We may share information with trusted service providers who help us operate our service, 
                    such as cloud hosting providers and payment processors. These providers are bound by 
                    strict confidentiality agreements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                  <p className="text-muted-foreground">
                    We may disclose information if required by law or to protect our rights, property, 
                    or safety, or that of our users or others.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Encryption</h4>
                  <p className="text-muted-foreground">
                    All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. 
                    We follow industry best practices for data security.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access Controls</h4>
                  <p className="text-muted-foreground">
                    We implement strict access controls and regularly audit who has access to what data. 
                    Our team receives regular security training.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Infrastructure</h4>
                  <p className="text-muted-foreground">
                    Our infrastructure is hosted on secure, SOC 2 compliant cloud providers with 
                    regular security assessments and monitoring.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>5. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access and Portability</h4>
                  <p className="text-muted-foreground">
                    You can access and export your data at any time through your account settings or 
                    by contacting our support team.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Correction and Deletion</h4>
                  <p className="text-muted-foreground">
                    You can update or delete your personal information through your account. 
                    Upon account deletion, we will delete your data within 30 days.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Marketing Opt-out</h4>
                  <p className="text-muted-foreground">
                    You can unsubscribe from marketing communications at any time using the 
                    unsubscribe link in emails or through your account preferences.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>6. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We retain your information for as long as your account is active or as needed to provide 
                  services. We will delete your data within 30 days of account closure, except where we 
                  are required by law to retain certain information for longer periods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StockPilot is based in the United States. If you are located outside the US, 
                  your information will be transferred to and processed in the US. We ensure appropriate 
                  safeguards are in place for international transfers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StockPilot is not intended for use by children under 16. We do not knowingly collect 
                  personal information from children under 16. If we become aware that we have collected 
                  such information, we will delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by email or through our service. The "Last updated" date at the 
                  top of this policy indicates when it was last revised.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@stockpilot.ai</p>
                  <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
