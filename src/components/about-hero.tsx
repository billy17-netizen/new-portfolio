import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="sm:1/2 lg:w-2/2 mt-10 w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Bily Lelatobur
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I turn vision into reality with code. Whether I&apos;m working on
              Laravel application or any backend system, I bring my commitment
              to robust architecture and efficient performance to every project
              I work on.In addition to my technical skills, I prioritize
              collaboration and communication within my team. Understanding that
              the best results come from a synergy of diverse ideas, I actively
              seek input from colleagues and stakeholders to ensure that every
              aspect of the project aligns with client expectations and user
              needs. This holistic approach helps in delivering solutions that
              are not only technically sound but also strategically effective.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest projects demonstrating my skills in Laravel,
              PHP, JavaScript, and React, showcasing my proficiency in both
              backend and frontend development. These projects highlight my
              ability to create dynamic web applications and engaging user
              experiences.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Indian flag"
                src="https://flagcdn.com/id.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Salatiga, Indonesia
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
