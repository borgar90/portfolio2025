import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import grandmasterssmith from "../../public/img/projects/grandmasterssmith.png";
import johansenmultiservice from "../../public/img/projects/johansenmultiservice.png";
import mrfixthumb from "../../public/img/projects/mrfixthumb.png";
import musicforside from "../../public/img/projects/musicforside.png";
import choco from "../../public/img/projects/choco.png";
import tegneprogram from "../../public/img/projects/tegneprogram.png";
import pacman from "../../public/img/projects/pacman.png";
import webshop_tutorial from "../../public/img/projects/webshop_tutorial.png";
import pengekassen from "../../public/img/projects/pengekasse.png";
const projects = [
  {
    title: "MrFix",
    description: "Webshop for MrFix, driftet og laget webshop.",
    image: mrfixthumb,
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    title: "Grandmasters Smith",
    description: "Prosjekt fra gruppearbeid i apputvikling på USN. Sosialt netverk for Sjakkspillere, bygget med Next.js. (gameplay mot ai og socket multiplayer)",
    image: grandmasterssmith,
    tags: ["Next.js", "TailwindCSS", "MongoDB", "Socket.io", "AI"],
  },
  {
    title: "Johansen multiservice",
    description: "Design av tskjorte trykk for Johansen multiservice.",
    image: johansenmultiservice,
    tags: ["Adobe Illustrator"],
  },
  {
    title: "Musikk app",
    description: "En app for opplasting og avspilling av musikkfiler.",
    image: musicforside,
    tags: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    title: "Choco Critique",
    description: "Utvikling av sjokolade app for å vurdere sjokolade.",
    image: choco,
    tags: ["React native", "Node.js", "MongoDB", "Expo"],
  },
  {
    title: "Tegneprogram",
    description: "Oppgave i java ved USN.",
    image: tegneprogram,
    tags: ["Java", "JavaFX"],
  },
  {
    title: "Pacman",
    description: "Eksamen i java ved USN.",
    image: pacman,
    tags: ["Java", "JavaFX"],
  },
  {
    title: "Webshop tutorial",
    description: "Øvelse på webshopper.",
    image: webshop_tutorial,
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
  },
  {
    title: "Pengeinsamling-side",
    description: "Øvelse på webutvikling.",
    image: pengekassen,
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
  },
  
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-5xl font-bold mb-16 ">Fremhevede prosjekt</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48  object-cover object-top overflow-hidden"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};