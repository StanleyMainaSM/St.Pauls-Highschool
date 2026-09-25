import React, { useState } from 'react';
import { Camera, Bus, Building2, Utensils, Award, School, Users, Shield, BookOpen, Layers } from 'lucide-react';

interface AuthenticImageProps {
  src?: string;
  alt: string;
  label: string; // E.g., "AUTHENTIC SCHOOL COMPOUND PHOTO", "BABA YAO SCHOOL BUS", etc.
  category?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  objectPosition?: string;
  priority?: boolean;
  onExpand?: () => void;
}

export const AuthenticImage: React.FC<AuthenticImageProps> = ({
  src,
  alt,
  label,
  category = 'Campus',
  className = '',
  aspectRatio = 'video',
  objectPosition = 'object-center',
  priority = false,
  onExpand
}) => {
  const [imageError, setImageError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Clean label to ensure bracket format if not already bracketed
  const formattedLabel = label.startsWith('[') && label.endsWith(']')
    ? label
    : `[${label.toUpperCase()}]`;

  // Determine aspect ratio class
  const ratioClasses = {
    video: 'aspect-[16/10]',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    auto: 'h-full w-full'
  };

  // Determine appropriate thematic icon for the placeholder
  const getIcon = () => {
    const l = label.toLowerCase();
    if (l.includes('bus') || l.includes('transport') || l.includes('baba yao')) {
      return <Bus className="w-10 h-10 text-sky-400 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('bakery') || l.includes('food') || l.includes('dining')) {
      return <Utensils className="w-10 h-10 text-amber-400 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('gate') || l.includes('entrance')) {
      return <Shield className="w-10 h-10 text-sky-300 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('dormitory') || l.includes('boarding')) {
      return <Building2 className="w-10 h-10 text-indigo-300 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('principal') || l.includes('head')) {
      return <Award className="w-10 h-10 text-amber-300 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('lab') || l.includes('class') || l.includes('academic')) {
      return <BookOpen className="w-10 h-10 text-cyan-300 mb-2" strokeWidth={1.5} />;
    }
    if (l.includes('student') || l.includes('sports')) {
      return <Users className="w-10 h-10 text-emerald-300 mb-2" strokeWidth={1.5} />;
    }
    return <School className="w-10 h-10 text-sky-400 mb-2" strokeWidth={1.5} />;
  };

  const hasValidImage = src && src.trim() !== '' && !imageError;

  if (hasValidImage) {
    return (
      <div 
        className={`relative overflow-hidden group bg-slate-900 ${ratioClasses[aspectRatio]} ${className}`}
        onClick={onExpand}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setImageError(true)}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Subtle authentic verified badge */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-sky-300 tracking-wide border border-sky-500/20">
          Official St. Paul's Photo
        </div>
      </div>
    );
  }

  // Obvious, beautifully styled authentic placeholder (strict adherence to prompt)
  return (
    <div
      onClick={onExpand}
      className={`relative overflow-hidden select-none bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white flex flex-col items-center justify-center p-6 text-center border border-sky-900/40 rounded-xl group transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg ${ratioClasses[aspectRatio]} ${className}`}
    >
      {/* Decorative architectural grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c710_1px,transparent_1px),linear-gradient(to_bottom,#0284c710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Subtle glow circle */}
      <div className="absolute w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-4">
        {getIcon()}
        
        {/* Explicit requested placeholder format */}
        <p className="font-mono text-xs sm:text-sm font-bold tracking-wider text-sky-300 uppercase mb-1 drop-shadow-sm">
          {formattedLabel}
        </p>
        
        <p className="text-[12px] text-slate-300 font-medium mb-3 max-w-[280px]">
          {alt}
        </p>

        <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
          <Camera className="w-3 h-3 text-sky-400" />
          <span>Authentic School Asset Slot</span>
        </div>
      </div>

      {/* Corner category indicator */}
      <div className="absolute bottom-2.5 right-3 text-[10px] text-slate-400 font-mono tracking-wider">
        {category}
      </div>
    </div>
  );
};
