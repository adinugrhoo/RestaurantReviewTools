import { motion } from "motion/react";

export function ScannerOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {/* Scanning Line */}
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_2px_rgba(59,130,246,0.5)]"
      />
      
      {/* Optional: Slight blue tint trail or gradient below the line for effect */}
      <motion.div
        initial={{ top: "0%", opacity: 0 }}
        animate={{ top: "100%", opacity: [0, 0.15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse",
        }}
        className="absolute left-0 right-0 h-40 bg-gradient-to-t from-blue-500/10 via-blue-400/5 to-transparent"
      />
    </div>
  );
}
