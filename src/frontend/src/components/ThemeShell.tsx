import { type ReactNode } from 'react';

interface ThemeShellProps {
  children: ReactNode;
}

export default function ThemeShell({ children }: ThemeShellProps) {
  return (
    <div 
      className="relative min-h-screen bg-background"
      style={{
        backgroundImage: 'url(/assets/generated/pattern-planes.dim_2048x2048.png)',
        backgroundRepeat: 'repeat',
        backgroundSize: '512px 512px',
        backgroundPosition: 'center',
        opacity: 0.98,
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
