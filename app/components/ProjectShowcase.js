import Image from "next/image";

export default function ProjectShowcase() {
    return (
        <>
        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/thelal-logo.png"
                            alt="Project icon"
                            width={36}
                            height={36}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-lg font-semibold">
                        TheLAL – Land Asset Liaisoner
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/thelal-feed.png"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
                Product and UX designer at theLAL, building intuitive real estate
                experiences for brokers and home seekers through thoughtful design
                and AI-powered flows. I work across product strategy, UX, and AI-led
                features.
            </p>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/talk-sence-logo.png"
                            alt="Project icon"
                            width={36}
                            height={36}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-lg font-semibold">
                        Talksense - Landing page for AI Call Assistant for Modern Call Centers
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/talk-sence-img.jpg"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
                I design AI-driven call intelligence experiences using user-centered design, information architecture, and workflow optimization.
I focus on transforming complex call data into clear dashboards, real-time alerts, and actionable insights.
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/gis-logo.png"
                            alt="Project icon"
                            width={40}
                            height={40}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-[12px] font-semibold w-68">
                        Directorate, Urban Administration
& Development Government of
Madhya Pradesh
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/gis-img.jpg"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
              Designed intuitive UI/UX for GIS-based urban analytics tools, simplifying complex spatial data into clear, actionable dashboards.
Collaborated with stakeholders to deliver user-centric, data-driven interfaces aligned with project requirements.
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/accounty-logo.png"
                            alt="Project icon"
                            width={36}
                            height={36}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-lg font-semibold">
              Accounty.AI -Let AI handle accounting for you
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/accounty-img.jpg"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
                I design product and UX experiences for an AI-powered accounting platform, applying user-centered design,
workflow optimization, and system thinking to simplify complex financial processes like Tally sync, vouchers, and reports.
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/pushp-logo.png"
                            alt="Project icon"
                            width={60}
                            height={60}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-lg font-semibold">
             PUSHP Brand - Pleased to take you into the world of pure spices.
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/pushp-img.jpg"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
                Blending brand identity with a modern visual language. Created wireframes, high-fidelity designs, and coordinated with developers to implement smooth scroll-based animations.
            </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/assets/img/blox-logo.png"
                            alt="Project icon"
                            width={36}
                            height={36}
                            className="object-cover"
                            unoptimized
                        />
                    </span>
                    <h2 className="text-lg font-semibold">
                        Intuitive platform to create accurate, forward-thinking financial plans
                    </h2>
                </div>

                <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline flex items-center gap-1n underline"
                >
                    View Project <span>↗</span>
                </a>
            </div>

            {/* Card */}
            <div className="rounded-2xl">
                {/* Phones */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="relative w-full aspect-[21/9]">
                        <Image
                            src="/assets/img/blox-img.jpg"
                            alt="App screen"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Description */}
            <p className="mt-4 w-full text-sm text-gray-600 leading-relaxed">
                Led the end-to-end UX redesign of Blox, simplifying complex financial and modeling workflows into intuitive journeys.
Focused on improving usability and scalability so business owners could quickly understand insights and take action with confidence.
            </p>
        </section>
        </>
    );
}


