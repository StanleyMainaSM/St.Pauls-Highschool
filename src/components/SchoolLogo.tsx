import React from 'react';
import { schoolAssets } from '../data/schoolAssets';

interface SchoolLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightVariant?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
  lightVariant = false
}) => {
  const [logoError, setLogoError] = React.useState(false);
  const customLogoPath = schoolAssets.logo.path;

  const sizeMap = {
    sm: { width: 36, height: 44, container: 'h-10 w-auto' },
    md: { width: 52, height: 64, container: 'h-14 w-auto' },
    lg: { width: 80, height: 98, container: 'h-24 w-auto' },
    xl: { width: 120, height: 146, container: 'h-36 w-auto' }
  };

  const dim = sizeMap[size];

  // If a real authentic logo image file is provided and has not errored, render the image
  if (customLogoPath && customLogoPath.trim() !== '' && !logoError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={customLogoPath}
          alt="St. Paul's High School – Kevote Official Logo"
          onError={() => setLogoError(true)}
          className={`${dim.container} object-contain transition-transform hover:scale-105`}
        />
        {showText && (
          <div className="flex flex-col">
            <span className={`font-display font-bold tracking-tight uppercase leading-none ${lightVariant ? 'text-white' : 'text-slate-900'} ${size === 'lg' ? 'text-xl' : 'text-sm'}`}>
              St. Paul's High School
            </span>
            <span className={`text-xs font-semibold tracking-widest uppercase ${lightVariant ? 'text-sky-300' : 'text-sky-700'}`}>
              Kevote · Embu
            </span>
            <span className={`text-[10px] tracking-wider font-medium italic ${lightVariant ? 'text-slate-300' : 'text-slate-500'}`}>
              "Jishinde Ushinde"
            </span>
          </div>
        )}
      </div>
    );
  }

  // Official Shield Crest SVG
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={dim.width}
        height={dim.height}
        viewBox="0 0 160 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm select-none shrink-0"
        aria-label="St. Paul's High School Kevote Crest - Motto: Jishinde Ushinde"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="80" y1="8" x2="80" y2="176" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F2756" />
            <stop offset="100%" stopColor="#091530" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="160" y2="196" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="160" y2="196" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="silverGrad" x1="0" y1="0" x2="160" y2="196" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>

        {/* Outer Shield Outline */}
        <path
          d="M80 8 C128 8 152 24 152 64 C152 128 112 168 80 184 C48 168 8 128 8 64 C8 24 32 8 80 8 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldGrad)"
          strokeWidth="4"
        />

        {/* Inner Shield Border with School Accent Color (Sky Blue) */}
        <path
          d="M80 16 C122 16 144 30 144 66 C144 122 108 158 80 172 C52 158 16 122 16 66 C16 30 38 16 80 16 Z"
          fill="none"
          stroke="url(#skyGrad)"
          strokeWidth="2.5"
          opacity="0.9"
        />

        {/* Top Header Arc Band */}
        <path
          d="M26 44 C42 34 60 28 80 28 C100 28 118 34 134 44"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          opacity="0.3"
        />

        {/* Heraldic Cross Divider */}
        <line x1="80" y1="36" x2="80" y2="136" stroke="url(#goldGrad)" strokeWidth="2.5" />
        <line x1="28" y1="84" x2="132" y2="84" stroke="url(#goldGrad)" strokeWidth="2.5" />

        {/* Quadrant 1 (Top Left): Open Book / Bible (Wisdom & Diligence) */}
        <g transform="translate(42, 50) scale(0.9)">
          <path
            d="M5 22 C12 18 20 18 27 22 C34 18 42 18 49 22 L49 6 C42 3 34 3 27 6 C20 3 12 3 5 6 Z"
            fill="url(#silverGrad)"
            stroke="#0F2756"
            strokeWidth="1.2"
          />
          <line x1="27" y1="6" x2="27" y2="22" stroke="#0F2756" strokeWidth="1.5" />
          <line x1="10" y1="10" x2="22" y2="10" stroke="#0284C7" strokeWidth="0.8" />
          <line x1="10" y1="14" x2="22" y2="14" stroke="#0284C7" strokeWidth="0.8" />
          <line x1="32" y1="10" x2="44" y2="10" stroke="#0284C7" strokeWidth="0.8" />
          <line x1="32" y1="14" x2="44" y2="14" stroke="#0284C7" strokeWidth="0.8" />
        </g>

        {/* Quadrant 2 (Top Right): Cross of St. Paul / Christian Faith */}
        <g transform="translate(100, 48)">
          {/* Latin Cross with rays */}
          <rect x="12" y="4" width="6" height="26" rx="1" fill="url(#goldGrad)" />
          <rect x="4" y="10" width="22" height="6" rx="1" fill="url(#goldGrad)" />
          <circle cx="15" cy="13" r="2" fill="#FFFFFF" />
        </g>

        {/* Quadrant 3 (Bottom Left): Torch of Knowledge & Lamp */}
        <g transform="translate(44, 96)">
          {/* Flame */}
          <path
            d="M14 2 C18 6 22 10 18 16 C16 14 14 12 12 13 C12 10 13 6 14 2 Z"
            fill="#F59E0B"
          />
          <path
            d="M15 6 C17 9 17 12 15 14 C13 13 14 10 15 6 Z"
            fill="#FDE047"
          />
          {/* Torch Handle */}
          <polygon points="10,16 20,16 17,32 13,32" fill="url(#silverGrad)" stroke="#091530" strokeWidth="1" />
          <line x1="10" y1="19" x2="20" y2="19" stroke="#0284C7" strokeWidth="1.5" />
        </g>

        {/* Quadrant 4 (Bottom Right): Mountain Silhouette (Mt. Kenya / Embu Landscape) */}
        <g transform="translate(94, 96)">
          <polygon points="6,30 18,12 30,30" fill="url(#skyGrad)" opacity="0.9" />
          <polygon points="18,12 15,18 21,18" fill="#FFFFFF" />
          <polygon points="16,30 25,18 34,30" fill="#0369A1" opacity="0.8" />
        </g>

        {/* Center Circular Badge */}
        <circle cx="80" cy="84" r="10" fill="#0F2756" stroke="url(#goldGrad)" strokeWidth="2" />
        <circle cx="80" cy="84" r="6" fill="#38BDF8" />

        {/* School Name Text Ribbon (Top Arc) */}
        <text
          x="80"
          y="28"
          fill="#FFFFFF"
          fontSize="8.5"
          fontWeight="800"
          fontFamily="Cinzel, Georgia, serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          ST. PAUL'S
        </text>

        <text
          x="80"
          y="38"
          fill="#38BDF8"
          fontSize="7"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
          textAnchor="middle"
          letterSpacing="1"
        >
          KEVOTE
        </text>

        {/* Lower Banner Ribbon with School Motto: JISHINDE USHINDE */}
        <g transform="translate(0, 148)">
          {/* Ribbon Ends */}
          <path d="M12 18 L26 8 L26 28 Z" fill="#92400E" />
          <path d="M148 18 L134 8 L134 28 Z" fill="#92400E" />

          {/* Main Ribbon Body */}
          <path
            d="M20 10 C50 16 110 16 140 10 L136 28 C108 34 52 34 24 28 Z"
            fill="url(#goldGrad)"
            stroke="#78350F"
            strokeWidth="1"
          />

          {/* Motto Text */}
          <text
            x="80"
            y="22"
            fill="#1E1B4B"
            fontSize="8"
            fontWeight="900"
            fontFamily="Cinzel, Georgia, serif"
            textAnchor="middle"
            letterSpacing="0.9"
          >
            JISHINDE USHINDE
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-display font-bold tracking-tight uppercase leading-none ${lightVariant ? 'text-white' : 'text-slate-900'} ${size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-sm' : 'text-base'}`}>
            St. Paul's High School
          </span>
          <span className={`text-[11px] font-semibold tracking-widest uppercase mt-0.5 ${lightVariant ? 'text-sky-300' : 'text-sky-800'}`}>
            Kevote · Embu County
          </span>
          <span className={`text-[10px] tracking-wider font-semibold italic mt-0.5 ${lightVariant ? 'text-amber-300' : 'text-amber-700'}`}>
            "Jishinde Ushinde"
          </span>
        </div>
      )}
    </div>
  );
};
