"use client";

import { motion } from "framer-motion";
import { Cover } from "./ui/cover";

const Hero = () => {
  return (
    <div>
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
              Discover a world of captivating stories, insightful articles, and
              engaging content on our innovative blogging platform.
            </motion.p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
