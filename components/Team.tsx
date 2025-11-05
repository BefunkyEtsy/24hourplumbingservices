
import React from 'react';

const teamMembers = [
  { name: "David", role: "Lead Emergency Engineer", bio: "With 15 years on the job, David has seen it all. He's an expert at diagnosing and fixing complex issues under pressure.", image: "https://picsum.photos/id/237/400/400" },
  { name: "Maria", role: "Gas Safe & Heating Specialist", bio: "Maria is our go-to for boiler breakdowns and gas-related emergencies. Her priority is always your safety.", image: "https://picsum.photos/id/238/400/400" },
  { name: "Tom", role: "Drainage & Blockage Expert", bio: "Tom specializes in high-pressure jetting and drain repairs, getting things flowing again in no time.", image: "https://picsum.photos/id/239/400/400" },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">Meet the Emergency Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our friendly, experienced engineers are ready to help you, day or night.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-md font-semibold text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
