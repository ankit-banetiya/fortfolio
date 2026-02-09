import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">

      {/* LEFT CARD */}
      <div className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 rotate-[-15deg]">
        <div className="bg-white rounded-xl shadow-2xl p-3">
          <Image
            src="/assets/img/banner-one.png"
            alt="Dummy UI Left"
            width={420}
            height={260}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 rotate-[12deg]">
        <div className="bg-white rounded-xl shadow-2xl p-3">
          <Image
            src="/dummy-right.png"
            alt="Dummy UI Right"
            width={420}
            height={260}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 text-center px-4">
        <span className="inline-block bg-orange-500 text-white text-sm px-4 py-1 rounded-full mb-4">
          Currently at
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Product Design in Figma
        </h1>

        {/* SCROLL DOWN */}
        <div className="mt-12 flex flex-col items-center text-gray-400">
          <span className="text-xs tracking-widest mb-2">SCROLL DOWN</span>
          <div className="w-px h-10 bg-gray-300" />
        </div>
      </div>

    </section>
  );
}
