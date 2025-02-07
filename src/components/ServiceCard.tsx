"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaMicroscope, FaGlobe, FaChartLine, FaCalendarAlt, FaBrain, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: <FaHandshake className="text-4xl text-[#D4AF37]" />,
      title: "Accès aux Technologies Médicales",
      description: "Distribution de solutions innovantes certifiées",
      image: "/medical-tech.jpg",
      features: [
        "Dispositifs médicaux de pointe",
        "Équipements diagnostiques",
        "Solutions e-santé intégrées",
        "Conformité réglementaire internationale"
      ]
    },
    {
      icon: <FaMicroscope className="text-4xl text-[#D4AF37]" />,
      title: "Recherche & Innovation",
      description: "Développement de technologies médicales avant-gardistes",
      image: "/research-lab.jpg",
      features: [
        "Essais cliniques multicentriques",
        "Développement IA médicale",
        "Recherche translationnelle",
        "Protocoles expérimentaux"
      ]
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#D4AF37]" />,
      title: "Sécurité Médicale",
      description: "Protection des données et intégrité des pratiques",
      image: "/medical-security.jpg",
      features: [
        "Certifications RGPD santé",
        "Audits de sécurité",
        "Formations HDS",
        "Systèmes de cryptage avancés"
      ]
    }
  ];

  const stats = [
    { value: "200+", label: "Professionnels formés" },
    { value: "98%", label: "Satisfaction clients" },
    { value: "40+", label: "Pays couverts" },
    { value: "ISO", label: "Certifications obtenues" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="text-[#D4AF37]">L'Excellence</span> en Santé
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Des solutions médicales innovantes pour une santé transformée
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#D4AF37]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Main Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto space-y-28">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>

              <div className={`order-${index % 2 === 0 ? '2' : '1'}`}>
                <div className="max-w-xl mx-auto">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl hover:bg-white transition-colors"
                        whileHover={{ x: 10 }}
                      >
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#D4AF37]/5">
        <div className="container mx-auto text-center max-w-4xl px-6">
          <motion.div
            className="bg-white rounded-2xl p-12 shadow-2xl"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Prêt à révolutionner votre pratique ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nos experts vous accompagnent dans votre transformation digitale
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#D4AF37] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#B89E2E] transition-colors"
            >
              Planifier une consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}