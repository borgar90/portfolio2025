import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Achievement {
  year: number;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  { year: 2004, title: "Started Web Development", description: "First steps into web development" },
  { year: 2008, title: "First Professional Project", description: "Launched first commercial website" },
  { year: 2012, title: "Mobile Development", description: "Expanded into mobile app development" },
  { year: 2016, title: "Team Leadership", description: "Led development team of 5 members" },
  { year: 2020, title: "Cloud Architecture", description: "Mastered cloud-native development" },
  { year: 2025, title: "Future Goals", description: "Continuing to innovate and lead" },
];

const TimelineItem = ({ achievement }: { achievement: Achievement }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="mb-8 flex w-full items-center justify-between"
    >
      <div className="flex w-full max-w-3xl items-center">
        <div className="flex-shrink-0 w-24 text-right pr-6">
          <span className="font-bold text-accent">{achievement.year}</span>
        </div>
        <div className="w-3 h-3 bg-accent rounded-full"></div>
        <div className="flex-grow pl-6">
          <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Journey Through Time</h2>
      <div className="relative container mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        <div className="space-y-8">
          {achievements.map((achievement) => (
            <TimelineItem key={achievement.year} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};