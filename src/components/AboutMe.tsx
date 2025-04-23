import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, School, User } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative text-white p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto mt-16 backdrop-blur-lg border border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center text-blue-400"
      >
        About Me
      </motion.h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: <School className="text-yellow-400 w-6 h-6 mb-2" />,
            title: "Matriculation",
            school: "SMP International High School, Hyderabad",
            score: "GPA: 9.2",
            duration: "2016 – 2019",
          },
          {
            icon: <User className="text-pink-400 w-6 h-6 mb-2" />,
            title: "Intermediate",
            school: "Sri Abhida Institute, Hyderabad",
            score: "Percentage: 85.8%",
            duration: "2019 – 2021",
          },
          {
            icon: <GraduationCap className="text-blue-400 w-6 h-6 mb-2" />,
            title: "B.Tech CSE",
            school: "Lovely Professional University, Punjab",
            score: "CGPA: 7.12",
            duration: "2022 – Present",
          },
        ].map((edu, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-slate-800 rounded-xl p-5 shadow-md text-center border border-white/10"
          >
            <div className="flex justify-center">{edu.icon}</div>
            <h3 className="text-xl font-semibold mb-1 text-white">{edu.title}</h3>
            <p className="text-sm text-slate-400">{edu.school}</p>
            <p className="text-sm text-slate-400">{edu.score}</p>
            <p className="text-sm text-slate-400">{edu.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
