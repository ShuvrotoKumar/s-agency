import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Starter",
    price: "$100",
    period: "/month",
    description: "Perfect for small brands just getting started",
    features: [
      "8 posts per month",
      "1 social platform",
      "Basic content calendar",
      "Community management",
      "Monthly analytics report",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$140",
    period: "/month",
    description: "Ideal for growing brands ready to scale",
    features: [
      "16 posts per month",
      "2 social platforms",
      "Advanced content calendar",
      "Priority community management",
      "Bi-weekly analytics reports",
      "Story content included",
      "Hashtag strategy",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$200",
    period: "/month",
    description: "For established brands seeking maximum growth",
    features: [
      "32 posts per month",
      "3 social platforms",
      "Premium content calendar",
      "Dedicated account manager",
      "Weekly analytics reports",
      "Stories & Reels included",
      "Custom strategy sessions",
      "Influencer outreach",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your brand. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-elegant transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-glow scale-105 md:scale-110"
                  : "hover:-translate-y-2"
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1 shadow-glow">
                    <Star className="w-3 h-3 mr-1 inline" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
