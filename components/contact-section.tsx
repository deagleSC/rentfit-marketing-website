"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = "supratik.deagle@gmail.com";

interface ContactSectionProps {
  className?: string;
  title?: string;
  description?: string;
}

export function ContactSection({
  className,
  title = "Contact",
  description = "Questions about RentFit, partnerships, or feedback? Send an email—we read every message.",
}: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className={cn("py-16 sm:py-24 md:py-32", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-left space-y-6"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-pretty">
              {title}
            </h2>
            <p className="text-muted-foreground lg:text-lg">{description}</p>
          </div>
          <div className="flex items-center gap-2 shadow-sm">
            <span className="text-sm font-medium text-muted-foreground">
              Email us at
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/60"
            >
              <Mail className="size-5 shrink-0" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
