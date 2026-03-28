"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  Sparkles,
  DollarSign,
  HelpCircle,
  Info,
  Mail,
  Shield,
  FileText,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

function ListItem({
  title,
  href,
  children,
  icon: Icon,
  onSmoothScroll,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  title: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  onSmoothScroll?: (href: string) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if ((href.startsWith("#") || href.startsWith("/#")) && onSmoothScroll) {
      e.preventDefault();
      onSmoothScroll(href);
    }
  };

  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          onClick={handleClick}
          className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            <div className="text-sm leading-none font-medium">{title}</div>
          </div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && pathname === "/") {
      const targetId = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const hash = href.replace("/", "");
      const targetId = hash.substring(1);

      // If we're on a different page, navigate first then scroll
      if (pathname !== "/") {
        router.push(`/${hash}`);
        return;
      }

      // If we're already on the home page, scroll directly
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 64; // h-16 = 64px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Element not found yet, try after a short delay
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 64;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    }
  };

  const navGroups = [
    {
      name: "Product",
      items: [
        {
          name: "Features",
          href: "/#features",
          description:
            "Discover powerful AI-powered chess analysis tools and insights.",
          icon: Sparkles,
        },
        {
          name: "Pricing",
          href: "/#pricing",
          description:
            "Choose the perfect plan for your chess improvement journey.",
          icon: DollarSign,
        },
        {
          name: "FAQ",
          href: "/#faq",
          description: "Find answers to common questions about Chessvine.",
          icon: HelpCircle,
        },
      ],
    },
    {
      name: "Company",
      items: [
        {
          name: "About",
          href: "/about",
          description:
            "Learn about our mission, values, and the team behind Chessvine.",
          icon: Info,
        },
        {
          name: "Contact",
          href: "/#contact",
          description: "Get in touch with our team for support or inquiries.",
          icon: Mail,
        },
      ],
    },
    {
      name: "Legal",
      items: [
        {
          name: "Privacy Policy",
          href: "/privacy",
          description: "Understand how we collect, use, and protect your data.",
          icon: Shield,
        },
        {
          name: "Terms of Service",
          href: "/terms",
          description: "Review the terms and conditions for using Chessvine.",
          icon: FileText,
        },
      ],
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 container mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/app-logo.png"
              alt="Chessvine"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-thin text-xl">Chessvine</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex" viewport={isMobile}>
          <NavigationMenuList className="flex-wrap gap-1">
            {navGroups.map((group, groupIndex) => (
              <NavigationMenuItem key={group.name}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + groupIndex * 0.05,
                  }}
                >
                  <NavigationMenuTrigger className="h-auto bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent focus:text-primary">
                    {group.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cn(
                        "grid gap-2 p-2",
                        group.name === "Product"
                          ? "sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                          : "w-[350px]"
                      )}
                    >
                      {group.items.map((item) => (
                        <ListItem
                          key={item.name}
                          title={item.name}
                          href={item.href}
                          icon={item.icon}
                          onSmoothScroll={handleSmoothScroll}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-4"
        >
          <ModeToggle />
          <Button size="sm" asChild>
            <Link href="https://chessvine-web-881017844394.asia-south1.run.app/">
              Start Free Preview
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Drawer
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
            direction="bottom"
          >
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="px-4 sm:px-6">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
              </DrawerHeader>
              <nav className="flex flex-col gap-4 px-4 sm:px-6 pb-6">
                {navGroups.map((group) => (
                  <div key={group.name} className="space-y-2">
                    <div className="text-xs font-semibold uppercase text-muted-foreground/70 px-2">
                      {group.name}
                    </div>
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary px-2"
                          onClick={(e) => {
                            setIsMobileMenuOpen(false);
                            if (
                              item.href.startsWith("#") ||
                              item.href.startsWith("/#")
                            ) {
                              e.preventDefault();
                              handleSmoothScroll(item.href);
                            }
                          }}
                        >
                          {Icon && <Icon className="h-4 w-4" />}
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t">
                  <Button size="sm" asChild className="w-full">
                    <Link
                      href="https://chessvine-web-881017844394.asia-south1.run.app/"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Start Free Preview
                    </Link>
                  </Button>
                </div>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </motion.header>
  );
}
