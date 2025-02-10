"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/doctorh.jpg",
  "/sssante.jpg",
  "/ssante.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-gray-100 overflow-hidden">
      {/* Image en arrière-plan en mode mobile */}
      <div className="absolute inset-0 md:hidden">
        <AnimatePresence mode="wait">
          <Image
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Illustration santé"
            fill
            className="object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </div>

      {/* Conteneur principal */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contenu textuel */}
        <div className="w-full md:w-1/2 text-center md:text-left p-10">
          <motion.h1
            className="text-6xl font-extrabold text-gray-900 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MEDEX INNOV
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-800 text-justify text-lg leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre société est spécialisée dans le domaine de la santé &apos; faciliter l&apos;accès...
          </motion.p>

          {/* Bouton centré en dessous */}
          <motion.a
            href="#activities"
            className="mt-8 inline-block px-10 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#B89E2E] hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Découvrir nos services
          </motion.a>
        </div>

        {/* Image à droite en mode desktop */}
        <div className="w-full md:w-1/2 h-[450px] relative hidden md:block overflow-hidden">
          <AnimatePresence mode="wait">
            <Image
              key={images[currentImage]}
              src={images[currentImage]}
              alt="Illustration santé"
              fill
              className="object-cover"
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}