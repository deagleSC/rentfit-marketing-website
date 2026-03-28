"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
    className?: string;
  };
  reviews?: {
    count: number;
    rating?: number;
    avatars: {
      src: string;
      alt: string;
    }[];
  } | null;
  className?: string;
}

const Hero7 = ({
  heading = "Checkmate Your Limits with AI-Powered Chess Improvement",
  description = "Transform your chess game with AI-driven analysis, customized puzzles, and personalized learning paths. Perfect for serious players committed to improvement.",
  button = {
    text: "Start Free Preview",
    url: "https://chessvine-web-881017844394.asia-south1.run.app/",
  },
  reviews,
  className,
}: Hero7Props) => {
  return (
    <section
      className={cn(
        "pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 container mx-auto",
        className
      )}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-5xl flex-col gap-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-balance text-muted-foreground lg:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button asChild className="w-full sm:w-auto">
            <Link href={button.url}>{button.text}</Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="#contact">Learn More</Link>
          </Button>
        </motion.div>
        {reviews && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row"
          >
            <span className="mx-4 inline-flex items-center -space-x-4">
              {reviews.avatars.map((avatar, index) => (
                <Avatar key={index} className="size-14 border">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                </Avatar>
              ))}
            </span>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="mr-1 font-semibold">
                  {reviews.rating?.toFixed(1)}
                </span>
              </div>
              <p className="text-left font-medium text-muted-foreground">
                from {reviews.count}+ reviews
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export { Hero7 };
