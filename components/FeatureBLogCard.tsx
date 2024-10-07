"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

interface blogFeatures {
  title: string;
  description: string;
  image: string;
  mainHead: string;
  mainDescription: string;
}

export default function FeatureBLogCard({
  title,
  description,
  image,
  mainHead,
  mainDescription,
}: blogFeatures) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Set hydrated to true on client-side only
  }, []);

  if (!hydrated) return null;
  return (
    <div className="h-[30rem] w-full flex items-center justify-around ">
      <PinContainer
        title={title}
        href="https://medium.com/code-like-a-girl/why-500-leetcode-problems-changed-my-life-3b4d5b366508"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <Image src={image} alt="blog1" width={300} height={200} />
          </div>
        </div>
      </PinContainer>
      <div className="max-w-[700px]">
        <h1 className="text-5xl font-bold">{mainHead}</h1>
        <p className="py-6 text-2xl text-gray-400">{mainDescription}</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
