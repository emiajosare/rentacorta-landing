import React from 'react';

interface LogoProps {
  imageClass?: string;
  showText?: boolean;
  containerClass?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  imageClass = "w-10 h-10", 
  showText = true,
  containerClass = "flex items-center gap-3"
}) => {
  return (
    <div className={containerClass}>
      {/* LOGOTIPO VECTORIAL (SVG NATIVO)
        Escalabilidad infinita, cero pixelación, máxima velocidad de carga.
      */}
      <svg 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${imageClass} drop-shadow-[0_0_10px_rgba(201,168,76,0.2)]`}
      >
        {/* Hexágono Exterior (Aura) */}
        <path 
          d="M32 4L58 19V45L32 60L6 45V19L32 4Z" 
          fill="url(#goldGradient)" 
          fillOpacity="0.05" 
          stroke="url(#goldGradient)" 
          strokeWidth="1"
        />
        {/* Hexágono Interior (Cubo Estructural - Representa la Propiedad) */}
        <path 
          d="M32 14L48 23.2376V40.7624L32 50L16 40.7624V23.2376L32 14Z" 
          stroke="url(#goldGradient)" 
          strokeWidth="3.5" 
          strokeLinejoin="round"
        />
        {/* Líneas internas (Representan la automatización y el flujo) */}
        <path 
          d="M16 23.2376L32 32.4752M32 32.4752L48 23.2376M32 32.4752V50" 
          stroke="url(#goldGradient)" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Nodo Central (El núcleo de HostFlow) */}
        <circle cx="32" cy="32.5" r="4.5" fill="#C9A84C"/>
        
        {/* Definición del Degradado Dorado Élite */}
        <defs>
          <linearGradient id="goldGradient" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE08B"/>
            <stop offset="0.5" stopColor="#C9A84C"/>
            <stop offset="1" stopColor="#967A2D"/>
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-bold tracking-tighter text-white">
          Host<span className="text-gold">Flow</span>
        </span>
      )}
    </div>
  );
};

export default Logo;