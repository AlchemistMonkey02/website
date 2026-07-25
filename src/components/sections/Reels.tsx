"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

interface Reel {
  title?: string;
  platform: string;
  videoUrl: string;
}

interface ReelsProps {
  data?: Reel[] | null;
}

export const Reels = ({ data }: ReelsProps) => {
  return null;
  
  // const displayReels = data && data.length > 0 ? data : [
  //   { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/3iZk3zJ2N-8" },
  //   { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/7N_7T3f_Tf8" },
  //   { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/3iZk3zJ2N-8" }
  // ];
  // ... rest of component logic can stay below if needed, but returning null hides it.
};
