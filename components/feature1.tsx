"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface Feature1Props {
  title: string;
  description?: string;
  imageSrc?: string;
  imageSrcLight?: string;
  imageSrcDark?: string;
  imageAlt: string;
  buttonPrimary?: {
    text: string;
    href: string;
  };
  buttonSecondary?: {
    text: string;
    href: string;
  };
  imagePosition?: "left" | "right";
  variant?: "default" | "muted";
  className?: string;
  id?: string;
}

const Feature1 = ({
  title = "AI-assisted rental search",
  description =
    "Describe neighborhoods, budget, and must-haves in plain language. RentFit helps surface listings that fit what you asked for.",
  imageSrc,
  imageSrcLight,
  imageSrcDark,
  imageAlt = "Feature image",
  buttonPrimary,
  buttonSecondary,
  imagePosition = "right",
  variant = "default",
  className,
  id,
}: Feature1Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const hasCustomImage = Boolean(
    imageSrc || imageSrcLight || imageSrcDark,
  );

  // Determine which image to use based on theme (only when paths are provided).
  const getImageSrc = (): string | null => {
    if (imageSrc) return imageSrc;
    if (!mounted) return imageSrcLight || imageSrcDark || null;
    const currentTheme = resolvedTheme || theme;
    return currentTheme === "dark"
      ? imageSrcDark || imageSrcLight || null
      : imageSrcLight || imageSrcDark || null;
  };

  const resolvedSrc = hasCustomImage ? getImageSrc() : null;

  const textDirection = imagePosition === "left" ? -1 : 1;
  const imageDirection = imagePosition === "left" ? 1 : -1;

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "py-12 sm:py-16 md:py-20",
        variant === "muted" && "bg-muted/30",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2",
            imagePosition === "left" &&
              "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
          )}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: textDirection * 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: textDirection * 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-balance lg:leading-tight">
                {title}
              </h2>
              {description && (
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {description}
                </p>
              )}
            </div>
            {(buttonPrimary || buttonSecondary) && (
              <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
                {buttonPrimary && (
                  <Button asChild size="lg" className="min-w-[160px]">
                    <Link href={buttonPrimary.href}>{buttonPrimary.text}</Link>
                  </Button>
                )}
                {buttonSecondary && (
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="min-w-[160px]"
                  >
                    <Link href={buttonSecondary.href}>
                      {buttonSecondary.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: imageDirection * 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: imageDirection * 50 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-3xl -z-10 group-hover:blur-xl transition-all duration-500" />
            <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-lg group-hover:shadow-xl transition-all duration-300">
              {resolvedSrc ? (
                <Image
                  src={resolvedSrc}
                  alt={imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="flex min-h-[280px] w-full items-center justify-center bg-muted/40 px-6 py-16 text-center text-sm text-muted-foreground"
                  role="img"
                  aria-label={imageAlt}
                >
                  Image placeholder — add screenshots later.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Feature1 };
