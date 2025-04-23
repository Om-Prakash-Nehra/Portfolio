"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaTools } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="relative text-white p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto mt-16 overflow-hidden border border-white/10 bg-gradient-to-br from-[#1e1e2f] to-[#151522]">
      <div className="relative z-10 backdrop-blur-sm">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center text-blue-400"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg leading-relaxed text-slate-300 text-center max-w-3xl mx-auto"
        >
          Hi! I’m <span className="text-blue-400 font-semibold">Om Prakash Nehra</span> — a passionate
          <span className="text-yellow-300 font-medium"> Full Stack Web Developer</span> currently pursuing
          <span className="text-pink-400 font-medium"> B.Tech in CSE</span> at LPU. I enjoy creating impactful digital experiences using
          <span className="text-green-300 font-medium"> React, Node.js, PHP</span>, and more.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md"
          >
            <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer</h3>
            <p className="text-slate-400 text-sm">
              Crafting full-stack applications with clean, efficient, and scalable code.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md"
          >
            <FaUsers className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Player</h3>
            <p className="text-slate-400 text-sm">
              Collaborates effectively in diverse teams and open-source communities.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center text-center bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md"
          >
            <FaTools className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
            <p className="text-slate-400 text-sm">
              Approaches challenges with creativity and critical thinking to build impactful solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
