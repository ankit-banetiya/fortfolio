import Image from "next/image";

export default function LensSection() {
  const images = [
    "/assets/img/lens-one.png",
     "/assets/img/lens-two.png",
      "/assets/img/lens-three.png",
       "/assets/img/lens-four.png",
        "/assets/img/lens-five.png",
  ];

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-md px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: 'Guthen Bloots Personal Use, cursive' }}>
          Life Through My Lens
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          A small collection of moments that make me who I am.
          From travel and rides to quiet everyday joys things that inspire me
          beyond screens and design files.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-5">
          <span >
            <Image src="/assets/img/instagram.png" alt="instagram" width={36} height={36} />
          </span>
          <span 
          >
            <Image src="/assets/img/linkedIn.png" alt="linkedIn" width={36} height={36} />
          </span>
          <span 
          >
            <Image src="/assets/img/dribbble.png" alt="dribbble" width={36} height={36} />
          </span>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-wrap justify-center  mt-12">
          {images.map((src, i) => (
            <div
              key={i}
              className={`bg-white rotate-[${i % 2 === 0 ? "-6deg" : "6deg"}]`}
            >
              <Image
                src={src}
                alt="lens"
                width={200}
                height={220}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
