"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaClock, FaCommentDots, FaUser } from "react-icons/fa"; // Retirer Link si inutilisé
import { useForm } from "react-hook-form";
import { useState } from "react";

// Définir un type pour le formulaire
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<FormData>(); // Utiliser le type FormData
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ 
    success: boolean; 
    message: string 
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Échec de l\'envoi');
      
      reset();
      setSubmitStatus({ 
        success: true, 
        message: 'Message envoyé avec succès ! Nous vous répondrons dans les 24h.' 
      });
    } catch {
      setSubmitStatus({ 
        success: false, 
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

 

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 pt-36 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#D4AF37]">Contact</span> Medex Innov
          </h1>
          <p className="text-gray-600 text-xl">
            Une question ? Un projet ? Notre équipe vous répond sous 24h
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12">
            {/* Colonne de gauche - Informations */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nos Coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#D4AF37]/10 rounded-xl">
                      <FaPhoneAlt className="text-2xl text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Téléphone</h3>
                      <p className="text-gray-600">+212 663 216 393</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#D4AF37]/10 rounded-xl">
                      <FaEnvelope className="text-2xl text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:youssefxp07@gmail.com" 
                        className="text-[#D4AF37] hover:underline"
                      >
                        youssefxp07@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-[#D4AF37]/10 rounded-xl">
                      <FaClock className="text-2xl text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Horaires</h3>
                      <p className="text-gray-600">Lun-Ven : 8h-19h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t pt-8 border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pourquoi nous choisir ?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    Expertise sectorielle certifiée
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    Réponse garantie sous 24h
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    Solutions sur mesure
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Colonne de droite - Formulaire */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-[#D4AF37]" />
                    Nom complet *
                  </label>
                  <input
                    {...register("name", { required: "Ce champ est requis" })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.name.message?.toString()}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaEnvelope className="inline mr-2 text-[#D4AF37]" />
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email.message?.toString()}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCommentDots className="inline mr-2 text-[#D4AF37]" />
                    Message *
                  </label>
                  <textarea
                    {...register("message", { 
                      required: "Message requis",
                      minLength: {
                        value: 20,
                        message: "Minimum 20 caractères"
                      }
                    })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.message.message?.toString()}
                    </span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all
                    ${isSubmitting 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-[#D4AF37] hover:bg-[#B89E2E] text-white shadow-md hover:shadow-lg'}
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </motion.button>

                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm ${
                      submitStatus.success 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Section de confiance */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          
        </motion.div>
      </div>
      {/* Bouton WhatsApp mobile */}
<div className="fixed bottom-6 right-6 z-50 md:hidden">
  <a
    href={`https://wa.me/212600789012?text=${encodeURIComponent("Bonjour MEDEX Innov, je souhaite obtenir plus d'informations sur vos services.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#128C7E] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-8 text-white"
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  </a>
</div>
    </section>
  );
}



