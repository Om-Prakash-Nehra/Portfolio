import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import SkillsGrid from "./SkillsGrid";
import ProjectCard from "./ProjectCard";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import AboutMe from "../components/AboutMe";
import Certifications from "./Certifications"

import { Download, Github, Linkedin, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const HomePage = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "Intern Connect ",
      description:
        "Internship listings, API-based DB interactions, Android integration. Helped students find internships with a smooth UI and efficient backend.",
      techStack: ["React.js", "PHP", "MySQL", "MIT App Inventor"],
      imageUrl: "https://i.imgur.com/J0o78eQ.png",
      features: [
        "Internship Listings",
        "Database Integration",
        "Android App Companion",
      ],
      outcome:
        "Enabled students to explore internship opportunities with ease and clarity.",
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
    {
      id: 2,
      title: "Fitness Management System",
      description:
        "Calorie tracking, personalized health recommendations. Helped users track daily intake & improve lifestyle habits.",
      techStack: ["Angular", "PHP", "TypeScript", "MySQL"],
      imageUrl: "/fitness_management.png",
      features: [
        "Calorie Calculator",
        "User Profiles",
        "Health Metrics Analysis",
      ],
      outcome:
        "Supported users in making better health choices through personalized tracking.",
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and experience.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/portfolio_website.png",
      features: [
        "Downloadable Resume",
        "Smooth Section Scroll",
        "Animated Project Cards",
      ],
      outcome:
        "Displayed professional journey and projects in an elegant and responsive layout.",
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
  ];
  

  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "Data Structures and Algorithms using C/C++",
      issuer: "E-box",
      icon: "🛡️",
    },
    {
      id: 2,
      title: "Building Web Applications in PHP",
      issuer: "Coursera (University of Michigan)",
      icon: "🌐",
    },
    {
      id: 3,
      title: "Introduction to Internet of Things",
      issuer: "NPTEL, IIT Kharagpur",
      icon: "🔌",
    },
    {
      id: 4,
      title: "Server-Side JavaScript with Node.js",
      issuer: "Coursera",
      icon: "⚙️",
    },
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      title: "Summer Training in Data Structures and Algorithms (DSA)",
      company: "E-box",
      duration: "2 months",
      details: [
        "Learned and implemented core data structures and algorithms using C/C++",
        "Solved 100+ coding problems, improving logic and problem-solving skills",
        "Participated in timed contests and debugging exercises",
        "Gained deep understanding of arrays, trees, sorting, searching, and recursion",
      ],
    },
  ];

  // Hackathons data
  const hackathons = [
    {
      id: 1,
      platform: "LeetCode",
      achievement: "150+ DSA problems",
    },
    {
      id: 2,
      platform: "HackerRank",
      achievement: "Top 10% C++ badge",
    },
    {
      id: 3,
      platform: "Leetcode",
      achievement: "100 Days Badge 2025",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      {/* Navigation */}
      <div className="md:w-[280px] md:fixed md:h-screen z-10">
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-[280px] overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 md:px-12 bg-background">
        <AboutMe />
</section>


        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-12 bg-muted/30">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            </h2>
            <SkillsGrid />
          </motion.div>
        </section>

        {/* Projects Section */}
<section id="projects" className="py-20 px-6 md:px-12 bg-background">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={staggerContainer}
    className="max-w-6xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <ProjectCard
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            features={project.features}
            outcome={project.outcome}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>
{/* Certifications Section */}
<section id="certifications" className="py-20 px-6 md:px-12 bg-background">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
    className="max-w-6xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      Certifications
    </h2>
    <Certifications />
  </motion.div>
</section>
        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 md:px-12 bg-background">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
    className="max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
      Experience
    </h2>

    {experiences.map((exp) => (
      <motion.div
        key={exp.id}
        variants={fadeInUp}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="mb-10"
      >
        <Card className="overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl border border-slate-700 hover:shadow-2xl transition-all duration-300 rounded-xl">
          <CardContent className="p-6 relative">
            {/* Decorative left bar or badge */}
            <div className="absolute top-0 left-0 h-full w-1 bg-blue-500 rounded-tr-md rounded-br-md" />

            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
            <div className="flex items-center text-slate-400 mb-4">
              <span>{exp.company}</span>
              <span className="mx-2">•</span>
              <span>{exp.duration}</span>
            </div>

            <Separator className="my-4 bg-slate-600" />

            <ul className="space-y-3 mt-4 pl-2">
              {exp.details.map((detail, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-slate-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
</section>


        {/* Hackathons Section */}
        <section id="hackathons" className="py-20 px-6 md:px-12 bg-muted/30">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer}
    className="max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
      💻 Competitive Programming
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {hackathons.map((hack) => (
        <motion.div
          key={hack.id}
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl overflow-hidden"
        >
          <Card className="h-full bg-white/10 dark:bg-gray-800 text-white border border-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-bold">{hack.platform}</h3>
              <Badge
                variant="secondary"
                className="px-3 py-1 text-sm bg-blue-600 text-white hover:bg-blue-700"
              >
                {hack.achievement}
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-12 bg-background">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeInUp}
    className="max-w-4xl mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
      📬 Get In Touch
    </h2>

    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/10 shadow-xl"
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-white">
          {/* Email */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="mailto:omprakashnehra078@gmail.com"
            className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors text-center"
          >
            <Mail className="h-6 w-6 mb-2 text-blue-400" />
            <span className="font-medium">Email</span>
            <span className="text-sm opacity-70">
              omprakashnehra078@gmail.com
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://www.linkedin.com/in/om-prakash-nehra-695442252/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors text-center"
          >
            <Linkedin className="h-6 w-6 mb-2 text-blue-500" />
            <span className="font-medium">LinkedIn</span>
            <span className="text-sm opacity-70">/om-prakash-nehra</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            href="https://github.com/Om-Prakash-Nehra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-xl hover:bg-white/10 transition-colors text-center"
          >
            <Github className="h-6 w-6 mb-2 text-gray-300" />
            <span className="font-medium">GitHub</span>
            <span className="text-sm opacity-70">/Om-Prakash-Nehra</span>
          </motion.a>
        </div>

        {/* Resume Download */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="lg"
            className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-purple-600 hover:to-blue-500"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/OmPrakashNehra.pdf";
              link.download = "OmPrakashNehra.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
</section>


        {/* Footer */}
        <footer className="py-8 px-6 md:px-12 bg-muted/50 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Om Prakash Nehra. All rights
            reserved.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
