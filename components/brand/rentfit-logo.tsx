"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type RentfitLogoProps = {
  className?: string;
  /** Edge length in pixels (square). */
  size?: number;
  priority?: boolean;
  alt?: string;
};

/** Same asset and sizing contract as `rentfit-v1-web` `RentfitLogo` (`/public/logo.png`). */
export function RentfitLogo({
  className,
  size = 32,
  priority = false,
  alt = "RentFit",
}: RentfitLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
