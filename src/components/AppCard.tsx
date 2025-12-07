import React, { useState, useRef, MouseEvent } from 'react';
import { AppData } from '../data/appsData';
import { useGitHubVersion } from '../hooks/useGitHubVersion';

interface AppCardProps {
  app: AppData;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  const { version, loading } = useGitHubVersion(app.githubRepo);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!app.screenshots || app.screenshots.length === 0 || !imageContainerRef.current) return;

    const { left, width } = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const percentage = Math.max(0, Math.min(1, x / width)); // Clamp between 0 and 1
    const index = Math.floor(percentage * app.screenshots.length);
    
    setActiveScreenshotIndex(Math.min(index, app.screenshots.length - 1));
  };

  return (
    <a 
      href={app.appUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative block bg-tech-surface border border-gray-800 hover:border-tech-primary transition-all duration-300 overflow-hidden rounded-lg hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Container */}
      <div 
        ref={imageContainerRef}
        className="relative h-48 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Version Badge */}
        {(version || loading) && app.githubRepo && (
           <div className="absolute top-2 right-2 z-30 bg-black/70 backdrop-blur-sm border border-tech-primary/30 text-tech-primary text-xs px-2 py-1 rounded font-mono shadow-lg">
             {loading ? (
               <span className="animate-pulse">v...</span>
             ) : (
               version
             )}
           </div>
        )}

        {/* Gradient Overlay - fades out on hover to show preview clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-tech-surface to-transparent opacity-60 z-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-0" />
        
        {/* Main Image (Base) */}
        <img 
          src={app.imageUrl} 
          alt={app.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 relative z-0"
        />

        {/* Curtain to hide base image during transitions (prevents text flickering) */}
        {((app.screenshots && app.screenshots.length > 0) || app.hoverImageUrl) && (
          <div className={`absolute inset-0 bg-tech-surface z-0 pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        )}

        {/* Screenshots / Hover Image Logic */}
        {app.screenshots && app.screenshots.length > 0 ? (
          // Screenshot Gallery Mode
          app.screenshots.map((screen, index) => (
            <img 
              key={index}
              src={screen} 
              alt={`${app.title} screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-10 ${
                isHovering && activeScreenshotIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))
        ) : (
          // Fallback to single hover image if no screenshots
          app.hoverImageUrl && (
            <img 
              src={app.hoverImageUrl} 
              alt={`${app.title} preview`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            />
          )
        )}
        
        {/* Progress Bar for Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && isHovering && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50 z-30 flex">
            {app.screenshots.map((_, index) => (
              <div 
                key={index}
                className={`h-full flex-1 transition-colors duration-200 ${
                  index === activeScreenshotIndex ? 'bg-tech-primary' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 relative z-20">
        <h3 className="text-xl font-bold text-tech-primary mb-2 font-mono group-hover:text-white transition-colors">
          {app.title}
        </h3>
        <p className="text-tech-muted text-sm mb-4">
          {app.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {app.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded border border-tech-secondary/30 text-tech-secondary bg-tech-secondary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-tech-primary/20 group-hover:border-r-tech-primary transition-colors" />
    </a>
  );
};

export default AppCard;
