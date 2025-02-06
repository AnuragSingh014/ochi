"use client";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/decor.png", alt: "Decor" },
  { src: "/logos/kotak.png", alt: "Kotak Mahindra Bank" },
  { src: "/logos/mcdonalds.png", alt: "McDonald's" },
  { src: "/logos/amri.png", alt: "AMRI Hospitals" },
  { src: "/logos/tata.png", alt: "Tata" },
  { src: "/logos/nykaa.png", alt: "Nykaa" },
  { src: "/logos/myfair.png", alt: "Mayfair" },
  { src: "/logos/boyanika.jpg", alt: "Boyanika" },
  { src: "/logos/acrerise.png", alt: "Acrerise" },
  { src: "/logos/msme.png", alt: "MSME" },
  { src: "/logos/audi.png", alt: "Audi" },
  { src: "/logos/imfa.jpg", alt: "IMFA" },
  { src: "/logos/vedanta.png", alt: "Vedanta" },
  { src: "/logos/ormas.jpg", alt: "ORMAS" },
  { src: "/logos/dnhomes.png", alt: "DN Homes" },
  { src: "/logos/sai.png", alt: "SAI International" },
  { src: "/logos/ovo.jpg", alt: "OVO Farms" },
  { src: "/logos/pride.png", alt: "Pride World Playway" },
  { src: "/logos/khimji.png", alt: "Khimji" },
  { src: "/logos/cvraman.png", alt: "C.V. Raman University" },
  { src: "/logos/ubeau.png", alt: "Ubeau Aesthetics" },
];

export default function TrustedPartners() {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Trusted Partners</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our clients are making moves. Are you? Don’t get left behind—Join the brands leading the way with us.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 flex justify-center items-center h-24"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logo.src} alt={logo.alt} className="h-16 max-w-full object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
