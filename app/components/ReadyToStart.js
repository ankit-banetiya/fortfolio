"use client";

import Image from "next/image";
import { useState } from "react";

export default function ReadyToStart() {
  const email = "kunal.bundela051100@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Top small text */}
        <p className="text-gray-400 text-xl mb-4" style={{ fontFamily: 'Guthen Bloots Personal Use, cursive' }}>
          Ready to Start
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'Grift, serif' }}>
          Let’s Build Something{" "}
          <span className="text-green-500" style={{ fontFamily: 'Guthen Bloots Personal Use, cursive' }}>
            Thoughtful
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm md:text-base">
          If you're working on a product that needs clarity, structure,
          and intention I'd love to help.
        </p>

        {/* Email + Copy */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="border border-blue-400 px-5 py-2 text-sm text-blue-600 rounded-md select-all">
            {email}
          </div>

          <button
            onClick={copyEmail}
            className="bg-black text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition"
          >
            <Image src="/assets/img/copy-icon.svg" alt="copy-icon" width={20} height={20} /> {copied ? "Copied!" : "Copy Email ID"}
          </button>
        </div>

        {/* Footer */}
        {/* <p className="text-gray-400 text-xs mt-20">
          Made with Love by Kunal Bundela ❤️
        </p> */}
      </div>
    </section>
  );
}
