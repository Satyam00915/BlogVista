"use client";

import { motion } from "framer-motion";

import FeatureBLogCard from "./FeatureBLogCard";

const FeaturedBlogs = () => {
  return (
    <div className="space-y-5">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-semibold text-5xl"
      >
        Featured Blogs
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard
          title="Learn to Code"
          description="How I Prepared for DSA and Secured a Role at Microsoft"
          image="/blog1.png"
          mainHead="Master Coding: Your Beginner's Guide to Programming"
          mainDescription="Step into the world of coding with tutorials, tips, and projects designed to help you write your first line of code and beyond."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard
          title="Tech-Stuff"
          description="Stay ahead with the latest in tech trends and breakthroughs."
          image="/blog2.png"
          mainHead="Tech Trends: Stay Ahead in a Rapidly Evolving World"
          mainDescription="Get the latest updates on cutting-edge technologies, gadgets, and innovations that are reshaping industries and lives."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard
          title="Life Hacks"
          description="Navigating life's challenges with wisdom and compassion."
          image="/blog3.png"
          mainHead="Life Hacks: Navigating Everyday Challenges"
          mainDescription="From career advice to personal growth, explore practical solutions to common life issues and find inspiration to thrive in all areas of life."
        />
      </motion.div>
    </div>
  );
};

export default FeaturedBlogs;
