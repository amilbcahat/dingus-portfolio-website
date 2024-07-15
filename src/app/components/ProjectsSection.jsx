"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description:
      "A porfolio website made with Next.js and TailwindCSS , showcasing my skills :)",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amilbcahat/dingus-portfolio-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Acadhut",
    description:
      "An education oriented social media made with MERN stack , along with Aws s3 and ec2",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "http://acadhut.in",
  },
  {
    id: 3,
    title: "MessageMate",
    description:
      "Realtime Chat project made with MERN , Redux Toolkit and Socket.io",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amilbcahat/WappCl",
    previewUrl: "",
  },
  {
    id: 4,
    title: "NetworkNest",
    description:
      "A social network website made with MERN , Redux and using Cloudinary Cloud services to store images and files",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amilbcahat/FacebookCl",
    previewUrl: "https://dingus-message-mate-project.onrender.com/",
  },
  {
    id: 5,
    title: "Natours Project",
    description:
      "A tours booking website , with the implementation of Authentication , CRUD operations , PUG templates and Stripe Payment Gateway made by Node.js and Express.js",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amilbcahat/Natours",
    previewUrl: "https://dingus-natours-project.onrender.com/",
  },
  {
    id: 6,
    title: "Food Ordering Website",
    description:
      "Used for ordering food , made with Django and MVT architecture",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amilbcahat/django-food-app",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
