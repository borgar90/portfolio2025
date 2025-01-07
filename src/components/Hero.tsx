import { motion } from "framer-motion";
import webshop from "../../public/img/hero/webshop-01.jpg";
export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-highlight to-secondary p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h1 className="text-6xl font-bold mb-4">Borgar Flaen Stensrud</h1>
          <h2 className="text-4xl mb-4">18 År Med Digital Kreativitet</h2>
          <p className="text-xl mb-6">Forvandler ider til digitale opplevelser</p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Projects
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-full h-[400px] rounded-2xl bg-white backdrop-blur-sm p-4">
            <img 
              src={webshop}
              alt="AI Generated Portrait" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};