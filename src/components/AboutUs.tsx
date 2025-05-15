import React from "react";
import Image from "next/image";
import BorderedTitle from "@/shared/BorderedTitle";

const AboutUs = () => {
    return (
        <section id="about" className="py-8 bg-gray-950 lg:py-20 md:py-12">
            <div className="container mx-auto px-6">
                <div className="md:flex flex-col items-center gap-12 lg:flex-row">
                    {/* Left Image */}
                    <div className="w-full md:w-1/2">
                        <div className="relative h-96 w-full mb-6 md:mb-0 border border-gray-800 overflow-hidden rounded-sm hidden md:block">
                            <Image
                                src={"/about-us.jpg"} // Replace with your actual image path
                                alt="Perfume crafting"
                                layout="fill"
                                objectFit="cover"
                                className="grayscale"
                            />
                        </div>
                    </div>

                    {/* Right Text */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <BorderedTitle title={"About Us"} />
                        <p className="text-gray-300 text-sm md:text-base">
                            Founded in 2020, Noze Perfume is a luxury fragrance house
                            dedicated to the art of scent creation. Our master perfumers
                            blend rare ingredients sourced from around the world to craft
                            distinctive signature scents.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                            Each Noze perfume is meticulously developed and aged to
                            perfection, bottled in hand-crafted vessels that reflect our
                            commitment to excellence and artistry.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                            We believe that fragrance is an extension of personality — an
                            invisible accessory that leaves an unforgettable impression.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                            From our headquarters to international markets, we maintain the
                            highest standards throughout our global distribution network.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
