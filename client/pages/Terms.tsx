import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <FileText className="h-4 w-4 mr-2" />
            Terms of Service
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            These terms govern your use of StockPilot and outline our mutual rights and responsibilities.
          </p>
          <div className="flex items-center justify-center text-muted-foreground text-sm gap-2">
            <Calendar className="h-4 w-4" />
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            
            <Card className="border-border">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing or using StockPilot ("Service"), you agree to be bound by these Terms of Service 
                  ("Terms"). If you disagree with any part of these terms, you may not access the Service. 
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>2. Description of Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StockPilot is a software-as-a-service platform that provides AI-powered demand forecasting, 
                  inventory optimization, and purchase order automation tools for businesses. The Service includes 
                  web applications, APIs, integrations, and related services provided by StockPilot, Inc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>3. User Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Account Creation</h4>
                  <p className="text-muted-foreground">
                    You must provide accurate, complete, and current information when creating your account. 
                    You are responsible for safeguarding your account credentials and for all activities under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Account Responsibilities</h4>
                  <p className="text-muted-foreground">
                    You agree to notify us immediately of any unauthorized use of your account. We will not be 
                    liable for any loss arising from unauthorized use of your account.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>4. Acceptable Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Permitted Use</h4>
                  <p className="text-muted-foreground">
                    You may use the Service only for lawful purposes and in accordance with these Terms. 
                    You agree to use the Service only for your internal business operations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prohibited Activities</h4>
                  <p className="text-muted-foreground mb-2">You agree not to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Use the Service for any illegal or unauthorized purpose</li>
                    <li>Attempt to gain unauthorized access to the Service or related systems</li>
                    <li>Reverse engineer, decompile, or disassemble the Service</li>
                    <li>Use the Service to compete with us or create a similar service</li>
                    <li>Share your account credentials with unauthorized parties</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>5. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Subscription Fees</h4>
                  <p className="text-muted-foreground">
                    Paid plans are billed in advance on a monthly or annual basis. All fees are non-refundable 
                    except as required by law or as specifically stated in these Terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free Trial</h4>
                  <p className="text-muted-foreground">
                    We offer a 14-day free trial for new accounts. No payment information is required to start 
                    your trial. Your trial will automatically end after 14 days unless you upgrade to a paid plan.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Late Payment</h4>
                  <p className="text-muted-foreground">
                    We may suspend or terminate your access to the Service if payment is not received within 
                    7 days of the due date.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>6. Data and Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Data</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of all data you provide to the Service. We will only use your data 
                    to provide the Service and as described in our Privacy Policy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Security</h4>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your data. 
                    However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Intellectual Property</h4>
                  <p className="text-muted-foreground">
                    The Service and its original content, features, and functionality are owned by StockPilot, Inc. 
                    and are protected by international copyright, trademark, patent, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">License to Use</h4>
                  <p className="text-muted-foreground">
                    We grant you a limited, non-exclusive, non-transferable license to use the Service for 
                    your internal business purposes in accordance with these Terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>8. Service Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive to maintain high availability but do not guarantee uninterrupted access to the Service. 
                  We may experience downtime for maintenance, updates, or unforeseen technical issues. We will 
                  provide advance notice of planned maintenance when possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, STOCKPILOT SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, 
                  WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER 
                  INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>10. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Termination by You</h4>
                  <p className="text-muted-foreground">
                    You may terminate your account at any time through your account settings or by contacting us. 
                    Termination will be effective at the end of your current billing period.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Termination by Us</h4>
                  <p className="text-muted-foreground">
                    We may terminate or suspend your account immediately if you breach these Terms or for any 
                    other reason at our sole discretion, with or without notice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. If we make material changes, 
                  we will notify you by email or through the Service. Your continued use of the Service 
                  after such modifications constitutes acceptance of the updated Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>12. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of 
                  California, without regard to its conflict of law provisions. Any legal action or proceeding 
                  arising under these Terms will be brought exclusively in the courts of California.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@stockpilot.ai</p>
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
