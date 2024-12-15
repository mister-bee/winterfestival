"use client";

import { useState } from "react";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import { Balsamiq_Sans } from "next/font/google";

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

function Decorations() {
  return (
    <>
      <motion.img
        src="/placeholder.svg"
        alt="Snowman"
        className="absolute top-1/4 left-10 w-24 h-24"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Christmas Tree"
        className="absolute bottom-1/4 right-10 w-32 h-32"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Gift"
        className="absolute top-3/4 left-1/4 w-16 h-16"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Candy Cane"
        className="absolute top-1/3 right-1/4 w-20 h-20"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
    </>
  );
}

export default function WinterFestival() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <div className="min-h-screen bg-black p-8 relative">
      <Snowfall snowflakeCount={200} />

      {/* Main content */}
      <div className="relative z-10">
        <h1 className={`text-6xl mb-8 ${balsamiq.className}`}>
          {content[lang].title.split("").map((letter, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "text-green-500" : "text-red-500"}
            >
              {letter}
            </span>
          ))}
        </h1>

        <div className={`text-white text-2xl mb-8 ${balsamiq.className}`}>
          <p>{content[lang].date}</p>
          <p>{content[lang].time}</p>
        </div>

        <div className={`space-y-2 ${balsamiq.className}`}>
          {content[lang].features.map((item, index) => (
            <div key={index} className="text-green-500 text-2xl">
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className={`mt-8 px-4 py-1 ${balsamiq.className} ${
            lang === "en" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {content[lang].toggleLang}
        </button>
      </div>

      <Decorations />
    </div>
  );
}
