import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface SurpriseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  message: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SurpriseModal({
  open,
  onOpenChange,
  title,
  message,
  imageSrc,
  imageAlt,
}: SurpriseModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-black text-primary pr-8">
            {title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Message */}
          <DialogDescription className="text-base md:text-lg text-foreground leading-relaxed">
            {message}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
