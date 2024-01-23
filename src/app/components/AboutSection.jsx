"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          MERN Full Stack Developer (Node.js , React.js, Express.js , MongoDb, )
        </li>
        <li>SQL</li>
        <li>Python</li>
        <li>C++</li>
        <li>Django</li>
        <li>Rust </li>
        <li>Bash</li>
        <li>Web Pentesting</li>
        <li>App Pentesting</li>

        <li>Tailwind </li>
        <li>Next.js </li>
        <li>Devops </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Graduation : United College of Engineering and Research</li>
        <li>High School : Boys High School and College , Prayagraj</li>
      </ul>
    ),
  },
  {
    title: "Recognitions",
    id: "recognitions",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Rewarded and Inducted into Hall of Fame 2023 - Nestforms (For finding
          a Security Vulnerability)
        </li>
        <li>
          Rewarded and Inducted into Hall of Fame 2023 - Achmea (For finding a
          Security Vulnerability)
        </li>
        <li>
          Rewarded and Inducted into Hall of Fame 2023 - Airship (For finding a
          Security Vulnerability)
        </li>
        <li>Got rewarded by AT&T for finding a Security Vulnerability</li>
        <li>
          Got rewarded by Crunchr for finding SubDomain Takeover Security
          Vulnerability
        </li>
        <li>
          Got rewarded by LuminPDF for finding Exposed Creds in Mobile App
          Security Vulnerability
        </li>
        <li>
          Got rewarded by Zenvoices for finding OpenRedirect Security
          Vulnerability
        </li>
        <li>
          Got rewarded by Appypie for finding Exposed Creds in Mobile
          Application Security Vulnerability
        </li>
        <li>
          Got rewarded by Squadcast for finding Exposed Creds in Mobile
          Application Security Vulnerability
        </li>{" "}
        <li>Got rewarded by Unbabel for finding A Security Vulnerability</li>{" "}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      {/* Gap adds gap between columns ! */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hi I am Amol , I also go by my alias &apos;Dingus&apos; , I am a
            passionate Coder , Cyber Security Researcher , Pentester and Bug
            Bounty Hunter. Since my childhood , I have always been interested in
            building and breaking things over my PC I work actively to build
            something useful for the internet and also improve the security of
            my clients by doing Bug Hunting on Responsible Disclosure Programs.
            I also share my work through my writeups on medium which have got
            more than 2.5k views and on Youtuber as well.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("recognitions")}
              active={tab === "recognitions"}
            >
              {" "}
              Awards and Recognitions{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {/* Displays content of tab */}
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
