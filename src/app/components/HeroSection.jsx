// We here state that this component is client component
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Takes 7 out of 12 grid  */}
        {/* Justify self start to align the item to the start of its inline! */}
        <motion.div
          //motion.component is used to add animations !
          //initial is to add initial state
          initial={{ opacity: 0, scale: 0.5 }}
          //animate is to add the final state
          animate={{ opacity: 1, scale: 1 }}
          //Transition makes it cool
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            {/* We cant color gradient here */}
            {/* Here we first make the text transparent , then cut the text out to show bg , then we implement bg in background ! */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello , I&apos;m {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Amol Verma!",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Pentester",
                1000,
                "CyberSecurity Researcher!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Hello , I am Amol Verma , COO of Acadhut, a passionate coder and
            pentester , I love to build stuff through my skills , and also want
            to secure the internet through my hacking skills !
          </p>
          <div>
            {/* Gradient styling in button  */}
            <Link
              href="mailto:amolverma.246@gmail.com"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://docs.google.com/document/d/1nYgQU4rpVhc7qbZVCSpHCrNEMArWAv50/edit"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          //motion.component is used to add animations !
          //initial is to add initial state
          initial={{ opacity: 0, scale: 0.5 }}
          //animate is to add the final state
          animate={{ opacity: 1, scale: 1 }}
          //Transition makes it cool
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* The place-self property is used to align individual grid items, and
            is a shorthand property for the following properties: align-self.
            justify-self. */}
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              // Centered relative to parent
              //absolute mean -> Absolute-positioned elements are completely taken out of the regular flow of the web page. They are not positioned based on their usual place in the document flow, but based on the position of their ancestor.
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
