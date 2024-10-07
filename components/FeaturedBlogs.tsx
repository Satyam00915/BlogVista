"use client";

import {motion} from "framer-motion";

import FeatureBLogCard from "./FeatureBLogCard";

const FeaturedBlogs = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-center font-semibold text-5xl">Featured Blogs</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <FeatureBLogCard />
      </motion.div>
    </div>
  );
};

export default FeaturedBlogs;
