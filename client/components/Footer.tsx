import { Link } from "react-router-dom";
import { TrendingUp, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">StockPilot</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Forecast SKU-level demand, prevent stockouts, and automate PO approvals via Slack.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/features" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/integrations" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link 
                  to="/api" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/help" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/docs" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/status" 
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground text-sm">
                © 2024 StockPilot, Inc. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 bg-success rounded-full"></span>
                <span>All systems operational</span>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/status"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                System Status
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
            <div className="flex space-x-4 mb-2 md:mb-0">
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
            <div>
              Made with ❤️ in San Francisco
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
