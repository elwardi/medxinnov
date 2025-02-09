"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";


const activities = [
  { title: "Faciliter l’accès aux produits et services de santé", image: "/telemedecine.jpg" },
  { title: "Offrir des services de consultation et formation", image: "/pharmacie.jpg" },
  { title: "Développer la recherche et l’innovation", image: "/suivi.jpg" },
  { title: "Promouvoir l’évaluation des technologies de santé", image: "/digital.jpg" },
  { title: "Organisation de séminaires, congrès scientifiques", image: "/network.jpg" },
  { title: "Offrir des services de conseil et d’accompagnement évènementiel", image: "/doctor.jpg" },
  { title: "Offrir des services de conseil stratégique", image: "/global.jpg" },
];

export default function Activities() {
  return (
    <section id="activities" className="relative py-16 bg-gradient-to-b from-gray-50 to-gray-200 px-6 mt-0 pt-36 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        {/* Titre de la section */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Activités
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-4 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Découvrez nos principales activités et services innovants
        </motion.p>

        {/* Slider des activités (section conservée) */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          className="pb-10"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full w-[90%] mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image avec effet */}
                <div className="relative w-full h-48 overflow-hidden">
  <Image
    src={activity.image}
    alt={activity.title}
    fill
    className="object-cover transition duration-500 hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-500"></div>
</div>

                {/* Texte de l’activité */}
                <div className="p-4 text-center flex-grow flex items-center justify-center bg-white rounded-b-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 drop-shadow-sm">
                    {activity.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NOUVELLE SECTION CTA (ajoutée APRÈS le Swiper) */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Bouton Services */}
          <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative group"
>
  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B89E2E] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
  <Link
    href="/services" // Lien direct vers la page services
    className="relative px-12 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
  >
    <span className="text-xl">🔍</span>
    Voir tous nos services
  </Link>
</motion.div>

          {/* Bouton Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Link
              href="/contact"
              className="relative px-12 py-4 bg-gray-800 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-xl">📧</span>
              Contactez notre équipe
            </Link>
          </motion.div>
        </motion.div>

        {/* Style personnalisé */}
        <style jsx>{`
          .swiper-pagination-bullet {
            display: none !important;
          }
          .swiper-button-next, .swiper-button-prev {
            color: rgba(128, 128, 128, 0.7) !important;
          }
          .group:hover .blur {
            animation: gradient-pulse 2s infinite;
          }
          @keyframes gradient-pulse {
            0% { opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { opacity: 0.3; }
          }
        `}</style>
      </div>
    </section>
  );
}