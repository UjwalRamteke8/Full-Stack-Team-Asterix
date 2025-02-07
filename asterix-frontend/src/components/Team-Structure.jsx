import React from "react";

const TeamStructure = () => {
  const teamMembers = [
    {
      name: "KETAN BHALERAO",
      role: "TEAM CAPTAIN",
      techRoll: "",
      nonTech: "",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Sushant Anil Salunkhe",
      role: "TEAM WISE CAPTAIN",
      techRoll: "",
      nonTech: "",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "KUNAL CHANDRAKANT GHORPADE",
      role: "TEAM MANAGER",
      techRoll: "BRAKING",
      nonTech: "LEAD MARKETING",
      branch: "TY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Abhishek Anil Deshmukh",
      role: "TEAM TREASURE",
      techRoll: "Electrical & DAQ ",
      nonTech: "Tools and Fixture ",
      branch: "TY-ELECTRICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Maalika Prakash Dhoran",
      role: "TEAM TREASURE",
      techRoll: "",
      nonTech: "DOCUMENTATION",
      branch: "TY-COMPUTER",
      image: "path/to/image.jpg",
    },
    {
      name: "SAIF PEERZADA",
      role: "Suspension Department Head",
      techRoll: "Suspension",
      nonTech: "",
      branch: "TY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Abhishek Ravsaheb Khairnar",
      role: "TEAM TREASURE",
      techRoll: "Powertrain and Design & Analysis",
      nonTech: "Tools & Fixtures",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Dhande Ganesh Dilip",
      role: "TEAM MEMBER",
      techRoll: "Braking And Power Train",
      nonTech: "Tools & Fixtures",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Omprakash Sunil Nikam",
      role: "TEAM MEMBER",
      techRoll: "Design & Analysis",
      nonTech: "SOCIAL MEDIA",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Vishakha Sanjay Badgujar",
      role: "TEAM MEMBER",
      techRoll: "Vehicle dynamic (steering)",
      nonTech: "SOCIAL MEDIA",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Bhagyashri Arun Adhao",
      role: "TEAM MEMBER",
      techRoll: "Power train and design",
      nonTech: "SOCIAL MEDIA",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Dhanshree Ingale",
      role: "TEAM MEMBER",
      techRoll: "Electrical and Daq",
      nonTech: "SOCIAL MEDIA & MARKETING",
      branch: "TY-ELECTRICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "SANGALE DARSH MILIND",
      role: "TEAM MEMBER",
      techRoll: "SUSPENSION ( VEHICLE DYNAMICS)",
      nonTech: "",
      branch: "TY-CIVIL",
      image: "path/to/image.jpg",
    },
    {
      name: "Shubhangi Pruthviraj Salunke",
      role: "TEAM MEMBER",
      techRoll: "BRAKING",
      nonTech: "",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Sudarshan Devendra Sathone",
      role: "TEAM MEMBER",
      techRoll: "",
      nonTech: "DOCUMENTAION And MARKETING",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Suresh Vijay Khadtare",
      role: "TEAM MEMBER",
      techRoll: "BRAKING SYSTEM",
      nonTech: "Tools & Fixtures",
      branch: "LY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Nitin Balkisan Bardiya",
      role: "TEAM MEMBER",
      techRoll: "ELECTRICAL & DAQ",
      nonTech: "ROLL CAGE",
      branch: "LY-ELECTRICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Harsha Rajendra Pawar",
      role: "TEAM MEMBER",
      techRoll: "BRAKING",
      nonTech: "Quality and design validation",
      branch: "TY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Vaishnavi Devidas Kulkarni",
      role: "TEAM MEMBER",
      techRoll: "Electrical & DAQ",
      nonTech: "SOCIAL MEDIA",
      branch: "TY-ELECTRICAL",
      image: "IMG-20240819-WA0015 - Vaishnavi Kulkarni.jpg",
    },
    {
      name: "Shivam Sanjay Shalesha",
      role: "TEAM MEMBER",
      techRoll: "BRAKING",
      nonTech: "SOCIAL MEDIA",
      branch: "TY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "Rohit Radhesham Date",
      role: "TEAM MEMBER",
      techRoll: "ELECTRICAL",
      nonTech: "",
      branch: "TY-ELECTRICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "KRUNAL KUKADE",
      role: "TEAM MEMBER",
      techRoll: "SUSPENSION",
      nonTech: "",
      branch: "TY-MECHANICAL",
      image: "path/to/image.jpg",
    },
    {
      name: "UJWAL RAMTEKE",
      role: "TEAM MEMBER",
      techRoll: "WEBSITE DEPARTMENT",
      nonTech: "",
      branch: "TY-COMPUTER",
      image: "path/to/image.jpg",
    },
  ];

  return (
    <section id="destinations" className="py-16 bg-gray-100 w-">
      <h2 className="text-3xl font-semibold text-center mb-8 font-mulish ">
        TEAM STRUCTURE
      </h2>
      <div className="grid grid-rows-4 grid-flow-col gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="destination-card border-2 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="card-img-top w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-mulish font-bold text-center">
                {member.name}
              </h3>
              <p className="text-sm text-center font-mulish  text-gray-600">
                {member.role}
              </p>
              <p className="text-sm text-center font-mulish  text-gray-600">
                {member.techRoll}
              </p>
              <p className="text-sm text-center font-mulish  text-gray-600">
                {member.nonTech}
              </p>
              <p className="text-sm text-center font-mulish  text-gray-600">
                {member.branch}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamStructure;
