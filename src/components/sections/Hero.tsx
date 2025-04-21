"use client";

import { HeroParallax } from "../ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Reminders and Alerts",
    link: "https://www.memotag.io/mindmap",
    description:
      "Keep track of daily tasks with customizable vocalized reminders for medications, appointments, and more.",
  },
  {
    title: "3-Axis Fall Detection",
    link: "https://www.memotag.io/mindmap",
    description:
      "Real-time monitoring to identify falls, monitor jerks, and analyze sleep patterns to ensure patient safety.",
  },
  {
    title: "GPS and GeoFencing",
    link: "https://www.memotag.io/mindmap",
    description:
      "Tracking with active heatmaps and geofencing alerts ensures safety for aggressive dementia patients.",
  },

  {
    title: `MiniCog Activated
Activities & Exercises`,
    link: "https://www.memotag.io/mindmap",
    description:
      `MiniCog Activated
Activities & Exercises
Cognitive-level-based vocal and app-driven exercises to enhance neurological health and engagement.`,
  },
  {
    title: "Individual-Cognitive Stimulation Therapy",
    link: "https://www.memotag.io/mindmap",
    description:
      "Our proprietary AI analyzes speech patterns to provide cognitive stimulation and progress tracking.",
  },
  {
    title: "Caregiver Support & Advanced Tools",
    link: "https://www.memotag.io/mindmap",
    description:
      "Comprehensive support with summarized reports, cognitive analysis, and training resources to empower caregivers.",
  },
];
