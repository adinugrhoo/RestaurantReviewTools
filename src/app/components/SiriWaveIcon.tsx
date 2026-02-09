import React from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-e19f583nve";

export function SiriWaveIcon({ className = "size-full" }: { className?: string }) {
  return (
    <div className={`relative ${className} -ml-1`}>
      {/* Base Layer - Slow Rotation + Breathing */}
      <motion.svg 
        className="block size-full absolute inset-0 blur-sm" 
        fill="none" 
        preserveAspectRatio="none" 
        viewBox="0 0 597.173 597.173"
        animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
        transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <g id="icon-bg">
          <path d={svgPaths.pd7c7480} fill="#081939" />
          <path d={svgPaths.pd7c7480} fill="url(#paint0_radial_32_37)" fillOpacity="0.9" />
          <path d={svgPaths.pd7c7480} fill="url(#paint1_radial_32_37)" fillOpacity="0.85" />
          <path d={svgPaths.pd7c7480} fill="url(#paint2_radial_32_37)" fillOpacity="0.8" />
          <path d={svgPaths.pd7c7480} fill="url(#paint3_radial_32_37)" fillOpacity="0.88" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(201.414 98.0577) rotate(63.1327) scale(224.794 266.666)" gradientUnits="userSpaceOnUse" id="paint0_radial_32_37" r="1">
            <stop stopColor="#7D7194" />
            <stop offset="1" stopColor="#7D7194" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(581.274 202.298) rotate(161.19) scale(298.636)" gradientUnits="userSpaceOnUse" id="paint1_radial_32_37" r="1">
            <stop stopColor="#4A8F9F" />
            <stop offset="1" stopColor="#4A8F9F" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(397.528 581.275) rotate(-108.939) scale(190.527)" gradientUnits="userSpaceOnUse" id="paint2_radial_32_37" r="1">
            <stop stopColor="#5C4763" />
            <stop offset="1" stopColor="#5C4763" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-26.5016 406.362) rotate(-18.3418) scale(342.488 476.067)" gradientUnits="userSpaceOnUse" id="paint3_radial_32_37" r="1">
            <stop stopColor="#3D3041" />
            <stop offset="1" stopColor="#3D3041" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      {/* Pink Top - Floating & Breathing (Polyrhythmic) */}
      <motion.div 
        className="absolute inset-[13%_45%_48%_31%] blur-[2px]" 
        style={{ top: '13.5%', right: '45.4%', bottom: '48%', left: '31.5%' }}
        animate={{ 
            scale: [1, 1.2, 0.9, 1], 
            rotate: [0, 12, -8, 0], 
            opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.8, 1] },
            rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.72 229.218">
          <path d={svgPaths.p3072e070} fill="url(#paint0_linear_32_27)" id="pink-top" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_27" x1="4.04532e-07" x2="128.039" y1="50.1723" y2="28.9709">
              <stop stopColor="#E375A0" />
              <stop offset="1" stopColor="#E375A0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Pink Left */}
      <motion.div 
        className="absolute blur-[2px]"
        style={{ top: '27.8%', right: '5.8%', bottom: '14.7%', left: '19.5%' }}
        animate={{ 
            scale: [1, 0.9, 1.05, 1], 
            x: [0, -5, 3, 0],
            y: [0, 3, -3, 0], 
            opacity: [0.6, 0.9, 0.6] 
        }}
        transition={{ 
            default: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 445.908 342.754">
          <g id="pink-left">
            <path d={svgPaths.pb8bd5c0} fill="url(#paint0_radial_32_31)" />
            <path d={svgPaths.pb8bd5c0} fill="url(#paint1_linear_32_31)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(107.772 51.2815) rotate(69.3339) scale(215.266 259.286)" gradientUnits="userSpaceOnUse" id="paint0_radial_32_31" r="1">
              <stop stopColor="#B850C1" />
              <stop offset="1" stopColor="#DCADE0" stopOpacity="0" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_32_31" x1="237.19" x2="235.19" y1="-0.314945" y2="66.6851">
              <stop stopColor="#B850C1" />
              <stop offset="1" stopColor="#DCADE0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blue Middle */}
      <motion.div 
        className="absolute mix-blend-hard-light blur-[2px]"
        style={{ top: '14.2%', right: '15.4%', bottom: '19.2%', left: '28.7%' }}
        animate={{ 
            rotate: [0, 15, -10, 0], 
            scale: [1, 1.15, 0.95, 1] 
        }}
        transition={{ 
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.8, 1] }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 333.734 397.929">
          <g id="blue-middle" style={{ mixBlendMode: "hard-light" }}>
            <path d={svgPaths.p2d2b9e00} fill="url(#paint0_linear_32_25)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_25" x1="33.5694" x2="199.648" y1="295.426" y2="231.821">
              <stop stopColor="#7EA1E4" />
              <stop offset="1" stopColor="#70CBFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Blue Right */}
      <motion.div 
        className="absolute blur-[2px]"
        style={{ top: '12.3%', right: '6.6%', bottom: '10.5%', left: '25.1%' }}
        animate={{ 
            x: [0, 8, -4, 0], 
            y: [0, -8, 4, 0], 
            opacity: [0.7, 1, 0.7] 
        }}
        transition={{ 
            default: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 407.888 461.024">
          <path d={svgPaths.p3012e330} fill="url(#paint0_linear_32_33)" id="blue-right" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_33" x1="407.044" x2="203.993" y1="207.847" y2="299.355">
              <stop stopColor="#5BAEEC" />
              <stop offset="1" stopColor="#5BAEEC" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Intersect */}
      <motion.div 
         className="absolute blur-[1px]"
         style={{ top: '12.8%', right: '4%', bottom: '21.2%', left: '26.3%' }}
         animate={{ 
             opacity: [0.4, 0.9, 0.4], 
             scale: [0.95, 1.08, 0.95] 
         }}
        transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.2, 1] // Fast attack
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416.025 394.094">
          <path d={svgPaths.p28c46200} fill="url(#paint0_linear_32_23)" fillOpacity="0.78" id="Intersect" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_23" x1="64.6418" x2="333.961" y1="183.226" y2="233.297">
              <stop stopColor="#85FAFE" stopOpacity="0" />
              <stop offset="1" stopColor="#85FAFE" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Green Left (Dodge) */}
      <motion.div 
        className="absolute mix-blend-color-dodge blur-[2px]"
        style={{ top: '19.7%', right: '11.7%', bottom: '25.3%', left: '15.5%' }}
        animate={{ 
            rotate: [-5, 5, -5], 
            scale: [1, 1.1, 1] 
        }}
        transition={{ 
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.633 328.774">
          <g id="green-left" style={{ mixBlendMode: "color-dodge" }}>
            <path d={svgPaths.p369dcfc0} fill="url(#paint0_radial_32_21)" fillOpacity="0.8" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(115.44 51.4277) rotate(84.3771) scale(197.07 220.104)" gradientUnits="userSpaceOnUse" id="paint0_radial_32_21" r="1">
              <stop stopColor="#65ECE8" />
              <stop offset="1" stopColor="#8BECE9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

       {/* Green Left (Normal) */}
       <div className="absolute blur-[2px]" style={{ top: '19.7%', right: '11.7%', bottom: '25.3%', left: '15.5%' }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 434.633 328.774">
          <path d={svgPaths.p369dcfc0} fill="url(#paint0_linear_32_19)" id="green-left" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_32_19" x1="353.439" x2="411.44" y1="275.428" y2="164.428">
              <stop stopColor="#7BE7F6" stopOpacity="0" />
              <stop offset="0.75" stopColor="#7BE7F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Pink */}
      <motion.div 
        className="absolute blur-[2px]"
        style={{ top: '51.9%', right: '27.7%', bottom: '11.6%', left: '53.4%' }}
        animate={{ 
            y: [0, 6, -2, 0], 
            opacity: [0.5, 1, 0.5] 
        }}
        transition={{ 
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.238 217.817">
          <g id="bottom-pink">
            <path d={svgPaths.p8728400} fill="url(#paint0_radial_32_35)" />
            <path d={svgPaths.p8728400} fill="url(#paint1_linear_32_35)" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(23.7547 197.284) rotate(-68.2079) scale(123.761 158.895)" gradientUnits="userSpaceOnUse" id="paint0_radial_32_35" r="1">
              <stop stopColor="#E375A0" stopOpacity="0" />
              <stop offset="1" stopColor="#FF91C6" />
            </radialGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_32_35" x1="11.3872" x2="20.2211" y1="25.9059" y2="85.9767">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Highlight (Center) */}
      <motion.div 
        className="absolute"
        style={{ top: '29.5%', right: '37.4%', bottom: '38.3%', left: '37.4%' }}
        animate={{ 
            scale: [0.85, 1.35, 0.85], 
            opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.3, 1] // Heartbeat-like
        }}
      >
        <div className="absolute inset-[-33.9%_-56.53%_-44.34%_-43.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.368 341.719">
            <g filter="url(#filter0_df_32_29)" id="highlight">
              <path d={svgPaths.p2b715680} fill="white" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="341.719" id="filter0_df_32_29" width="300.368" x="0" y="7.16049e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="10" dy="10" />
                <feGaussianBlur stdDeviation="37.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_32_29" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_32_29" mode="normal" result="shape" />
                <feGaussianBlur result="effect2_foregroundBlur_32_29" stdDeviation="18" />
              </filter>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
