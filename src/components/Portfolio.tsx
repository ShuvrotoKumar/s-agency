import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    title: "Brand Launch Campaign",
    category: "Static Posts",
    description: "Complete social media campaign for a fashion brand launch",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
  },
  {
    title: "Product Carousel Series",
    category: "Carousels",
    description: "Educational carousel posts that increased engagement by 240%",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  },
  {
    title: "Viral Reel Campaign",
    category: "Reels",
    description: "Creative reels that reached 2M+ views organically",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
  },
  {
    title: "Complete Brand Identity",
    category: "Branding",
    description: "Full brand refresh including logo, colors, and voice",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
  },
  {
    title: "Story Highlights Design",
    category: "Static Posts",
    description: "Cohesive story highlights that elevated brand presence",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&q=80",
  },
  {
    title: "E-commerce Growth Series",
    category: "Carousels",
    description: "Sales-focused content that drove 180% ROI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-black">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results for real brands. Explore our portfolio of successful campaigns and creative content.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-elegant transition-all duration-300 border border-gray-200/50 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <ExternalLink className="w-6 h-6 text-primary-foreground mb-2" />
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-2 bg-accent text-accent-foreground">
                  {item.category}
                </Badge>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
