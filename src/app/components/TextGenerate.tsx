"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const words = `  Whether you are dreaming of a groundbreaking application or a transformative platform, AlphaCoders is here to guide you every step of the way. Imagination is just the beginning—let us design and create something extraordinary with you....
`;

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}
