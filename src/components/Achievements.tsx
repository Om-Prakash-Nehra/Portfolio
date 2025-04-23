import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaFire } from "react-icons/fa";

const achievements = [
  { icon: <FaTrophy />, title: "Solved 150+ DSA problems" },
  { icon: <FaMedal />, title: "Top 10% C++ badge on LeetCode" },
  { icon: <FaFire />, title: "100 Days Badge (2025) for consistent coding" },
];

const Achievements = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#1e1e2f] to-[#151522]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-white drop-shadow-lg">
          🏆 My Achievements
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 hover:border-white/20 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-white backdrop-blur-md flex flex-col items-center gap-4 text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300 text-2xl shadow-inner ring-2 ring-yellow-300/30">
                {item.icon}
              </div>
              <div className="text-lg font-semibold">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
