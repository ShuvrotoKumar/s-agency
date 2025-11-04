import { Palette, BarChart3, Calendar, TrendingUp, FileText, Megaphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Content Creation",
    description: "Eye-catching posts, carousels, and reels designed to stop the scroll and drive engagement.",
  },
  {
    icon: TrendingUp,
    title: "Strategy Planning",
    description: "Data-driven strategies tailored to your brand's goals and target audience for maximum impact.",
  },
  {
    icon: Megaphone,
    title: "Branding & Identity",
    description: "Build a cohesive and memorable brand presence across all social platforms.",
  },
  {
    icon: Calendar,
    title: "Content Scheduling",
    description: "Consistent posting schedule managed for you, ensuring your audience stays engaged.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed insights and performance reports to track growth and optimize content strategy.",
  },
  {
    icon: FileText,
    title: "Copywriting",
    description: "Compelling captions and content that tell your story and convert followers into customers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive social media solutions designed to elevate your brand and drive real results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
