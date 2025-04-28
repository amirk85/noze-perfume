// File: components/Team.tsx
"use client";
import React from "react";

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
    {
      id: 5,
      name: "Michael Johnson",
      image: "/team/michael.jpg", // Replace with the actual image path
      designation: "Compliance Officer",
      description:
        "Monitors adherence to regulations and industry standards to ensure the company's legal and ethical practices.",
    },
    {
      id: 6,
      name: "Emily Davis",
      image: "/team/emily.jpg", // Replace with the actual image path
      designation: "Product Development Specialist",
      description:
        "Leads the development of new products and fragrances, ensuring innovation and quality meet customer expectations.",
    },
    {
      id: 7,
      name: "James Wilson",
      image: "/team/james.jpg", // Replace with the actual image path
      designation: "Finance Manager",
      description:
        "Oversees the company's financial health, including budgeting, forecasting, and ensuring proper resource allocation.",
    },
    {
      id: 8,
      name: "Olivia Moore",
      image: "/team/olivia.jpg", // Replace with the actual image path
      designation: "Operations Assistant",
      description:
        "Assists in the day-to-day operations of the company, supporting various departments to ensure smooth workflow and efficient processes.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-100">Meet Our Team</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full border-2 border-gray-800"
            >
              {/* Avatar - smaller size */}
              <div className="relative w-24 h-24 mx-auto -mt-16 mb-6 border-4 border-gray-800 rounded-full overflow-hidden">
                <img
                  // src={member.image}
                  src={"/founders/avatar.jpg"}
                  alt={`Team member ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Designation */}
              <h3 className="text-2xl font-semibold text-gray-100">{member.name}</h3>
              <p className="text-gray-400 text-center mb-4">({member.designation})</p>

              {/* Description */}
              <p className="text-gray-400 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
