"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2D3748] via-[#4A5568] to-[#D4AF37] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo et description */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={128}
              height={40}
              className="w-32 mx-auto md:mx-0"
            />
            <p className="mt-4 text-gray-400">
              &quot;Nous innovons pour une meilleure santé numérique.&quot;
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D4AF37]">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "Nos Services", path: "/services" },
                { label: "À Propos", path: "/about" },
                { label: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`${process.env.NODE_ENV === 'production' ? '/medxinnov' : ''}${link.path}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D4AF37]">
              Connectez-vous
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: <FaFacebookF />, color: "#3b5998" },
                { icon: <FaTwitter />, color: "#1DA1F2" },
                { icon: <FaLinkedinIn />, color: "#0077B5" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ color: social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Medex Innov. Tous droits réservés.<br />
          <span className="text-xs">Design by Elwardi Youssef</span>
        </motion.div>
      </div>
    </footer>
  );
}