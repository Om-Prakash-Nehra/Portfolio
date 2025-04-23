import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title?: string;
  description?: string;
  techStack?: string[];
  features?: string[];
  outcome?: string;
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project and its purpose.",
  techStack = ["React", "Node.js", "MongoDB"],
  features = ["Feature 1", "Feature 2", "Feature 3"],
  outcome = "The outcome and impact of this project.",
  githubLink = "#",
  demoLink = "#",
  imageUrl, 
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-background"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-sm mb-4">
            {description}
          </CardDescription>

          <div className="space-y-2">
            <div>
              <h4 className="text-sm font-semibold">Key Features:</h4>
              <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold">Outcome:</h4>
              <p className="text-xs text-muted-foreground mt-1">{outcome}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 border-t">
          <Button variant="outline" size="sm" asChild>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          </Button>

          
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
