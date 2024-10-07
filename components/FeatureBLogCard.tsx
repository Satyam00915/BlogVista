"use client";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./ui/3d-pin";

export default function FeatureBLogCard() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Set hydrated to true on client-side only
  }, []);

  if (!hydrated) return null;
  return (
    <div className="h-[30rem] w-full flex items-center justify-around ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <div className="max-w-[700px]">
        <h1 className="text-5xl font-bold">Travel</h1>
        <p className="py-6">
          Explore the world through captivating travel blogs, where adventurers
          share their experiences, hidden gems, and cultural insights from
          across the globe.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}
