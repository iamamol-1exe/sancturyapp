import React from "react";
import Image from "next/image";
import { Droplets } from "lucide-react";

export const BrandPanel = () => {
  return (
    <div className="hidden lg:flex lg:col-span-7 relative flex-col justify-between p-12 overflow-hidden bg-surface-container-lowest">
      {/* Logo & Hero */}
      <div className="z-10">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-10 h-10 rounded-xl signature-gradient flex items-center justify-center shadow-[0_0_20px_rgba(13,158,143,0.3)]">
            <Droplets className="text-on-primary" size={20} />
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-primary">
            Fluid Atelier
          </span>
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1] max-w-md">
          The sanctuary for{" "}
          <span className="text-primary italic">digital</span> craftsmen.
        </h1>
        <p className="mt-8 text-lg text-on-surface-variant max-w-sm font-medium leading-relaxed">
          Step into an obsidian-carved workspace designed for focus,
          tranquility, and high-performance collaboration.
        </p>
      </div>

      {/* Social Proof */}
      <div className="z-10 flex gap-4 mt-12">
        <div className="flex -space-x-3">
          <Image
            className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
            alt="Close-up portrait of a professional woman with soft lighting and a blurred dark office background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwqsmbGr4vfKQkF5UqTMB0N5QgNrsLryzjNBimRfJcX9uZFGm7ZdYWhWqibhcjUF710NxIVYXbBRA2xqKATGp_LlI16_iwsN1KwH366sqp23TqjokW2zaDlxer-AKqbeoqtdWFBEsS_eeZ7b2-GdDdaF7Q-Q8S2uOBGAZrheL9vvlWdK9lEYjqKrih7pL2THb4uEQrzI0XWuIPxke81qTYadbbj2xjJXfmSX27ruLF3FtErnsIsC2M5QuKbuAWEWdVN1IK0RhUaa8"
            width={40}
            height={40}
            sizes="40px"
          />
          <Image
            className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
            alt="Minimalist portrait of a man in a black turtleneck against a deep charcoal background"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEac81djAjwxsKAgExv727WG7jsDNfEl1x_VVzGr1A2G92V54Sv3TYgGyzxWihQNPtybYcR55XvtQGDVOLfgLlZl_9IPsNWWr6-4hdy5Eb7YNn8bg-a0qkJLrzPJQ28fRtqdt21xvSn6F-72ncv-nbAVeq_T9g70FT7JVqEfPG-1nqnA2UD4PFqWU-bn94f0E9QtKs_FQ8bPSjLxNX7LWsuwnsfGkkcxsaAXgL-JPEuK2b0w-SZOA8O3T49ANdxWCBMXqmWiNJFZ0"
            width={40}
            height={40}
            sizes="40px"
          />
          <Image
            className="w-10 h-10 rounded-full border-2 border-surface-container-lowest"
            alt="Creative professional smiling softly in a dimly lit studio environment with teal accents"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKZL05plucsxuXolu9L86tS92hBc3lfnjpXCyks7yqdzWdXFtTOGWQ11KVEqfYFWzy1v3oIeRBCrUF-cs-o2dBcV-hpXsBpCCjvoO1wcRJf9YFH3hDp7K0L21gvsiz433EaQZQ2e5Lbat1g_MiyfUYCqI3-O0u_tkXYSaADwn-AmoLmUIS_Ejd7_OcMqSKHv5d-LMzaZ6dppDSQ-XA3D-0S3CjveJfRkMlpX9Dmn2jc2SfuXBKr8SPSnszPRZiCCOiIhBpLXZqxeU"
            width={40}
            height={40}
            sizes="40px"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-bold text-on-surface">
            Joined by 2k+ creators
          </span>
          <span className="text-xs text-on-surface-variant">
            Last activity 2m ago
          </span>
        </div>
      </div>

      {/* Background Art */}
      <div className="absolute inset-0 opacity-40">
        <Image
          className="object-cover"
          alt="Abstract flowing 3D liquid waves in deep teal and black silk textures with cinematic soft lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWZdOVYsN1jYCg87pDxkJeeUYyniXcwLaAyTBSfdCqq1fG5lcqalVsmiX9ZvxcMeDY0PJrEeaGruc0BEP7E60AhtLFgor1DeQlVAvv5FYgoQPlNmgriZ0-V7k-kl4z9P9v7YAGzDfeBLNibID3DunlyV6xtwEhknOKcT2xADPuju-rXLai2rDkwD82QIu4-v_2kxafrsO6J6bYJiQve2AmFqZy1W3Exybdq823pgJazZCk6h9We4iUOnkHryXjfivVFa7dyWqyIFk"
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
      </div>
    </div>
  );
};
