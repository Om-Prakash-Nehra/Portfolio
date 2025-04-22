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
    <section className="py-16 px-4 md:px-12 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
          🏆 Achievements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 dark:bg-gray-800 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-white flex items-start gap-4"
            >
              <div className="text-3xl text-yellow-400">{item.icon}</div>
              <div className="text-lg font-medium">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
