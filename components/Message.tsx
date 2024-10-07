"use client";

import React from "react";
import { motion } from "framer-motion";
const MessageFromDeveloper: React.FC = () => {
  return (
    <section className="bg-transparent text-white py-10 px-8">
      <div className="container mx-auto text-center mb-24">
        <div className="opacity-1 flex flex-col items-center gap-10 animate-fadeIn transform scale-90 transition-all duration-1000 ease-in-out">
          <h2 className="text-6xl font-extrabold mb-24 font-serif animate-slideInDown">
            Message from the Developer
          </h2>
          <p className="text-2xl mb-10 max-w-3xl mx-auto font-sans leading-relaxed animate-slideInUp">
            Thank you for visiting my blog! This project is a reflection of my
            passion for web development and a space to share thoughts and ideas
            with the world. Whether you're here to read or contribute, I hope
            you find value and inspiration through the content on this platform.
            Stay curious, and feel free to connect with me for any feedback or
            collaboration opportunities!
          </p>

          <a
            href="https://www.linkedin.com/in/satyam0915"
            target="_blank"
            className="inline-block bg-primary text-dark px-8 py-4 rounded-full font-bold tracking-wider hover:bg-opacity-90 transition-all duration-300 ease-in-out shadow-xl transform hover:scale-105 animate-pulse w-fit"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default MessageFromDeveloper;
