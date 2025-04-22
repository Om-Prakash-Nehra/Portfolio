import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Data Structures and Algorithms using C/C++",
    description:
      "Completed a comprehensive DSA course, focusing on time complexity, recursion, sorting, and dynamic programming. Gained strong problem-solving skills through 100+ coding challenges and timed assessments.",
  },
  {
    title: "Building Web Applications in PHP",
    description:
      "Took an in-depth course on Coursera (University of Michigan) covering PHP, MySQL, session management, form handling, and CRUD operations. Built small-scale web apps demonstrating full-stack capabilities.",
  },
  {
    title: "Introduction to Internet of Things",
    description:
      "Studied IoT concepts through NPTEL (IIT Kharagpur), including embedded systems, sensors, actuators, and data communication protocols. Designed mock IoT applications to understand real-world use cases and architecture.",
  },
  {
    title: "Server-Side JavaScript with Node.js",
    description:
      "Learned back-end development using Node.js on Coursera. Built APIs, handled asynchronous logic, and implemented authentication. Emphasis on Express.js, RESTful services, and real-time data handling.",
  },
];

const Certifications = () => {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-3xl mx-auto">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group relative bg-white dark:bg-gray-800 rounded-xl px-5 py-4 shadow-lg overflow-hidden transition-all duration-300"
        >
          <div className="flex items-center gap-2 text-md font-semibold text-gray-900 dark:text-white">
            <BadgeCheck className="w-5 h-5 text-green-500" />
            <span>{cert.title}</span>
          </div>

          {/* Show on hover via group-hover */}
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-0 max-h-0 overflow-hidden group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
            {cert.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
