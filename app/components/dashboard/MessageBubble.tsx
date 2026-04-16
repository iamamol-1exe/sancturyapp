"use client";

import React from "react";
import Image from "next/image";

type MessageBubbleProps = {
  content: string;
  time: string;
  isOwn?: boolean;
  image?: {
    src: string;
    alt: string;
    label?: string;
  };
};

export const MessageBubble = ({
  content,
  time,
  isOwn = false,
  image,
}: MessageBubbleProps) => {
  return (
    <div
      className={`flex flex-col max-w-[75%] ${
        isOwn ? "self-end items-end" : "self-start items-start"
      }`}
    >
      <div
        className={`rounded-2xl px-4 py-3 ${
          isOwn
            ? "bg-primary/15 border border-primary/25 rounded-br-md"
            : "bg-surface-container border border-outline-variant/15 rounded-bl-md"
        }`}
      >
        {image && (
          <div className="mb-3 rounded-xl overflow-hidden relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={240}
              className="w-full h-auto object-cover rounded-xl"
            />
            {image.label && (
              <div className="absolute bottom-3 left-3">
                <span className="bg-primary text-on-primary text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                  {image.label}
                </span>
              </div>
            )}
          </div>
        )}
        <p
          className={`text-[14px] leading-relaxed ${
            isOwn ? "text-primary/90" : "text-on-surface/85"
          }`}
        >
          {content}
        </p>
      </div>
      <span className="text-[11px] text-on-surface-variant/40 mt-1.5 px-1">
        {time}
      </span>
    </div>
  );
};
