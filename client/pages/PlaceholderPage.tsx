import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '').replace(/-/g, ' ');
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center space-y-6 px-4">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <Construction className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              {formattedPageName || "Page"} Coming Soon
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              This page is currently under construction. We're working hard to bring you an amazing experience.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Want to see this page completed? Continue prompting to have it built!
            </p>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
