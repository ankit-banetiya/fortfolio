'use client';

import Link from 'next/link';
import { Pen } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="max-w-6xl mx-auto">
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Left side - Logo/Brand */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
          <span className="text-green-600 font-bold text-base">KB</span>
          <span className="text-gray-800 font-medium text-base">- Kunal Bundela.</span>
        </div>
      </div>

      {/* Center - Navigation Links */}
      <div className="flex px-6 py-1 items-center space-x-8 rounded-lg border border-gray-300 text-base">
        <Link href="#work" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
          Work
        </Link>
        <Link href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
          Experience
        </Link>
        <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
          It's me
        </Link>
        <Link href="#resume" className="text-gray-700 hover:text-gray-900 transition-colors font-medium underline">
          Resume
        </Link>
      </div>

      {/* Right side - CTA Button */}
      <div className="flex items-center">
        <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-[8px] hover:bg-gray-800 transition-colors">
          <Image src="/assets/img/nav-icon.svg" alt="nav-icon" width={16} height={16} />
          <span className="font-medium text-sm">
            Let's <span className="underline">Create</span>
          </span>
        </button>
      </div>
    </nav>
    </div>
  );
}
