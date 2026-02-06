import React, { useState, useEffect } from "react";
import { DataCollage } from "./components/DataCollage";
import { FluidScanner } from "./components/FluidScanner";
import { AuditStepper } from "./components/AuditStepper";

const STEPS = [
  { id: "location", label: "Finding competitors" },
  { id: "profile", label: "Analyzing Profile" },
  { id: "sentiment", label: "Scanning Sentiment" },
  { id: "photos", label: "Auditing Photos" },
  { id: "report", label: "Generating Report" },
];

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Hotkeys: 'r' to reset, 'h' to hold/pause
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === 'r') {
        setCurrentStepIndex(0);
        setIsPaused(false); // Unpause on reset
      } else if (key === 'h') {
        setIsPaused(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    // Variable duration based on step
    const currentStepId = STEPS[currentStepIndex].id;
    let duration = 4000;
    
    if (currentStepId === 'location') {
        duration = 30000; // Slower pace for location scan (Wait for 8 pins * 3s + 5s buffer)
    }

    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= STEPS.length - 1) {
            // Reset to 0 to loop the demo
            return 0;
        }
        return prev + 1;
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [currentStepIndex, isPaused]);

  return (
    <div className="h-screen w-full bg-slate-950 font-['Figtree',sans-serif] text-slate-100 selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* Main Scanning Area - Full Screen without container */}
      <main className="absolute inset-0 flex items-center justify-center">
          
          {/* Content Layer */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
             <DataCollage stepId={STEPS[currentStepIndex].id} />
          </div>

          {/* Scanning Overlay Layer - Covers full screen */}
          {STEPS[currentStepIndex].id !== 'report' && <FluidScanner />}

      </main>

      {/* Floating Stepper */}
      <AuditStepper steps={STEPS} currentStepIndex={currentStepIndex} />

      {/* Paused Indicator */}
      {isPaused && (
        <div className="absolute top-8 right-8 z-50 bg-slate-900/80 backdrop-blur-md text-slate-400 text-xs font-mono px-3 py-1 rounded border border-slate-700 pointer-events-none">
          [FLOW PAUSED]
        </div>
      )}
      
    </div>
  );
}
