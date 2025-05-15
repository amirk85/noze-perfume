import React from "react";
import Image from "next/image"; // Import the Image component from Next.js
import BorderedTitle from "@/shared/BorderedTitle";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      image: "/team/john.jpg", // Replace with the actual image path
      designation: "Supply Chain Coordinator",
      description:
        "Responsible for managing and optimizing the supply chain processes to ensure timely delivery of materials and products.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "/team/jane.jpg", // Replace with the actual image path
      designation: "Marketing Specialist",
      description:
        "Develops and implements marketing strategies to increase brand visibility and attract potential customers.",
    },
    {
      id: 3,
      name: "David Miller",
      image: "/team/david.jpg", // Replace with the actual image path
      designation: "Business Development Executive",
      description:
        "Focuses on identifying new business opportunities and strategic partnerships to drive company growth.",
    },
    {
      id: 4,
      name: "Sophia Brown",
      image: "/team/sophia.jpg", // Replace with the actual image path
      designation: "Customer Relations Manager",
      description:
        "Ensures customer satisfaction by addressing concerns, maintaining relationships, and creating a positive experience for clients.",
    },
  ];

  return (
    <section id="team" className="bg-gray-950 py-6 md:py-12 lg:py-20">
      <div className="container mx-auto px-6 text-center">
        <BorderedTitle
          title={"Meet Our Team"}
          className="grid place-items-center mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full border-2 border-gray-800"
            >
              {/* Avatar - smaller size */}
              <div className="relative w-24 h-24 mx-auto -mt-16 mb-6 border-4 border-gray-800 rounded-full overflow-hidden">
                <Image
                  // src={member.image} // Use the actual image path here
                  src={"/team/avatar.jpg"} // Use the actual image path here
                  alt={`Team member ${member.name}`}
                  width={96} // Image width (24 * 4)
                  height={96} // Image height (24 * 4)
                  className="object-cover"
                />
              </div>

              {/* Name and Designation */}
              <h3 className="text-2xl font-semibold text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-400 text-center mb-4">
                ({member.designation})
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-4 text-sm md:text-base">
                {member.description.replace(/'([a-zA-Z])/g, "&#39;$1")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
