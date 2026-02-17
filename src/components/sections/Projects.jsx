import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import myImage from './sample-proj/p-1.png';
import myImage1 from './sample-proj/p-2.png';
import myImage2 from './sample-proj/p-5.png';
import myImage3 from './sample-proj/p-4.png';
import myImage4 from './sample-proj/p-6.png';
import myImage5 from './sample-proj/p-7.png';
import Particles from "../../Particles";
import projectsData from './Endpoint/projects.json';


// ✅ Custom hook to extract colors from an image
const useImageColors = (imageSrc) => {
  const [colors, setColors] = useState({
    primary: '#475569',
    secondary: '#64748b',
    light: '#94a3b8',
    dark: '#1e293b',
    badgeBg: '#1e293b',
    badgeText: '#94a3b8'
  });

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageSrc;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        const scaleFactor = 0.1;
        canvas.width = img.width * scaleFactor;
        canvas.height = img.height * scaleFactor;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const pixels = imageData.data;
        
        const colorCounts = {};
        
        for (let i = 0; i < pixels.length; i += 4) {
          const r = Math.round(pixels[i] / 32) * 32;
          const g = Math.round(pixels[i + 1] / 32) * 32;
          const b = Math.round(pixels[i + 2] / 32) * 32;
          
          const brightness = (r + g + b) / 3;
          if (brightness < 30 || brightness > 225) continue;
          
          const key = `${r},${g},${b}`;
          colorCounts[key] = (colorCounts[key] || 0) + 1;
        }
        
        const sortedColors = Object.entries(colorCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([color]) => {
            const [r, g, b] = color.split(',').map(Number);
            return { r, g, b };
          });

        if (sortedColors.length >= 2) {
          const primary = sortedColors[0];
          const secondary = sortedColors[1];
          
          const rgbToHex = (r, g, b) => {
            return '#' + [r, g, b].map(x => {
              const hex = Math.min(255, Math.max(0, x)).toString(16);
              return hex.length === 1 ? '0' + hex : hex;
            }).join('');
          };

          const lighten = (color, factor) => {
            return rgbToHex(
              Math.round(color.r + (255 - color.r) * factor),
              Math.round(color.g + (255 - color.g) * factor),
              Math.round(color.b + (255 - color.b) * factor)
            );
          };

          const darken = (color, factor) => {
            return rgbToHex(
              Math.round(color.r * (1 - factor)),
              Math.round(color.g * (1 - factor)),
              Math.round(color.b * (1 - factor))
            );
          };
          
          setColors({
            primary: rgbToHex(primary.r, primary.g, primary.b),
            secondary: rgbToHex(secondary.r, secondary.g, secondary.b),
            light: lighten(primary, 0.7),
            dark: darken(primary, 0.4),
            badgeBg: darken(primary, 0.6),
            badgeText: lighten(primary, 0.6)
          });
        }
      } catch (error) {
        console.error('Error extracting colors:', error);
      }
    };
  }, [imageSrc]);

  return colors;
};

// ✅ Reusable Project Card Component — same glass style as About cards
const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  colors,
  onFullScreen,
  onGithubClick
}) => {
  return (
    <div
      className="relative rounded-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        border: '1px solid rgba(71,85,105,0.4)',
        backgroundColor: 'rgba(15,23,42,0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.7), 0 20px 60px rgba(71,85,105,0.15), inset 0 1px 0 rgba(255,255,255,0.06)';
        e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
      }}
    >
      {/* Latest badge */}
      <span
        className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm z-10"
        style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
      >
        Latest
      </span>

      <img src={image} alt={title} className="w-full h-50 object-cover" />

      {/* Accent divider */}
      <div style={{ height: '2px', background: `linear-gradient(to right, rgba(100,116,139,0.6), transparent)` }} />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#f1f5f9' }}>{title}</h3>
        <p className="mb-5 leading-relaxed" style={{ color: '#cbd5e1' }}>{description}</p>

        {/* Tech badges — same style as About skill tiles */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, key) => (
            <span
              key={key}
              className="py-1 px-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer hover:scale-105"
              style={{
                border: '1px solid rgba(71,85,105,0.4)',
                backgroundColor: 'rgba(30,41,59,0.5)',
                color: '#e2e8f0',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(51,65,85,0.6)';
                e.target.style.borderColor = 'rgba(100,116,139,0.6)';
                e.target.style.color = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(30,41,59,0.5)';
                e.target.style.borderColor = 'rgba(71,85,105,0.4)';
                e.target.style.color = '#e2e8f0';
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onFullScreen}
            className="flex items-center justify-center gap-2 w-55 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid rgba(71,85,105,0.4)',
              color: '#e2e8f0',
              backgroundColor: 'rgba(30,41,59,0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.6)';
              e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
              e.currentTarget.style.color = '#f8fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
              e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
              e.currentTarget.style.color = '#e2e8f0';
            }}
          >
            👁️ Full Screen
          </button>
          <button
            onClick={onGithubClick}
            className="flex items-center justify-center gap-2 w-55 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer"
            style={{
              border: '1px solid rgba(71,85,105,0.4)',
              color: '#e2e8f0',
              backgroundColor: 'rgba(30,41,59,0.5)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(51,65,85,0.6)';
              e.currentTarget.style.borderColor = 'rgba(100,116,139,0.6)';
              e.currentTarget.style.color = '#f8fafc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.5)';
              e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)';
              e.currentTarget.style.color = '#e2e8f0';
            }}
          >
            📁 GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

// ✅ Gallery Component with Navigation
const ImageGallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToImage = (index) => setCurrentIndex(index);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(2,6,23,0.97)' }}>
      <button onClick={onClose} className="absolute top-5 right-5 text-slate-300 text-4xl font-bold z-50 hover:text-white cursor-pointer transition">
        &times;
      </button>
      {images.length > 1 && (
        <button onClick={goToPrevious} className="absolute left-5 text-slate-300 text-5xl font-bold z-50 hover:text-white cursor-pointer transition transform hover:scale-110">
          ‹
        </button>
      )}
      <div className="flex flex-col items-center justify-center max-w-6xl w-full px-4">
        <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
        <div className="mt-4 text-slate-400 text-lg font-semibold">{currentIndex + 1} / {images.length}</div>
        {images.length > 1 && (
          <div className="flex gap-2 mt-6 overflow-x-auto max-w-full pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => goToImage(index)}
                className={`h-16 w-24 object-cover rounded cursor-pointer transition border-2 ${
                  index === currentIndex ? 'border-slate-400 opacity-100' : 'border-transparent opacity-40 hover:opacity-65'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      {images.length > 1 && (
        <button onClick={goToNext} className="absolute right-5 text-slate-300 text-5xl font-bold z-50 hover:text-white cursor-pointer transition transform hover:scale-110">
          ›
        </button>
      )}
    </div>
  );
};

export const Projects = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const colors0 = useImageColors(myImage);
  const colors1 = useImageColors(myImage1);
  const colors2 = useImageColors(myImage2);
  const colors3 = useImageColors(myImage3);
  const colors4 = useImageColors(myImage4);
  const colors5 = useImageColors(myImage5);

  useEffect(() => {
    const socialNavbar = document.getElementById('social-navbar');
    if (galleryImages) {
      if (socialNavbar) {
        socialNavbar.style.opacity = '0';
        socialNavbar.style.visibility = 'hidden';
        socialNavbar.style.pointerEvents = 'none';
        socialNavbar.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (socialNavbar) {
        socialNavbar.style.opacity = '1';
        socialNavbar.style.visibility = 'visible';
        socialNavbar.style.pointerEvents = 'auto';
      }
      document.body.style.overflow = '';
    }
    return () => {
      if (socialNavbar) {
        socialNavbar.style.opacity = '1';
        socialNavbar.style.visibility = 'visible';
        socialNavbar.style.pointerEvents = 'auto';
      }
      document.body.style.overflow = '';
    };
  }, [galleryImages]);

  const handleGithubClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const imageMap = {
    './sample-proj/p-1.png': myImage,
    './sample-proj/p-2.png': myImage1,
    './sample-proj/p-4.png': myImage3,
    './sample-proj/p-5.png': myImage2,
    './sample-proj/p-6.png': myImage4,
    './sample-proj/p-7.png': myImage5
  };

  const colorMap = [colors0, colors3, colors1, colors2, colors5, colors4];

  const projects = projectsData.projects.map((project, index) => ({
    ...project,
    image: imageMap[project.image],
    colors: colorMap[index],
    gallery: project.gallery.map(img => imageMap[img])
  }));

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden" style={{ backgroundColor: '#020617' }}>

      {/* Background */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      {/* Alert */}
      {showAlert && (
        <div className="fixed top-5 right-5 bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in border border-slate-600">
          📁 Coming Soon!
        </div>
      )}

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 pt-10 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Featured{" "}
               <span className="bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl max-w-5xl mx-auto pt-3" style={{ color: '#94a3b8' }}>
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                colors={project.colors}
                onFullScreen={() => setGalleryImages(project.gallery)}
                onGithubClick={handleGithubClick}
              />
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {galleryImages && (
        <ImageGallery
          images={galleryImages}
          onClose={() => setGalleryImages(null)}
        />
      )}

      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease forwards;
          }
        `}
      </style>
    </section>
  );
};