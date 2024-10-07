"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import {motion } from "framer-motion"
const Reviews = () => {
  return (
    <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-8 pt-5"
          >
            What Do People Say About Us?
          </motion.h1>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "This blog has been an invaluable resource for me. The articles are well-researched, insightful, and always provide practical tips I can apply immediately.",
    name: "Sarah Johnson",
    title: "Regular Reader",
  },
  {
    quote:
      "I've been following this blog for years, and it never fails to deliver high-quality content. The writing style is engaging, and the topics are always relevant to current trends.",
    name: "Michael Chen",
    title: "Digital Marketing Specialist",
  },
  {
    quote: "As a newcomer to the industry, this blog has been my go-to source for learning. The explanations are clear, and the examples are incredibly helpful.",
    name: "Emily Rodriguez",
    title: "Aspiring Blogger",
  },
  {
    quote:
      "What sets this blog apart is its commitment to providing diverse perspectives. It's refreshing to see a range of voices and experiences represented in the content.",
    name: "David Thompson",
    title: "Content Creator",
  },
  {
    quote:
      "The depth of analysis in each post is impressive. This blog doesn't just scratch the surface; it dives deep into topics and provides insights I haven't found elsewhere.",
    name: "Lisa Patel",
    title: "Tech Entrepreneur",
  },
];

export default Reviews
