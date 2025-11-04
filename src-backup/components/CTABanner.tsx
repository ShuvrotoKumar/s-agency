import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Glow Effect */}
          <div className="absolute -inset-8 bg-gradient-primary opacity-20 rounded-3xl blur-3xl animate-pulse" />

          {/* Content */}
          <div className="relative bg-gradient-hero rounded-3xl p-12 md:p-16 text-center shadow-glow overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            </div>

            <div className="relative z-10 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Let's Work Together
              </h2>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Ready to transform your social media presence? Book a free discovery call and let's discuss your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="xl"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group shadow-elegant"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
