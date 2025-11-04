import { Store, Briefcase, Heart, Utensils, Dumbbell, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const clients = [
  {
    icon: Store,
    title: "E-commerce Brands",
    description: "Drive sales with content that converts browsers into buyers.",
  },
  {
    icon: Briefcase,
    title: "B2B Companies",
    description: "Establish thought leadership and generate quality leads.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Build trust and inspire your community to take action.",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Showcase your menu and attract hungry customers daily.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Coaching",
    description: "Motivate and grow your client base with authentic content.",
  },
  {
    icon: Sparkles,
    title: "Beauty & Fashion",
    description: "Create scroll-stopping content that showcases your style.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground">
            We partner with ambitious brands across industries, delivering tailored social media solutions that drive real growth.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{client.title}</h3>
                  <p className="text-muted-foreground">{client.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
