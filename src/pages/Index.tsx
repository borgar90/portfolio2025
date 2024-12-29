import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Timeline } from "@/components/Timeline";
import { motion, useAnimation } from "framer-motion";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="min-h-screen"
    >
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Index;