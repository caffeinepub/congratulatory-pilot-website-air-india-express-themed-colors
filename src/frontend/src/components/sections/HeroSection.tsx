import { Plane } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Vivan's Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="/assets/generated/vivan-hero.dim_1200x1500.jpg"
                alt="Vivan Pathak - Newly selected pilot at Air India Express"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>

          {/* Right column - Text content */}
          <div className="space-y-8 text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-2 border-primary">
              <Plane className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                Congratulations Vivan!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              <span className="block text-foreground">You Did It, Vivan!</span>
              <span className="block text-primary mt-2">Welcome to the Skies</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Your dream has taken flight! Congratulations <span className="font-bold text-foreground">Vivan Pathak</span> on being selected as a pilot at{' '}
              <span className="font-bold text-primary">Air India Express</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="px-6 py-4 bg-card rounded-2xl border-2 border-primary shadow-lg">
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Aircraft</div>
                <div className="text-2xl font-black text-primary mt-1">Boeing 737</div>
              </div>
              <div className="px-6 py-4 bg-card rounded-2xl border-2 border-accent shadow-lg">
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Airline</div>
                <div className="text-2xl font-black text-accent-foreground mt-1">Air India Express</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
