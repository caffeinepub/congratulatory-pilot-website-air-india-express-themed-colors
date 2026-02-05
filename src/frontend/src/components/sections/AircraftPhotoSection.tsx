export default function AircraftPhotoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            Your Aircraft Awaits
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The Boeing 737 in Air India Express livery, ready to take you to new heights
          </p>
        </div>

        {/* Aircraft photo */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-card">
            <img
              src="/assets/generated/aircraft-photo.dim_1600x1000.png"
              alt="Air India Express Boeing 737 aircraft on the tarmac"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-base md:text-lg text-muted-foreground italic">
              Your Boeing 737 in Air India Express colors, ready for departure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
