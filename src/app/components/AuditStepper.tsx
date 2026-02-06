import React from "react";
import { Check, Loader2, Circle } from "lucide-react";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Step {
  id: string;
  label: string;
}

interface AuditStepperProps {
  steps: Step[];
  currentStepIndex: number;
}

export function AuditStepper({ steps, currentStepIndex }: AuditStepperProps) {
  return (
    <div className="fixed bottom-8 left-1/2 z-30 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-xl transition-all">
        {steps.map((step, index) => {
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;
          const isFuture = index > currentStepIndex;

          return (
            <div
              key={step.id}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300",
                isActive ? "bg-white text-slate-900 shadow-lg shadow-blue-900/20" : "text-slate-400 hover:text-slate-200"
              )}
            >
              <div className="relative flex items-center justify-center">
                {isCompleted && <Check className="h-4 w-4 text-emerald-400" />}
                {isActive && <Loader2 className="h-4 w-4 animate-spin text-blue-600" />}
                {isFuture && <Circle className="h-3 w-3 fill-slate-700 text-transparent" />}
              </div>
              
              <span className={cn(
                "whitespace-nowrap text-sm font-medium",
                 isFuture ? "hidden sm:inline-block opacity-50" : "opacity-100"
              )}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
