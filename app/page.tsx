// app/page.tsx

"use client";

import { useState } from "react";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";

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
        className="absolute bottom-0 left-0 w-16 h-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Christmas Tree"
        className="absolute bottom-0 left-20 w-16 h-16"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Gift"
        className="absolute bottom-0 left-40 w-16 h-16"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />
      <motion.img
        src="/placeholder.svg"
        alt="Candy Cane"
        className="absolute bottom-0 left-60 w-16 h-16"
        animate={{ rotateY: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
    </>
  );
}

export default function WinterFestival() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      <Snowfall snowflakeCount={200} />

      <div className="flex flex-col items-center justify-center pt-8 relative z-10">
        <h1 className="text-center text-[12rem] leading-[1]">
          {content[lang].title.split("").map((letter, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "text-green-500" : "text-red-500"}
            >
              {letter}
            </span>
          ))}
        </h1>

        <div className="text-white text-[3rem] leading-[1.1] text-center mt-8 space-y-4">
          <p>{content[lang].date}</p>
          <p>{content[lang].time}</p>
        </div>

        <div className="mt-8 space-y-4">
          {content[lang].features.map((item, index) => (
            <div
              key={index}
              className="text-green-500 text-[3rem] leading-[1.2] text-center"
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className={`mt-8 text-[2rem] px-6 py-2 font-bold text-white ${
            lang === "en" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {content[lang].toggleLang}
        </button>
      </div>

      <Decorations />
    </main>
  );
}
