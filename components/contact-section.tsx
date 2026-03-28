"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
  title?: string;
  description?: string;
}

export function ContactSection({
  className,
  title = "Get in Touch",
  description = "Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
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
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12 md:mb-14 text-center space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-pretty">
              {title}
            </h2>
            <p className="max-w-3xl text-muted-foreground lg:text-xl mx-auto">
              {description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
            <p className="text-muted-foreground mx-auto w-full text-center mt-4">
              Or reach out to us at{" "}
              <a
                href="mailto:supratik.deagle@gmail.com"
                className="text-primary hover:underline font-medium"
              >
                supratik.deagle@gmail.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
