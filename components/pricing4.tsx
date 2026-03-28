"use client";

import { Check } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

interface Pricing4Props {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  className?: string;
  id?: string;
}

const Pricing4 = ({
  title = "Pricing",
  description = "Check out our affordable pricing plans.",
  plans = [
    {
      name: "Free",
      badge: "Free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "Unlimited Integrations",
        "Windows, Linux, Mac support",
        "24/7 Support",
        "Free updates",
      ],
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      badge: "Pro",
      monthlyPrice: "$29",
      yearlyPrice: "$249",
      features: [
        "Everything in FREE",
        "Live call suport every month",
        "Unlimited Storage",
      ],
      buttonText: "Purchase",
    },
    {
      name: "Elite",
      badge: "Elite",
      monthlyPrice: "$59",
      yearlyPrice: "$549",
      features: [
        "Everything in PRO",
        "Advanced analytics",
        "Custom branding",
        "Unlimited users",
      ],
      buttonText: "Purchase",
      isPopular: true,
    },
  ],
  className,
}: Pricing4Props) => {
  const [isAnnually] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className={cn("py-16 sm:py-24 md:py-32", className)}
    >
      <div className="px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-pretty text-center"
          >
            {title}
          </motion.h2>
          <div className="flex flex-col gap-10 md:flex-row text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl text-muted-foreground lg:text-xl mx-auto"
            >
              {description}
            </motion.p>
            {/* <div className="flex h-11 w-fit shrink-0 items-center rounded-md bg-muted p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full grid-cols-2"
                onValueChange={(value) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem
                    value="monthly"
                    id="monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="monthly"
                    className="flex h-full cursor-pointer items-center justify-center px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Monthly
                  </Label>
                </div>
                <div className='h-full rounded-md transition-all has-[button[data-state="checked"]]:bg-background'>
                  <RadioGroupItem
                    value="annually"
                    id="annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="annually"
                    className="flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold text-muted-foreground peer-data-[state=checked]:text-primary"
                  >
                    Yearly
                  </Label>
                </div>
              </RadioGroup>
            </div> */}
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan, index) => {
              const isFreePlan =
                plan.monthlyPrice === "$0" || plan.name === "Free";
              const isDisabled = !isFreePlan;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={cn(
                    "flex w-full flex-col rounded-lg border-0 dark:border-0 p-4 sm:p-6 text-left relative shadow-[0_10px_40px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.04)] dark:shadow-[0_10px_40px_rgb(255,255,255,0.08),0_4px_12px_rgb(255,255,255,0.04),inset_0_1px_0_rgb(255,255,255,0.1)]",
                    plan.isPopular ? "bg-muted" : "",
                    isDisabled &&
                      "blur-sm pointer-events-none opacity-60 hidden md:flex"
                  )}
                >
                  <Badge className="mb-8 block w-fit uppercase">
                    {plan.badge}
                  </Badge>
                  <span className="text-4xl font-medium">
                    {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <p
                    className={`text-muted-foreground ${
                      plan.monthlyPrice === "$0" ? "invisible" : ""
                    }`}
                  >
                    {isAnnually ? "Per year" : "Per month"}
                  </p>
                  <Separator className="my-6" />
                  <div className="flex h-full flex-col justify-between gap-8 sm:gap-12 md:gap-20">
                    <ul className="space-y-4 text-muted-foreground">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="size-4" color="green" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.buttonText === "Start Free Preview" ? (
                      <Button className="w-full" asChild>
                        <Link href="https://chessvine-web-881017844394.asia-south1.run.app/">
                          {plan.buttonText}
                        </Link>
                      </Button>
                    ) : (
                      <Button className="w-full" disabled={isDisabled}>
                        {plan.buttonText}
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing4 };
