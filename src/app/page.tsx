"use client";

/**
 * Shelby Network Ecosystem Landing Page
 * This file replaces the default Next.js page content.
 */

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EcosystemGrid from "@/components/EcosystemGrid";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize scroll reveal animations
  useScrollReveal(mounted);

  // Prevent hydration mismatch by only rendering once mounted
  if (!mounted) return null;

  return (
    <main>
      <Navbar />
      <Hero />
      <EcosystemGrid />
      <Stats />
      <Footer />
    </main>
  );
}
