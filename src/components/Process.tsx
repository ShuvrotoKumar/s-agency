import { MousePointerClick, FileCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    number: "01",
    title: "Select Your Plan",
    description: "Choose the perfect package that fits your brand's needs and budget.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Place Your Order",
    description: "Complete our simple onboarding form and share your brand details with us.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Receive & Approve",
    description: "Review your custom content, request revisions, and watch your brand grow.",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-black">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is simple. Follow these three easy steps to transform your social media presence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-primary opacity-30" style={{ left: '16.666%', right: '16.666%' }} />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-glow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 mt-8 rounded-2xl bg-accent flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
