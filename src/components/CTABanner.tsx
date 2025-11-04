import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-25 blur-3xl pointer-events-none" />

          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-hero p-8 md:p-12 lg:p-16 text-center shadow-glow">
            {/* subtle radial highlight */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.12),transparent 50%)]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
                Let's Work Together
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your social media presence? Book a free discovery call and let's discuss your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition transform group shadow-button"
                  onClick={() => {
                    /* handle click */
                  }}
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="font-medium">Book Free Call</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-transparent border-2 border-white/50 text-white hover:bg-white/10 transition"
                >
                  <span className="font-medium">View Our Work</span>
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
