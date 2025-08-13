import { Card } from "@/components/ui/card";

export function CustomerLogos() {
  const customers = [
    { name: "TechStyle Fashion", logo: "🏢" },
    { name: "GrowthCo", logo: "📈" },
    { name: "EcoLiving", logo: "🌱" },
    { name: "TechHub Electronics", logo: "⚡" },
    { name: "MedSupply Corp", logo: "🏥" },
    { name: "Fashion Forward", logo: "👗" },
    { name: "Smart Retail", logo: "🛍️" },
    { name: "Global Goods", logo: "🌍" },
    { name: "Urban Outfitters", logo: "🏙️" },
    { name: "Digital Dynamics", logo: "💻" },
    { name: "Creative Commerce", logo: "🎨" },
    { name: "Future Foods", logo: "🍽️" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by Leading Brands
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-8 items-center">
            {/* First set */}
            {customers.map((customer, index) => (
              <Card
                key={`first-${index}`}
                className="flex-shrink-0 border-border/30 bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="flex items-center space-x-3 p-4 min-w-[200px]">
                  <div className="text-2xl">{customer.logo}</div>
                  <span className="font-medium text-foreground text-sm whitespace-nowrap">
                    {customer.name}
                  </span>
                </div>
              </Card>
            ))}
            {/* Duplicate set for seamless loop */}
            {customers.map((customer, index) => (
              <Card
                key={`second-${index}`}
                className="flex-shrink-0 border-border/30 bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="flex items-center space-x-3 p-4 min-w-[200px]">
                  <div className="text-2xl">{customer.logo}</div>
                  <span className="font-medium text-foreground text-sm whitespace-nowrap">
                    {customer.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join 500+ growing businesses optimizing their inventory with
            StockPilot
          </p>
        </div>
      </div>
    </section>
  );
}
