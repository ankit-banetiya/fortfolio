'use client';

export default function Hero() {
  return (
    <>
      <section className="text-center">
        
        {/* Small greeting */}
        <p className="text-gray-400 text-lg italic mb-2">
          Hey There...
        </p>

        {/* Name row */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Grift, serif' }}>
            I'm Kunal
          </h1>

          {/* Profile Image */}
          <img
            src="https://picsum.photos/100/100?random=profile"
            alt="Kunal Bundela"
            className="w-14 h-14 rounded-full object-cover"
          />

          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'Grift, serif' }}>
            Bundela!
          </h1>
        </div>

        {/* Description */}
        <p className="text-xl mb-3">
          I enjoy designing and bringing ideas to life.
        </p>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Product & <span className="text-green-600 font-medium">UI/UX Designer</span>, creating SaaS products,
          AI tools, dashboards, and marketplaces that people find{" "}
          <span className="text-green-600 font-medium">easy and intuitive</span> to use.
        </p>

        {/* Current role */}
        <div className="inline-flex items-center gap-3">
          <div className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md">
            Product Designer at TheLAL
          </div>

          <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
            Currently at
          </span>
        </div>

      </section>
      
 </>

  );

}
