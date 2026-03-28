"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => void | Promise<void>;
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmitHandler = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      if (onSubmit) {
        await onSubmit(data);
        // If custom onSubmit is provided and succeeds, show success
        toast.success(
          "Thank you for your message! We'll get back to you soon."
        );
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        // Call the API endpoint
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!apiUrl) {
          throw new Error("API URL is not configured");
        }

        const response = await fetch(`${apiUrl}/api/v1/support/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error?.message || "Failed to submit contact form"
          );
        }

        const result = await response.json();
        if (result.success) {
          toast.success(
            "Thank you for your message! We'll get back to you soon."
          );
          setSubmitSuccess(true);
          reset();
          // Reset success message after 5 seconds
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          throw new Error("Failed to submit contact form");
        }
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="space-y-6 bg-background rounded-xl border-0 dark:border-0 p-6 sm:p-8 lg:p-10 shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgb(255,255,255,0.08),0_4px_12px_rgb(255,255,255,0.04),inset_0_1px_0_rgb(255,255,255,0.1)]"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              {...register("name")}
              className={cn(errors.name && "ring-0")}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              className={cn(errors.email && "ring-0")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="What is this regarding?"
            {...register("subject")}
            className={cn(errors.subject && "ring-0")}
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-sm text-destructive">{errors.subject.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us how we can help..."
            rows={6}
            {...register("message")}
            className={cn("h-32", errors.message && "ring-0")}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="rounded-md bg-primary/10 border border-primary/20 p-4 text-sm text-primary">
            Thank you for your message! We&apos;ll get back to you soon.
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
