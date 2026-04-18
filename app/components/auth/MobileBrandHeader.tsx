import React from "react";
import { Droplets } from "lucide-react";

export const MobileBrandHeader = () => {
  return (
    <div className="lg:hidden flex items-center gap-2 mb-12">
      <div className="w-8 h-8 rounded-lg signature-gradient flex items-center justify-center">
        <Droplets className="text-on-primary" size={16} />
      </div>
      <span className="text-lg font-bold tracking-tight text-primary">
        Fluid Atelier
      </span>
    </div>
  );
};
