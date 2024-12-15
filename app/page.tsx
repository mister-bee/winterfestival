"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import { Balsamiq_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";

const balsamiq = Balsamiq_Sans({ weight: "400", subsets: ["latin"] });

const content = {
  en: {
    title: "Tyrrell Winter Festival!",
    date: "Wednesday, Dec 18th",
    time: "4 to 6 pm",
    features: ["Music!", "Food!", "Arts and crafts", "Maybe even Santa"],
    toggleLang: "Español",
  },
  es: {
    title: "¡Festival de Invierno Tyrrell!",
    date: "Miércoles, 18 de Diciembre",
    time: "4 a 6 pm",
    features: [
      "¡Música!",
      "¡Comida!",
      "Artes y manualidades",
      "Tal vez hasta Santa",
    ],
    toggleLang: "English",
  },
};

export default function WinterFestival() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const toggleLanguage = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Snowfall snowflakeCount={200} />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          className={`text-8xl md:text-9xl font-extrabold text-center mb-12 ${balsamiq.className}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {content[lang].title.split("").map((letter, index) => (
            <span
              key={index}
              className={`inline-block ${
                index % 2 === 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {letter}
            </span>
          ))}
        </motion.h1>
        <motion.div
          className="text-4xl md:text-5xl text-center text-white mb-16 font-bold"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="mb-6">{content[lang].date}</p>
          <p>{content[lang].time}</p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {content[lang].features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-full px-8 py-4 text-3xl font-bold text-green-600 shadow-lg transform hover:scale-110 transition-transform duration-200"
            >
              {item}
            </div>
          ))}
        </motion.div>
        <Decorations />
        <div className="text-center mt-16">
          <button
            onClick={toggleLanguage}
            className="bg-yellow-300 text-green-600 text-2xl px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-200"
          >
            {content[lang].toggleLang}
          </button>
        </div>
      </div>
    </div>
  );
}

function Decorations() {
  return (
    <>
      <motion.img
        src="/placeholder.svg?height=100&width=100"
        alt="Snowman"
        className="absolute top-1/4 left-10 w-24 h-24"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        src="/placeholder.svg?height=100&width=100"
        alt="Christmas Tree"
        className="absolute bottom-1/4 right-10 w-32 h-32"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="/placeholder.svg?height=100&width=100"
        alt="Gift"
        className="absolute top-3/4 left-1/4 w-16 h-16"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <motion.img
        src="/placeholder.svg?height=100&width=100"
        alt="Candy Cane"
        className="absolute top-1/3 right-1/4 w-20 h-20"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
    </>
  );
}
