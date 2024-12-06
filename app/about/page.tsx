"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-[#ebfc72]">
      <main className="flex flex-col">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
          <div className="w-full max-w-7xl pl-2 pr-2 md:pl-[8%]">
            <div className="pt-10 md:pt-20">
              <h1 className="text-4xl md:text-8xl font-avantgarde-bold mb-8 md:mb-16 text-[#212e21]">
                About Us
              </h1>

              {/* Team Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start mb-20">
                <div className="w-full aspect-[16/11] mb-6 md:mb-0">
                  <Image
                    src="/sokor.jpg"
                    alt="Sokorro Team"
                    width={2000}
                    height={1500}
                    className="rounded-sm shadow-[0_15px_30px_rgba(0,0,0,0.3)] w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Founded by industry veterans with decades of experience, Sokorro brings deep expertise in data center infrastructure, cloud computing, and network solutions.
                  </p>
                  <p className="text-lg md:text-xl font-avantgarde-bk text-[#212e21]">
                    Our mission is to simplify the complex world of IT infrastructure procurement, helping organizations make informed decisions that drive their business forward.
                  </p>
                </div>
              </div>

              {/* Values Section */}
              <div className="py-10 md:py-20">
                <h2 className="text-3xl md:text-5xl font-avantgarde-bold mb-12 text-[#212e21]">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Expertise</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                      We bring years of industry experience and deep technical knowledge to every engagement.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Transparency</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                      We believe in clear communication and honest guidance throughout the procurement process.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-avantgarde-bold text-[#212e21]">Partnership</h3>
                    <p className="text-lg font-avantgarde-bk text-[#212e21]">
                      We work as an extension of your team, aligned with your goals and objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}