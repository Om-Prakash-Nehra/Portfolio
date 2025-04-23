import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Data Structures and Algorithms using C/C++",
    description:
      "Completed a comprehensive DSA course, focusing on time complexity, recursion, sorting, and dynamic programming. Gained strong problem-solving skills through 100+ coding challenges and timed assessments.",
    imageUrl: "/certificates/dsa-cpp.png",
    verifyUrl: "https://example.com/verify/dsa-cpp",
  },
  {
    title: "Building Web Applications in PHP",
    description:
      "Took an in-depth course on Coursera (University of Michigan) covering PHP, MySQL, session management, form handling, and CRUD operations. Built small-scale web apps demonstrating full-stack capabilities.",
    imageUrl: "/certificates/php-webapp.png",
    verifyUrl: "https://example.com/verify/php",
  },
  {
    title: "Introduction to Internet of Things",
    description:
      "Studied IoT concepts through NPTEL (IIT Kharagpur), including embedded systems, sensors, actuators, and data communication protocols. Designed mock IoT applications to understand real-world use cases and architecture.",
    imageUrl: "/certificates/iot.png",
    verifyUrl: "https://example.com/verify/iot",
  },
  {
    title: "Server-Side JavaScript with Node.js",
    description:
      "Learned back-end development using Node.js on Coursera. Built APIs, handled asynchronous logic, and implemented authentication. Emphasis on Express.js, RESTful services, and real-time data handling.",
    imageUrl: "/certificates/nodejs-server.png",
    verifyUrl: "https://example.com/verify/nodejs",
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
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-md font-semibold text-gray-900 dark:text-white hover:underline"
          >
            <BadgeCheck className="w-5 h-5 text-green-500" />
            <span>{cert.title}</span>
          </a>

          <p className="text-sm text-gray-700 dark:text-gray-200 mt-0 max-h-0 overflow-hidden group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out">
            {cert.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3 hidden group-hover:flex justify-center"
          >
            <img
              src={cert.imageUrl}
              alt={`${cert.title} Certificate`}
              className="w-full max-w-md rounded-md border border-gray-300 shadow-md"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Certifications;
