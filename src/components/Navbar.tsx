"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Medex Innov"
              width={160}
              height={40}
              className="w-40 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          {["Accueil", "Nos Services", "À Propos", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={
                  item === "Accueil" ? "/" :
                  item === "Nos Services" ? "/services" :
                  item === "Contact" ? "/contact" :
                  `/${item.toLowerCase().replace(/\s/g, "")}`
                }
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu burger pour mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none text-2xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          >
            <motion.ul
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white w-4/5 max-w-md rounded-lg shadow-lg py-6 flex flex-col items-center space-y-6 text-lg"
            >
              {["Accueil", "Nos Services", "À Propos", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Accueil" ? "/" :
                      item === "Nos Services" ? "/services" :
                      `/${item.toLowerCase().replace(/\s/g, "")}`
                    }
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {/* Bouton de fermeture */}
              <button
                className="text-gray-600 hover:text-red-500 mt-4 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                ✕ Fermer
              </button>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}