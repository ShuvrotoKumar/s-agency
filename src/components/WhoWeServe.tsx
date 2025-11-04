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
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-black">
            Who We Serve
          </h2>
          <p className="text-xl text-muted-foreground">
            We partner with ambitious brands across industries, delivering tailored social media solutions that drive real growth.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <Card
                key={index}
                className="group flex flex-col items-start text-left border border-gray-200/60 rounded-2xl 
                           p-6 transition-all duration-300 hover:-translate-y-2 
                           hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:border-primary/40 
                           bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-indigo-500 
                                 flex items-center justify-center group-hover:scale-110 
                                 transition-transform duration-300 shadow-md mt-1"
                      aria-hidden
                    >
                      <Icon className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-yellow-300" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {client.title}
                      </h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
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
