"use client";

import { motion } from "framer-motion";
import { Cover } from "./ui/cover";
import { Vortex } from "./ui/vortex";

const Hero = () => {
  return (
    <div>
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold"
              >
                <Cover>Welcome to Blog Vista</Cover>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl py-6"
              >
                Discover a world of captivating stories, insightful articles,
                and engaging content on our innovative blogging platform.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="btn btn-primary"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
