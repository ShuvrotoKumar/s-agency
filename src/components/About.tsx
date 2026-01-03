import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="About our agency"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-black">
              About Us
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 mb-8">
              <p>
                We're a passionate team of social media experts, content creators, and digital strategists dedicated to helping brands tell their stories in the most compelling way possible.
              </p>
              <p>
                With years of experience and hundreds of successful campaigns under our belt, we understand what it takes to cut through the noise and create content that truly resonates with your audience.
              </p>
              <p>
                Our mission is simple: to make professional social media management accessible to brands of all sizes, delivering premium content and strategy that drives real, measurable growth.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
