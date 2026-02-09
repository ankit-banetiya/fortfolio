"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [active, setActive] = useState("about");

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Toggle */}
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-6">
            <button
              onClick={() => setActive("about")}
              className={`px-5 py-2 text-sm rounded-full transition
                ${active === "about" ? "bg-black text-white" : "text-gray-600"}`}
            >
              About me
            </button>
            <button
              onClick={() => setActive("experience")}
              className={`px-5 py-2 text-sm rounded-full transition
                ${active === "experience" ? "bg-black text-white" : "text-gray-600"}`}
            >
              Experience
            </button>
          </div>

          {/* Text */}
          {active === "about" && (
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
              <p>
                Around 2013–14, I was fascinated by iOS design even before owning an iPhone. I loved how clean, smooth, and intentional everything felt. In 2016, when I finally got my first iPhone, it clicked. The interface, colors, and usability showed me how powerful good design could be.
              </p>
              <p>
                During the COVID lockdown, while studying front-end development, I discovered UI/UX design. It felt like the missing piece where logic met creativity. I took courses, practiced consistently, and in 2021, landed my first internship.
              </p>
              <p>
What started as curiosity slowly became a career. Today, I design digital products with a focus on clarity, simplicity, and real usability.
              </p>
            </div>
          )}

          {active === "experience" && (
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
              <p>
                I began my journey by learning front-end development and gradually
                moved into UI/UX design.
              </p>
              <p>
                Through consistent practice, online courses, and internships,
                I developed a strong understanding of user-centric design.
              </p>
              <p>
                Today, I work on creating meaningful digital experiences that
                balance aesthetics and functionality.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <div className="relative bg-white">
            {/* Pin */}
            {/* <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full"></span> */}

            <Image
              src="/assets/img/about-img.png"
              alt="Workspace"
              width={320}
              height={420}
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
