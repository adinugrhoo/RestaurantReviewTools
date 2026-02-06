import React, { useState, useEffect } from "react";
import { Star, MapPin, Globe, TrendingUp, Users, CheckCircle, Camera, Layout, Navigation, Menu, X, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SiriWaveIcon } from "./SiriWaveIcon";
import imgBasemapImage from "figma:asset/d8e2a800048dbe88a896a9ca31a21a5a2aa276f7.png";

// SVG Paths from import
const svgPaths = {
  p17091880: "M39.5 0C61.3152 0 79 17.7191 79 39.5767C79 57.5556 67.0348 72.734 50.6477 77.5549C48.3438 78.2327 46.2131 79.4729 44.7276 81.3599L42.6428 84.008C41.0413 86.0422 37.9586 86.0422 36.3571 84.0081L34.2719 81.3596C32.7864 79.4728 30.6558 78.2327 28.3521 77.5549C11.9651 72.7339 0 57.5555 0 39.5767C0 17.7191 17.6848 0 39.5 0Z",
  p1bef0180: "M20.778 3.222C21.0102 3.45415 21.1944 3.72978 21.3201 4.03314C21.4458 4.3365 21.5105 4.66164 21.5105 4.99C21.5105 5.31836 21.4458 5.6435 21.3201 5.94686C21.1944 6.25022 21.0102 6.52585 20.778 6.758L18.657 8.878C18.3131 9.22208 17.8762 9.45833 17.4 9.5578C16.9238 9.65727 16.4289 9.61564 15.976 9.438L14.286 11.128L14.842 11.96C15.4829 12.9217 15.7708 14.0757 15.6569 15.2257C15.5429 16.3757 15.0341 17.4508 14.217 18.268L10.879 21.607C10.6933 21.7928 10.4728 21.9402 10.2301 22.0408C9.98735 22.1413 9.72721 22.1931 9.4645 22.1931C9.20179 22.1931 8.94165 22.1413 8.69895 22.0408C8.45624 21.9402 8.23573 21.7928 8.05 21.607L2.393 15.95C2.2072 15.7643 2.05981 15.5438 1.95925 15.3011C1.85869 15.0583 1.80693 14.7982 1.80693 14.5355C1.80693 14.2728 1.85869 14.0126 1.95925 13.7699C2.05981 13.5272 2.2072 13.3067 2.393 13.121L5.732 9.783C6.54942 8.96579 7.62472 8.45702 8.77496 8.34326C9.9252 8.22949 11.0793 8.51775 12.041 9.159L12.873 9.713L14.561 8.025C14.3831 7.57197 14.3414 7.07687 14.4409 6.60046C14.5404 6.12404 14.7767 5.68701 15.121 5.343L17.243 3.222C17.7118 2.75332 18.3476 2.49003 19.0105 2.49003C19.6734 2.49003 20.3092 2.75332 20.778 3.222ZM11.939 14.182C11.7668 14.0098 11.5377 13.9064 11.2947 13.8911C11.0517 13.8758 10.8114 13.9497 10.619 14.099L10.525 14.182L8.404 16.303C8.22275 16.4825 8.11697 16.7246 8.10832 16.9795C8.09967 17.2345 8.1888 17.4832 8.35747 17.6746C8.52613 17.866 8.76158 17.9857 9.01562 18.0092C9.26966 18.0327 9.52308 17.9582 9.724 17.801L9.818 17.718L11.939 15.596C12.1265 15.4085 12.2318 15.1542 12.2318 14.889C12.2318 14.6238 12.1265 14.3695 11.939 14.182ZM9.818 12.061C9.64581 11.8888 9.41671 11.7854 9.17368 11.7701C8.93066 11.7548 8.6904 11.8287 8.498 11.978L8.404 12.061L6.283 14.182L6.199 14.276C6.04908 14.4684 5.97466 14.709 5.98976 14.9525C6.00486 15.196 6.10843 15.4255 6.28099 15.598C6.45354 15.7704 6.68317 15.8738 6.92665 15.8887C7.17014 15.9036 7.41068 15.8291 7.603 15.679L7.697 15.596L9.818 13.475L9.901 13.381C10.0503 13.1886 10.1242 12.9483 10.1089 12.7053C10.0936 12.4623 9.99018 12.2332 9.818 12.061Z"
};

interface AuditContentProps {
  stepId: string;
}

const photos = [
  "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcGxhdGluZyUyMGZvb2QlMjBraXRjaGVufGVufDF8fHx8MTc3MDI3Mzg4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1613160775054-d4a634592b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwcGxhdGUlMjBoaWdoJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzAyNzM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1763825435673-7789c12e3b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZyaWVuZHMlMjBlYXRpbmclMjBhdCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzcwMjczODgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1708517194326-6077b788f04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBidXN5fGVufDF8fHx8MTc3MDI3Mzg4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1769638913684-87c75872fda7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZnJlc2glMjBzYWxhZCUyMGJvd2wlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3MDI3Mzg4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const avatars = [
    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjBhdmF0YXIlMjB1c2VyfGVufDF8fHx8MTc3MDI3NDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjBtYW4lMjBzbWlsaW5nfGVufDF8fHx8MTc3MDI3NDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1770058428154-9eee8a6a1fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzAyNzQ2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1615327388641-203faee20165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjB5b3VuZyUyMG1hbnxlbnwxfHx8fDE3NzAyNzQ2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1647970231365-3313b60b7039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGZhY2UlMjBkaXZlcnNlJTIwcGVvcGxlfGVufDF8fHx8MTc3MDIyMDU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
]

const mapImage = imgBasemapImage;

// --- Sub-Components ---

// Replicating Figma "Frame 13" (Main Pin)
function MainPin() {
  return (
    <div className="relative w-[129px] flex flex-col items-center gap-[6px] -translate-x-1/2 -translate-y-1/2 -mt-[20px]">
       {/* Label */}
      <div className="bg-white px-2 py-1 rounded-[8px] shadow-sm flex items-center justify-center min-w-[120px] -translate-y-[5px]">
        <span className="font-['Figtree'] font-bold text-[16px] text-black">Lumière Bistro</span>
      </div>
      
      {/* Pin Shape Group */}
      <motion.div 
        className="relative w-[79px] h-[103px]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Union Shape */}
        <svg className="absolute top-0 left-0 w-[79px] h-[86px]" viewBox="0 0 79 86" fill="none">
           <path d={svgPaths.p17091880} fill="white" />
        </svg>
        
        {/* Small Dot below tip */}
        <div className="absolute left-[34px] top-[92px] w-[11px] h-[11px] bg-white rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
        
        {/* Inner Black Circle */}
        <div className="absolute left-[16px] top-[16px] w-[47px] h-[47px] bg-black rounded-full flex items-center justify-center">
             {/* Spatula Icon */}
             <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d={svgPaths.p1bef0180} fill="white"/>
             </svg>
        </div>
      </motion.div>
    </div>
  )
}

// Replicating Figma "Frame 2" etc (Competitor Pin)
function CompetitorPin({ label = "Competitor", delay = 0 }: { label?: string, delay?: number }) {
  return (
    <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: delay, duration: 1, ease: "easeInOut" }}
        className="absolute flex flex-col items-center gap-[4px] w-[69px] -translate-x-1/2 -translate-y-1/2"
    >
       {/* Label */}
       <div className="bg-[rgba(255,255,255,0.2)] px-[3px] py-[1px] rounded-[4px] shadow-sm min-w-[69px] flex justify-center text-[rgb(241,245,249)]">
          <span className="font-['Figtree'] font-medium text-[12px] text-[rgb(255,255,255)] leading-tight p-[2px]">
            {label}
          </span>
       </div>
       
       {/* Pin Shape */}
       <div className="w-[27px] h-[27px] relative">
          <svg className="w-full h-full" viewBox="0 0 27 27" fill="none">
             <circle cx="13.5" cy="13.5" r="4.5" fill="white" />
             <circle cx="13.5" cy="13.5" r="12.7895" stroke="#7B7D8D" strokeWidth="1.42" />
          </svg>
       </div>
    </motion.div>
  )
}

function LocationView() {
    const [showCompetitors, setShowCompetitors] = useState(false);
    const [scale, setScale] = useState(1);
    const [isRotating, setIsRotating] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Spread out competitor locations (more centered, total 8)
    const competitors = [
        { x: 500, y: 420, delay: 0 },
        { x: 850, y: 380, delay: 3 },
        { x: 450, y: 650, delay: 6 },
        { x: 920, y: 600, delay: 9 },
        { x: 720, y: 280, delay: 12 },
        { x: 580, y: 750, delay: 15 },
        { x: 980, y: 480, delay: 18 },
        { x: 380, y: 550, delay: 21 },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current) return;
            const { innerWidth, innerHeight } = window;
            
            // Pin is at x=656. To center it, we shift the map.
            // The shortest distance from the pin to a horizontal edge is 656px (left edge).
            // To ensure the map covers the screen even when centered on this off-center pin,
            // we must calculate scale based on this "shortest side" doubled.
            // Effective width coverage = 656 * 2 = 1312px.
            const effectiveMapWidth = 656 * 2; 
            const effectiveMapHeight = 1024; // Pin is vertically centered (512 top, 512 bottom)

            const scaleX = innerWidth / effectiveMapWidth;
            const scaleY = innerHeight / effectiveMapHeight;
            
            // Use the larger scale to ensure coverage
            // Add a small buffer (1.05) to prevent any pixel gaps
            setScale(Math.max(scaleX, scaleY) * 1.05);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial calculation

        const timer = setTimeout(() => {
            setShowCompetitors(true);
        }, 1000); // Start showing competitors earlier
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    // Pin location on map (approximate pixels)
    const pinX = 656;
    const mapCenter = 1575 / 2;
    // Calculate offset needed to center the pin on screen
    // If pin is at 656, and we want it at 787.5 (center), we need to shift RIGHT by (787.5 - 656)
    const centeringOffsetX = mapCenter - pinX;

    return (
        <motion.div 
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full relative overflow-hidden bg-slate-950 flex items-center justify-center"
        >
             {/* Map Background Container - Scaled to cover */}
            <motion.div 
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: isRotating ? 360 : 0 }}
                transition={{ 
                    default: { duration: 1.5, ease: "easeOut" },
                    rotate: isRotating 
                        ? { duration: 240, repeat: Infinity, ease: "linear", delay: 1 }
                        : { duration: 1.5, ease: "easeInOut" }
                }}
                style={{ 
                    width: 1575, 
                    height: 1024,
                    scale: scale,
                    x: centeringOffsetX,
                    transformOrigin: '656px 512px'
                }}
                className="relative shrink-0"
            >
                <img src={mapImage} className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" alt="Map View" draggable={false} />
                
                {/* Main Pin - Center (approx based on Figma) */}
                <div className="absolute left-[656px] top-[50%] z-20">
                     {/* Counter-rotate the pin so it stays upright while map rotates */}
                     <motion.div
                        animate={{ rotate: isRotating ? -360 : 0 }}
                        transition={{ 
                            duration: isRotating ? 240 : 1.5, 
                            repeat: isRotating ? Infinity : 0, 
                            ease: isRotating ? "linear" : "easeInOut", 
                            delay: isRotating ? 1 : 0 
                        }}
                     >
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        >
                            <MainPin />
                        </motion.div>
                     </motion.div>
                     
                     {/* Beacon / Radar Waves - Centered on Pin */}
                     {/* "Following the dot on the main frame" and "Wider almost 75% of the map" */}
                     <div className="absolute left-0 top-[45px] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] flex items-center justify-center pointer-events-none">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ width: "20px", height: "20px", opacity: 0.6, borderWidth: "2px" }}
                                animate={{ width: "100%", height: "100%", opacity: 0, borderWidth: "0px" }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 1.2,
                                    ease: "easeOut"
                                }}
                                className="absolute rounded-full border-blue-400 bg-blue-500/5"
                                style={{ borderStyle: "solid" }}
                            />
                        ))}
                     </div>
                </div>

                {/* Competitor Pins - Wider Distribution */}
                <AnimatePresence>
                    {showCompetitors && competitors.map((comp, i) => (
                        <div key={i} className="absolute" style={{ left: comp.x, top: comp.y }}>
                             <CompetitorPin delay={comp.delay} />
                        </div>
                    ))}
                </AnimatePresence>

            </motion.div>

             {/* Overlay UI */}
             <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-slate-950/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-white/10 flex items-center gap-3 z-50">
                 <SiriWaveIcon className="w-8 h-8" />
                 <span className="font-semibold text-slate-200 text-sm tracking-wide">Finding competitors...</span>
             </div>

             {/* Hamburger Menu & Settings */}
             <div className="absolute top-6 right-6 z-50">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 bg-slate-950/90 backdrop-blur-md rounded-full shadow-2xl border border-white/10 flex items-center justify-center text-slate-200 hover:bg-slate-900 transition-colors"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="absolute top-14 right-0 w-64 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-4 overflow-hidden"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-slate-200">
                                    <RotateCw className={`w-5 h-5 ${isRotating ? 'text-blue-400' : 'text-slate-500'}`} />
                                    <span className="font-medium text-sm">Map Rotation</span>
                                </div>
                                <button 
                                    onClick={() => setIsRotating(!isRotating)}
                                    className={`w-12 h-7 rounded-full transition-colors relative ${isRotating ? 'bg-blue-500' : 'bg-slate-700'}`}
                                >
                                    <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${isRotating ? 'left-6' : 'left-1'}`} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
             </div>


        </motion.div>
    );
}

function ProfileView() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="w-full max-w-5xl p-6"
    >
      {/* Blended Background Card */}
      <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-sm">
        <div className="h-64 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
             <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-5xl font-bold mb-2 tracking-tight">Lumière Bistro</h1>
                <p className="opacity-90 flex items-center gap-2 text-lg font-light"><MapPin className="w-5 h-5"/> 123 Culinary Ave, Food District, NY</p>
             </div>
        </div>
        <div className="p-10 flex items-start justify-between">
            <div className="flex gap-12">
                <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2 block">Google Rating</span>
                    <div className="flex items-center gap-3">
                        <span className="text-5xl font-bold text-white tracking-tighter">4.8</span>
                        <div className="flex flex-col gap-1">
                             <div className="flex text-amber-400">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-slate-400 text-xs font-medium">1,204 Reviews</span>
                        </div>
                    </div>
                </div>
                 <div>
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2 block">Status</span>
                    <div className="flex items-center gap-2 mt-2 text-emerald-400 font-semibold bg-emerald-900/20 px-3 py-1 rounded-full border border-emerald-800/50">
                        <CheckCircle className="w-4 h-4" /> Verified
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4">
                 <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center gap-2 w-32">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <span className="text-xs font-medium text-slate-300 truncate max-w-full">Website</span>
                 </div>
                 <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center gap-2 w-32">
                    <Users className="w-6 h-6 text-indigo-400" />
                    <span className="text-xs font-medium text-slate-300">Price: $$$</span>
                 </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

function SentimentView() {
    const reviews = [
        { name: "Kendrick Khoe", time: "2 months ago", rating: 5, text: "First time I came here was in the 2000's. My cousin works nearby and told me about it. It just to be a shared spot. They only operate in evening, duri...", avatar: avatars[0] },
        { name: "Chanil Jung", time: "3 months ago", rating: 5, text: "I tried The Halal Guys from their street food cart in NYC, and honestly, it's unbeatable for the price. Huge portions, great flavor, and super satisfy...", avatar: avatars[1] },
        { name: "G 3956", time: "4 months ago", rating: 5, text: "I've heard about Halal Guys for many years, and food blogs always said it was good, but I'm usually not the type of person to go for this kind of food...", avatar: avatars[2] },
        { name: "Nabiha K.", time: "4 weeks ago", rating: 5, text: "Can you believe 1 hr and 40 minutes drive just for this spot??? Yup! Been doing it for 20 yrs and will keep going as long as they stay open! Only thin...", avatar: avatars[3] },
        { name: "Richard Yu", time: "4 months ago", rating: 4, text: "The Halal Guys are a true NYC staple — iconic, really. It's still one of the best food buys out there, though the quality has been somewhat inconsiste...", avatar: avatars[4] },
    ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-3xl flex flex-col items-center justify-center p-6"
    >
        <div className="flex flex-col gap-4 w-full">
            {reviews.map((review, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700">
                                <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-200 text-sm">{review.name}</h4>
                                <span className="text-xs text-slate-500">{review.time}</span>
                            </div>
                        </div>
                        <div className="flex text-amber-400 gap-0.5">
                            {Array.from({length: 5}).map((_, idx) => (
                                <Star key={idx} className={`w-4 h-4 ${idx < review.rating ? "fill-current" : "text-slate-800 fill-slate-800"}`} />
                            ))}
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {review.text} <span className="text-slate-500 font-medium cursor-pointer hover:text-blue-400">More</span>
                    </p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  );
}

function PhotoView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl h-[70vh] p-6"
    >
        <div className="grid grid-cols-4 grid-rows-2 gap-6 h-full">
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={photos[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Main" />
                 <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Camera className="w-4 h-4" /> High Resolution
                </div>
            </div>
            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-xl mt-12 mb-12 translate-y-4">
                 <img src={photos[1]} className="w-full h-full object-cover" alt="Thumb 1" />
            </div>
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg">
                 <img src={photos[3]} className="w-full h-full object-cover" alt="Thumb 2" />
            </div>
             <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden shadow-lg relative bg-slate-900">
                 <img src={photos[4]} className="w-full h-full object-cover opacity-60" alt="Thumb 3" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl tracking-tight">+42</span>
                 </div>
            </div>
        </div>
    </motion.div>
  );
}


function ReportView() {
    return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full flex flex-col items-center justify-center"
        >
            <div className="relative mb-8">
                <div className="w-32 h-32 border-4 border-slate-800 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-blue-500">85%</div>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Compiling Final Report</h2>
            <p className="text-slate-400 mt-4 text-xl">Analyzing data points and generating insights...</p>
        </motion.div>
    )
}

// --- Main Component ---

export function DataCollage({ stepId }: AuditContentProps) {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        {stepId === 'location' && <LocationView key="location" />}
        {stepId === 'profile' && <ProfileView key="profile" />}
        {stepId === 'sentiment' && <SentimentView key="sentiment" />}
        {stepId === 'photos' && <PhotoView key="photos" />}
        {stepId === 'report' && <ReportView key="report" />}
      </AnimatePresence>
    </div>
  );
}
