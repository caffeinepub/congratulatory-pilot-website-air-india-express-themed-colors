import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2026. Built with{' '}
            <Heart className="w-4 h-4 text-primary fill-primary inline-block" />{' '}
            using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors underline decoration-primary/30 hover:decoration-primary"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
