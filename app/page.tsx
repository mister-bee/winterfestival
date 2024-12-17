// app/page.tsx

"use client";

import { useState, useEffect, useRef } from "react";
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

// Function to get a random winter graphic
const getRandomWinterGraphics = (count: number) => {
  const winterGraphics = [
    "003-cookie.svg",
    "005-lights.svg",
    "006-snow-globe.svg",
    "007-christmas-card.svg",
    "008-candle.svg",
    "009-santa-claus.svg",
    "011-sweater.svg",
    "012-bells.svg",
    "013-christmas-wreath.svg",
    "014-cabin.svg",
    "015-present.svg",
    "017-coffee-cup.svg",
    "018-matches.svg",
    "019-snowflake.svg",
    "020-candy.svg",
    "021-bauble.svg",
    "023-gingerbread-man.svg",
    "024-mistletoe.svg",
    "025-candy-cane.svg",
    "026-bonfire.svg",
  ];

  const selectedGraphics = new Set<string>();
  while (selectedGraphics.size < count) {
    const randomIndex = Math.floor(Math.random() * winterGraphics.length);
    selectedGraphics.add(`/winter/${winterGraphics[randomIndex]}`);
  }
  return Array.from(selectedGraphics);
};

export default function WinterFestival() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [graphics, setGraphics] = useState<string[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const newGraphics = getRandomWinterGraphics(4);
    setGraphics(newGraphics);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start relative">
      <Snowfall snowflakeCount={200} />

      <div className="flex flex-col items-center justify-center pt-8 relative z-10">
        <h1 className="text-center text-[4.5rem] md:text-[6rem] leading-[1]">
          {content[lang].title.split("").map((letter, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "text-green-500" : "text-red-500"}
            >
              {letter}
            </span>
          ))}
        </h1>

        <div className="text-white text-[1.5rem] leading-[1.1] text-center mt-8 space-y-2">
          <p>{content[lang].date}</p>
          <p>{content[lang].time}</p>
        </div>

        <div className="mt-8 space-y-2">
          {content[lang].features.map((item, index) => (
            <div
              key={index}
              className="text-green-500 text-[1.5rem] leading-[1.2] text-center"
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className={`mt-8 text-[1rem] px-6 py-2 font-bold text-white ${
            lang === "en" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {content[lang].toggleLang}
        </button>

        <div className="flex justify-center mt-8 space-x-4">
          {graphics.map((graphic, index) => (
            <motion.img
              key={index}
              src={graphic}
              alt="Winter Graphic"
              className="w-16 h-16"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
              ref={(el) => {
                imgRefs.current[index] = el;
              }}
              onClick={() => {
                const imgElement = imgRefs.current[index];
                if (imgElement) {
                  imgElement.style.pointerEvents = "none";
                  imgElement.animate(
                    [
                      { transform: "scale(1) rotate(0deg)" },
                      { transform: "scale(3.5) rotate(360deg)" },
                      { transform: "scale(1) rotate(0deg)" },
                    ],
                    {
                      duration: 2000,
                      easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
                      fill: "forwards",
                    }
                  ).onfinish = () => {
                    imgElement.style.pointerEvents = "auto";
                  };
                }
              }}
            />
          ))}
        </div>

        {/* Menu button with scroll functionality */}
        <button
          onClick={() => {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="mt-8 mb-16 text-[1.5rem] text-white hover:text-green-500 transition-colors duration-300"
        >
          Menu ↓
        </button>
      </div>

      {/* Full-screen flyer below all content */}
      <div className="w-full mt-24">
        <img
          src={lang === "en" ? "/flier_en.png" : "/flier_es.png"}
          alt="Festival Flyer"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
}
