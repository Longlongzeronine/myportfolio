import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import myImage from './sample-proj/p-1.png';
import myImage1 from './sample-proj/p-2.png';
import myImage2 from './sample-proj/p-5.png';
import myImage3 from './sample-proj/p-4.png';
import myImage4 from './sample-proj/p-6.png';
import myImage5 from './sample-proj/p-7.png';
import Particles from "../../Particles";

// Import UM Research Portal images
import umLogin from '../../assets/Umresearchfinal/login.png';
import umResearchAssocSignup from '../../assets/Umresearchfinal/ResearchAssociateSignup.png';
import umCoordDashboard from '../../assets/Umresearchfinal/ResearchCoordinatorDashboard.png';
import umCoordResearch from '../../assets/Umresearchfinal/ResearchCoordinatorResearchpaper.png';
import umCoordSignup from '../../assets/Umresearchfinal/ResearchCoordinatorSignup.png';
import umSignup from '../../assets/Umresearchfinal/Signup(1).png';

// Import Amoguis Inventory images
import amoguisAI from '../../assets/Amoguis Inventory/AI Store Assistant.png';
import amoguisExpenses from '../../assets/Amoguis Inventory/Cashiering Expenses.png';
import amoguisOrder from '../../assets/Amoguis Inventory/Cashiering Order.png';
import amoguisPaid from '../../assets/Amoguis Inventory/Cashiering Paid.png';
import amoguisUtang from '../../assets/Amoguis Inventory/Cashiering Utang.png';
import amoguisDashboard from '../../assets/Amoguis Inventory/Dashboard.png';
import amoguisDashboard1 from '../../assets/Amoguis Inventory/Dashboard1.png';
import amoguisDashboard2 from '../../assets/Amoguis Inventory/Dashboard2.png';
import amoguisDashboard3 from '../../assets/Amoguis Inventory/Dashboard3.png';
import amoguisProducts from '../../assets/Amoguis Inventory/Products.png';
import amoguisSalesBayad from '../../assets/Amoguis Inventory/Sales Bayad.png';
import amoguisSalesUtang from '../../assets/Amoguis Inventory/Sales Utang.png';
import amoguisSales from '../../assets/Amoguis Inventory/Sales.png';

// Import Barangay Portal images
import brgy1 from '../../assets/BarangayPortal/Admin/1.jpg';
import brgy2 from '../../assets/BarangayPortal/Admin/2.jpg';
import brgy3 from '../../assets/BarangayPortal/Admin/3.jpg';
import brgy4 from '../../assets/BarangayPortal/Admin/4.jpg';
import brgy5 from '../../assets/BarangayPortal/Admin/5.jpg';
import brgy6 from '../../assets/BarangayPortal/Admin/6.jpg';
import brgy7 from '../../assets/BarangayPortal/Admin/7.jpg';
import brgy8 from '../../assets/BarangayPortal/Admin/8.jpg';
import brgy9 from '../../assets/BarangayPortal/Admin/9.jpg';
import brgy10 from '../../assets/BarangayPortal/Admin/10.jpg';
import brgy11 from '../../assets/BarangayPortal/Admin/11.jpg';
import brgy12 from '../../assets/BarangayPortal/Admin/12.jpg';
import brgy13 from '../../assets/BarangayPortal/Admin/13.jpg';
import brgy14 from '../../assets/BarangayPortal/Admin/14.jpg';
import brgy15 from '../../assets/BarangayPortal/Admin/15.jpg';
import brgy16 from '../../assets/BarangayPortal/Admin/16.jpg';
import brgy17 from '../../assets/BarangayPortal/Admin/17.jpg';
import brgy18 from '../../assets/BarangayPortal/Admin/18.png';

// Import PALMPC Coop images
import coopArchivePrint from '../../assets/CoopPangi/Archive Summary Print.png';
import coopArchive from '../../assets/CoopPangi/Archive.png';
import coopCashiering from '../../assets/CoopPangi/Cashiering.png';
import coopCheckout from '../../assets/CoopPangi/Checkout.png';
import coopDashboard from '../../assets/CoopPangi/Dashboard.png';
import coopLogin from '../../assets/CoopPangi/Login.png';
import coopProductList from '../../assets/CoopPangi/ProductList.png';
import coopBarcode from '../../assets/CoopPangi/ProductBarcodeList.png';
import coopProductPrint from '../../assets/CoopPangi/ProductList Print.png';
import coopSales from '../../assets/CoopPangi/Sales.png';
import coopReceipt from '../../assets/CoopPangi/View Receipt Archive.png';

// Import UMV Canteen images
import umvArchive from '../../assets/CoopUMV/Archive.png';
import umvBadOrders from '../../assets/CoopUMV/Bad Orders.png';
import umvCashiering from '../../assets/CoopUMV/Cashiering.png';
import umvCheckout from '../../assets/CoopUMV/Checkout.png';
import umvDashboard from '../../assets/CoopUMV/Dashboard.png';
import umvHistory from '../../assets/CoopUMV/History.png';
import umvLogin from '../../assets/CoopUMV/Login.png';
import umvBarcode from '../../assets/CoopUMV/ProductBarcodeList.png';
import umvProductPrint from '../../assets/CoopUMV/ProductList Print.png';
import umvProductList from '../../assets/CoopUMV/ProductList.png';
import umvSalesReportPrint from '../../assets/CoopUMV/Sales report print.png';
import umvSales from '../../assets/CoopUMV/Sales.png';
import umvViewArchive from '../../assets/CoopUMV/View Archive Records.png';
import umvViewDetails from '../../assets/CoopUMV/View Details.png';
// NEW UMV Canteen images
import umvSalesRoboco from '../../assets/CoopUMV/SalesROBOCO.png';
import umvCashieringExchange from '../../assets/CoopUMV/CashieringExchangeOrder.png';
import umvCashieringReturn from '../../assets/CoopUMV/CashieringReturnOrder.png';
import umvChangeOrderItems from '../../assets/CoopUMV/ChangeOrderItems.png';
import umvReturnOrderItems from '../../assets/CoopUMV/ReturnOrderItems.png';
import umvProductBadOrder from '../../assets/CoopUMV/ProductListBadOrderItems.png';
import umvProductHistory from '../../assets/CoopUMV/ProductHistory.png';

// ✅ Custom hook to extract colors from an image
const useImageColors = (imageSrc) => {
  const [colors, setColors] = useState({
    primary: '#6b7280',
    secondary: '#9ca3af',
    light: '#e5e7eb',
    dark: '#374151',
    badgeBg: '#e5e7eb',
    badgeText: '#374151'
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
            badgeBg: lighten(primary, 0.75),
            badgeText: darken(primary, 0.5)
          });
        }
      } catch (error) {
        console.error('Error extracting colors:', error);
      }
    };
  }, [imageSrc]);

  return colors;
};

// ✅ Reusable Project Card Component
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
      className="relative rounded-xl border shadow-lg hover:-translate-y-1 transition cursor-pointer overflow-hidden"
      style={{ borderColor: `${colors.primary}20` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${colors.primary}50`;
        e.currentTarget.style.boxShadow = `0 4px 16px ${colors.primary}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${colors.primary}20`;
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <span
        className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-sm z-10"
        style={{
          backgroundColor: colors.badgeBg,
          color: colors.badgeText
        }}
      >
        Latest
      </span>

      <img src={image} alt={title} className="w-full h-50 object-cover" />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-dark mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, key) => (
            <span
              key={key}
              className="py-1 px-3 rounded-full text-sm font-medium border transform transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                backgroundColor: key % 2 === 0 ? colors.primary : colors.light,
                borderColor: key % 2 === 0 ? colors.primary : colors.light,
                color: key % 2 === 0 ? '#ffffff' : colors.dark
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = key % 2 === 0 ? colors.primary : colors.secondary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = key % 2 === 0 ? colors.primary : colors.light;
                e.target.style.color = key % 2 === 0 ? '#ffffff' : colors.dark;
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={onFullScreen}
            className="flex items-center justify-center gap-2 w-55 py-2 rounded-md transition cursor-pointer"
            style={{
              border: `1px solid ${colors.primary}`,
              color: colors.primary
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.primary;
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = colors.primary;
            }}
          >
            👁️ Full Screen
          </button>
          <button
            onClick={onGithubClick}
            className="flex items-center justify-center gap-2 w-55 py-2 rounded-md transition cursor-pointer"
            style={{
              border: `1px solid ${colors.secondary}`,
              color: colors.secondary
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.secondary;
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = colors.secondary;
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

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
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
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-5 right-5 text-white text-4xl font-bold z-50 hover:text-gray-300 cursor-pointer transition"
      >
        &times;
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button 
          onClick={goToPrevious} 
          className="absolute left-5 text-white text-5xl font-bold z-50 hover:text-gray-300 cursor-pointer transition transform hover:scale-110"
        >
          ‹
        </button>
      )}

      {/* Image Container */}
      <div className="flex flex-col items-center justify-center max-w-6xl w-full px-4">
        <img 
          src={images[currentIndex]} 
          alt={`Screenshot ${currentIndex + 1}`} 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
        />
        
        {/* Image Counter */}
        <div className="mt-4 text-white text-lg font-semibold">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-6 overflow-x-auto max-w-full pb-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => goToImage(index)}
                className={`h-16 w-24 object-cover rounded cursor-pointer transition border-2 ${
                  index === currentIndex 
                    ? 'border-blue-500 opacity-100' 
                    : 'border-transparent opacity-50 hover:opacity-75'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button 
          onClick={goToNext} 
          className="absolute right-5 text-white text-5xl font-bold z-50 hover:text-gray-300 cursor-pointer transition transform hover:scale-110"
        >
          ›
        </button>
      )}
    </div>
  );
};

export const Projects = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  // ✅ Extract colors from each image
  const colors0 = useImageColors(myImage);
  const colors1 = useImageColors(myImage1);
  const colors2 = useImageColors(myImage2);
  const colors3 = useImageColors(myImage3);
  const colors4 = useImageColors(myImage4);
  const colors5 = useImageColors(myImage5);

  // ✅ Hide/Show SocialNavbar when gallery opens/closes
  useEffect(() => {
    const socialNavbar = document.getElementById('social-navbar');
    
    if (galleryImages) {
      // Hide SocialNavbar when gallery is open
      if (socialNavbar) {
        socialNavbar.style.opacity = '0';
        socialNavbar.style.visibility = 'hidden';
        socialNavbar.style.pointerEvents = 'none';
        socialNavbar.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
      }
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Show SocialNavbar when gallery is closed
      if (socialNavbar) {
        socialNavbar.style.opacity = '1';
        socialNavbar.style.visibility = 'visible';
        socialNavbar.style.pointerEvents = 'auto';
      }
      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      if (socialNavbar) {
        socialNavbar.style.opacity = '1';
        socialNavbar.style.visibility = 'visible';
        socialNavbar.style.pointerEvents = 'auto';
      }
      document.body.style.overflow = '';
    };
  }, [galleryImages]);

  // Function to handle GitHub button click
  const handleGithubClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  // ✅ Project data array with multiple images
  const projects = [
    {
      image: myImage,
      title: "UM Research Portal",
      description: "A website to efficiently manage, track, and store research titles, enabling categorization, collaboration, and easy searchable access to research projects.",
      technologies: ["Bootstrap", "HTML", "MySQL", "PHP"],
      colors: colors0,
      gallery: [umLogin, umResearchAssocSignup, umCoordDashboard, umCoordResearch, umCoordSignup, umSignup]
    },
    {
      image: myImage3,
      title: "My Portfolio",
      description: "A portfolio of modern, responsive web apps built with React.js, Tailwind CSS, HTML, and CSS — focused on clean, intuitive design.",
      technologies: ["Tailwind CSS", "React JS", "HTML", "CSS"],
      colors: colors3,
      gallery: [myImage3]
    },
    {
      image: myImage1,
      title: "Barangay Governance Management System",
      description: "The E-BRGY system modernizes barangay administration in the Philippines by automating processes and enhancing transparency.",
      technologies: ["Bootstrap", "Hostinger", "MySQL", "PHP"],
      colors: colors1,
      gallery: [brgy1, brgy2, brgy3, brgy4, brgy5, brgy6, brgy7, brgy8, brgy9, brgy10, brgy11, brgy12, brgy13, brgy14, brgy15, brgy16, brgy17, brgy18]
    },
    {
      image: myImage2,
      title: "PALMPC Coop Cashiering & Inventory System",
      description: "A cooperative cashiering and inventory system with barcode scanning and thermal printing for fast and accurate transactions.",
      technologies: [".NET", "Visual Basic .NET", "SQLYOG", "Github"],
      colors: colors2,
      gallery: [coopArchivePrint, coopArchive, coopCashiering, coopCheckout, coopDashboard, coopLogin, coopProductList, coopBarcode, coopProductPrint, coopSales, coopReceipt]
    },
    {
      image: myImage5,
      title: "UMV Canteen Cashiering & Inventory System",
      description: "A comprehensive POS and inventory management platform equipped with barcode technology and thermal printing capabilities for seamless transaction processing.",
      technologies: [".NET", "Visual Basic .NET", "SQLYOG", "Github"],
      colors: colors5,
      gallery: [
        umvArchive, 
        umvBadOrders, 
        umvCashiering, 
        umvCheckout, 
        umvDashboard, 
        umvHistory, 
        umvLogin, 
        umvBarcode, 
        umvProductPrint, 
        umvProductList, 
        umvSalesReportPrint, 
        umvSales, 
        umvViewArchive, 
        umvViewDetails,
        umvSalesRoboco,
        umvCashieringExchange,
        umvCashieringReturn,
        umvChangeOrderItems,
        umvReturnOrderItems,
        umvProductBadOrder,
        umvProductHistory
      ]
    },
    {
      image: myImage4,
      title: "Amoguis Inventory App",
      description: "This is a Flutter mobile app with Firebase backend, featuring an AI chatbot to assist users with inventory management efficiently.",
      technologies: ["Flutter", "Firebase", "Dart", "AI Chatbot"],
      colors: colors4,
      gallery: [amoguisAI, amoguisExpenses, amoguisOrder, amoguisPaid, amoguisUtang, amoguisDashboard, amoguisDashboard1, amoguisDashboard2, amoguisDashboard3, amoguisProducts, amoguisSalesBayad, amoguisSalesUtang, amoguisSales]
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 bg-white overflow-hidden">
      {/* ✅ Particle Background */}
      <Particles
        className="absolute inset-0 w-full h-full -z-10"
        particleCount={400}
        particleSpread={30}
        particleBaseSize={1000}
        sizeRandomness={0.7}
        speed={0.25}
        particleColors={['#ff0000', '#00a2ff', '#ffe600', '#00d26a', '#ff5aad']}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={true}
      />

      {/* ✅ Custom Alert */}
      {showAlert && (
        <div className="fixed top-5 right-5 bg-yellow-300 text-yellow-900 font-semibold px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          📁 Coming Soon!
        </div>
      )}

      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 pt-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-center text-black">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-5xl mx-auto pt-3">
              A collection of projects that showcase my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
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

      {/* Image Gallery Overlay */}
      {galleryImages && (
        <ImageGallery 
          images={galleryImages} 
          onClose={() => setGalleryImages(null)} 
        />
      )}

      {/* Slide-in animation for alert */}
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