"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaMicroscope, FaGlobe, FaChartLine, FaCalendarAlt, FaBrain } from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <FaHandshake className="text-4xl text-[#D4AF37]" />,
      title: "Accès aux Produits de Santé",
      description: "Distribution de solutions médicales innovantes",
      details: [
        "Produits pharmaceutiques et dispositifs médicaux",
        "Solutions technologiques certifiées",
        "Conformité réglementaire internationale"
      ]
    },
    {
      icon: <FaMicroscope className="text-4xl text-[#D4AF37]" />,
      title: "Recherche & Innovation",
      description: "Développement de solutions e-santé",
      details: [
        "Études cliniques et précliniques",
        "Développement de logiciels médicaux",
        "Recherche épidémiologique"
      ]
    },
    {
      icon: <FaGlobe className="text-4xl text-[#D4AF37]" />,
      title: "Réseau International",
      description: "Connexion des acteurs de santé mondiaux",
      details: [
        "Organisation de congrès scientifiques",
        "Think tanks stratégiques",
        "Partenariats transnationaux"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#D4AF37]" />,
      title: "Évaluation Technologique",
      description: "Optimisation des innovations santé",
      details: [
        "Analyses pharmaco-économiques",
        "Études d'impact stratégique",
        "Benchmarking international"
      ]
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#D4AF37]" />,
      title: "Management Évènementiel",
      description: "Gestion complète d'évènements médicaux",
      details: [
        "Planification stratégique",
        "Logistique clé en main",
        "Analyse des retombées"
      ]
    },
    {
      icon: <FaBrain className="text-4xl text-[#D4AF37]" />,
      title: "Conseil Stratégique",
      description: "Accompagnement sur mesure",
      details: [
        "Stratégies de financement",
        "Partenariats public-privé",
        "Optimisation R&D"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-24 px-6 pt-40">
      <div className="container mx-auto">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-[#D4AF37]">L&apos;MEDEX</span> Innov Services
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Des solutions intégrées pour transformer l&apos;écosystème de santé
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              className="bg-gradient-to-br from-[#D4AF37] to-[#B89E2E] p-1 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-2xl p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Prêt à transformer votre projet ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Contactez nos experts pour une solution sur mesure
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#D4AF37] text-white rounded-xl font-semibold hover:bg-[#B89E2E] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Planifier une consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}