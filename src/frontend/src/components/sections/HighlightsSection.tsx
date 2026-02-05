import { Award, Hand, Plane, Sparkles, Trophy } from 'lucide-react';
import { useState } from 'react';
import SurpriseModal from '../SurpriseModal';

export default function HighlightsSection() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const highlights = [
    {
      icon: Trophy,
      title: 'Selected as a Pilot',
      description: 'Your hard work, dedication, and countless hours of training have paid off. You\'ve earned your wings!',
      modalTitle: '🏆 Congratulations, Captain Vivan!',
      modalMessage: 'Vivan Pathak, you\'ve achieved something truly extraordinary! Your dedication, perseverance, and passion for aviation have brought you to this incredible moment. From countless hours of study to mastering the skies, you\'ve proven that dreams really do take flight. We\'re so proud of you, Captain! 🎉',
      modalImage: '/assets/generated/hero-jet.dim_1600x900.png',
      modalImageAlt: 'Boeing 737 in flight',
    },
    {
      icon: Plane,
      title: 'Boeing 737 Commander',
      description: 'You\'ll be flying one of the world\'s most trusted aircraft, connecting people and places across the skies.',
      modalTitle: '✈️ Your Boeing 737 Awaits!',
      modalMessage: 'Vivan, you\'re about to command one of the most iconic aircraft in aviation history! The Boeing 737 has carried billions of passengers safely across the globe, and now you\'re part of that legacy. Every takeoff will be a testament to your skill, every landing a celebration of your expertise. The skies are calling, Captain Pathak! 🌟',
      modalImage: '/assets/generated/aircraft-photo.dim_1600x1000.png',
      modalImageAlt: 'Boeing 737 aircraft',
    },
    {
      icon: Award,
      title: 'Air India Express',
      description: 'Joining a prestigious airline that connects millions of passengers with safety, comfort, and excellence.',
      modalTitle: '🎊 Welcome to Air India Express!',
      modalMessage: 'Vivan Pathak, you\'re now part of an airline family that connects hearts and homes across continents! Air India Express is known for its warmth, safety, and excellence—and you embody all of these qualities. Your passengers will be in the best hands possible. Here\'s to countless safe journeys and unforgettable moments in the cockpit! 💫',
      modalImage: '/assets/generated/hero-jet.dim_1600x900.png',
      modalImageAlt: 'Air India Express Boeing 737',
    },
    {
      icon: Sparkles,
      title: 'Ready for the Skies',
      description: 'Your journey begins now. Every flight will be an adventure, every landing a triumph. Fly high!',
      modalTitle: '🌈 Your Adventure Begins Now!',
      modalMessage: 'Dear Vivan, the runway is clear, the engines are ready, and your future is limitless! You\'ve worked so hard to reach this moment, and now it\'s time to soar. Remember, every cloud has a silver lining, and you\'re about to fly above them all. May your flights be smooth, your landings be perfect, and your career be filled with joy. Blue skies ahead, Captain Pathak! 🚀',
      modalImage: '/assets/generated/aircraft-photo.dim_1600x1000.png',
      modalImageAlt: 'Boeing 737 ready for flight',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            Your Achievement
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            This is just the beginning of an incredible journey through the clouds
          </p>
          {/* Highly visible interaction cue */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-lg border-2 border-primary/50">
              <Hand className="w-6 h-6 animate-bounce" />
              <span>Tap any card below for a special surprise!</span>
              <Sparkles className="w-6 h-6 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <button
                key={index}
                onClick={() => setOpenModalIndex(index)}
                className="group relative bg-card rounded-2xl p-6 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Open surprise message for ${highlight.title}`}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
                {/* Always-visible tap indicator badge */}
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-md border-2 border-primary-foreground/20 flex items-center gap-1.5 group-hover:scale-110 transition-transform">
                  <Hand className="w-3.5 h-3.5" />
                  <span>TAP</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Celebratory message with badge */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl p-8 md:p-12 border-2 border-primary/30 shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Badge image */}
              <div className="flex-shrink-0">
                <img
                  src="/assets/generated/pilot-badge.dim_512x512.png"
                  alt="Pilot badge"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Message */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground">
                  The Sky is No Longer the Limit, Vivan
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  You've turned your dreams into reality, <span className="font-bold text-foreground">Vivan Pathak</span>. As you take command of the Boeing 737 
                  with Air India Express, remember that every journey begins with a single step—or 
                  in your case, a single takeoff. We're incredibly proud of you and can't wait to 
                  see where your wings will take you!
                </p>
                <div className="pt-4">
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    Blue skies and tailwinds, Captain Vivan! ✈️
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {highlights.map((highlight, index) => (
        <SurpriseModal
          key={index}
          open={openModalIndex === index}
          onOpenChange={(open) => setOpenModalIndex(open ? index : null)}
          title={highlight.modalTitle}
          message={highlight.modalMessage}
          imageSrc={highlight.modalImage}
          imageAlt={highlight.modalImageAlt}
        />
      ))}
    </section>
  );
}
