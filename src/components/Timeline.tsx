import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import hourglass from "../../public/img/timeline/hourglass.png";
interface Achievement {
  year: number;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  { year: 2006, title: "Hjalmar Johansen VGS", description: "Blev introdusert for programmering i AS3 (Flash)" },
  { year: 2008, title: "Borgarting Media", description: "Jobbet som freelancer innen grafisk design og web" },
  { year: 2012, title: "HiBu - Bachelor i Dynamisk Webdesign", description: "Studerte Dynamisk Webdesign i Hønefoss. Uteksaminert med A-karakter på bachelor oppgaven." },
  { year: 2014, title: "Under Construction Web", description: "Jobbet som freelancer innen web dev/design" },
  { year: 2016, title: "Telesalg AS", description: "Jobbet som inhouse utvikler for Telesalg AS, og jobbet med logo-design og utvikling av grafiske profiler eksternt." },
  { year: 2018, title: "Future Tech", description: "Jobbet freelance med webutvikling. Jobbet mye med utprøvning/læring innen digital tidsregning i java/python og fordypet meg i kvante-teori." },
  { year: 2022, title: "USN - Bachelor i informatikk", description: "Tok enda en Bachelor i informatikk. A i flere utviklings-prosjekt emner" },
  { year: 2024, title: "Intern Rubynor / Kaukus", description: "Ruby on rails intern. Jobbet på Kaukus sin totalløsning for møteorganisering for lokaldemokrati." },
  { year: 2025, title: "Fremtidige mål", description: "Jobbe som utvikler og fortsette min fordypning innen KI" },
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
    <section className="py-16 px-4 relative mt-5">
      <div className="container">
      <h2 className="text-5xl font-bold mb-16">En tidsreise i min kariere</h2>
      <div className="relative container mx-auto">
        <div className="absolute left-2/3 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        <div className="space-y-8">
          {achievements.map((achievement) => (
            <TimelineItem key={achievement.year} achievement={achievement} />
          ))}
        </div>
        <img
          width={200}
          height={400}
          src={hourglass}
          alt="Hourglass"
          className="absolute right-10 top-1/4 hidden 2xl:block"
        />
      </div>
      </div>
    </section>
  );
};