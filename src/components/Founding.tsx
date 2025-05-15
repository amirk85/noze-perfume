import React from "react";
import Image from "next/image";
import BorderedTitle from "@/shared/BorderedTitle";

const Founding = () => {
    return (
        <section id="founding" className="py-8 bg-slate-950/50 lg:py-20 md:py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
                        <BorderedTitle title={"Founding of NozeExports"} />
                        <p className="text-gray-300 text-sm md:text-base">
                            Founded in Mid-2024 by Three Friends and fragrance enthusiasts and
                            industry experts: Rashid Siddique, Maqdum Pasha and Rehan Shaikh,
                            Noze Exports set out to create a platform that would connect
                            premium manufacturers with global buyers. Our goal was simple: to
                            provide exceptional quality, personalized service, and sustainable
                            practices in the fragrance industry.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                            <span className="font-semibold">Mission</span> : To make the world
                            smell beautiful with pure Indian fragrances.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base">
                            <span className="font-semibold">Vision</span> : To deliver top-quality oils with honesty and
                            speed.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 border border-gray-800 overflow-hidden rounded-sm hidden md:block">
                        <div className="relative h-96 w-full">
                            <Image
                                src={"/founding.jpg"} // Ensure this image exists in your /public folder
                                alt="Founding of NozeExports"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founding;
