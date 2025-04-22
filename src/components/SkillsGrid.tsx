import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaTerminal,
  FaTools,
  FaWindows,
  FaCode,
} from "react-icons/fa";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

interface SkillsGridProps {
  categories?: SkillCategory[];
}

const defaultCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <FaCode className="h-5 w-5" />,
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-xl" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400 text-xl" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500 text-xl" /> },
    ],
  },
  {
    name: "Backend",
    icon: <FaTools className="h-5 w-5" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-xl" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-500 text-xl" /> },
      { name: "Laravel", icon: <FaLaravel className="text-red-600 text-xl" /> },
    ],
  },
  {
    name: "Databases",
    icon: <FaDatabase className="h-5 w-5" />,
    skills: [
      { name: "MySQL", icon: <FaDatabase className="text-blue-500 text-xl" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500 text-xl" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-blue-800 text-xl" /> },
    ],
  },
  {
    name: "Dev Tools",
    icon: <FaTools className="h-5 w-5" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-700 text-xl" /> },
      { name: "VS Code", icon: <FaTerminal className="text-blue-500 text-xl" /> },
      { name: "XAMPP", icon: <FaWindows className="text-orange-400 text-xl" /> },
    ],
  },
];

const SkillsGrid: React.FC<SkillsGridProps> = ({
  categories = defaultCategories,
}) => {
  const [activeTab, setActiveTab] = useState(categories[0].name);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="w-full p-6 rounded-lg bg-gradient-to-br from-[#4e5067] to-[#393b4d]">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Skills & Expertise
      </h2>
      <Tabs
        defaultValue={categories[0].name}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className={`flex items-center gap-2 py-3 px-4 transition-all duration-300 rounded-md border border-transparent
                ${activeTab === category.name
                  ? "bg-white/20 text-white font-semibold border-white shadow-inner"
                  : "hover:bg-white/10 text-white"}`}
            >
              {category.icon}
              <span>{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <AnimatePresence mode="wait">
          {categories.map(
            (category) =>
              activeTab === category.name && (
                <TabsContent key={category.name} value={category.name} forceMount>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          className="h-full bg-white/90 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:ring-2 hover:ring-blue-300 transition-all duration-300"
                        >
                          <CardContent className="flex flex-col items-center justify-center p-6 h-full">
                            <div className="text-3xl mb-2">{skill.icon}</div>
                            <h3 className="font-medium text-center text-gray-800">
                              {skill.name}
                            </h3>
                          </CardContent>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              )
          )}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default SkillsGrid;
