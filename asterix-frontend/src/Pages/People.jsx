const people = [
  {
    name: "KETAN BHALERAO",
    role: "TEAM CAPTAIN",
    imageUrl: "./images/",
    department: "",
  },
  {
    name: "Sushant Anil Salunkhe",
    role: "TEAM WISE CAPTAIN",
    imageUrl: "",
    department: "",
  },
  {
    name: "KUNAL GHORPADE",
    role: "TEAM MANAGER",
    imageUrl: "",
    department: "LEAD MARKETING",
  },
  {
    name: "Abhishek Anil Deshmukh",
    role: "TEAM TREASURER",
    imageUrl: "",
    department: "Tools and Fixture AND (Electrical & DAQ)",
  },
  {
    name: "MAALIKA DHORAN",
    role: "TEAM TREASURER",
    imageUrl: "",
    department: "Documentation",
  },
  {
    name: "SAIF PEERZADA",
    role: "Suspension Department Head",
    imageUrl: "",
    department: "Suspension",
  },
  {
    name: "Abhishek Ravsaheb Khairnar",
    role: "TEAM TREASURER",
    imageUrl: "",
    department: "Powertrain and Design & Analysis , (Tools & Fixtures)",
  },
  {
    name: "Dhande Ganesh Dilip",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Tool and Fixtures , Braking, Power Train ",
  },
  {
    name: "Omprakash Sunil Nikam",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Design and Analysis , SOCIAL MEDIA",
  },
  {
    name: "Vishakha Sanjay Badgujar",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: " Vehicle dynamic (steering and suspension ) SOCIAL MEDIA",
  },
  {
    name: "Bhagyashri Arun Adhao",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: " Power train and design AND SOCIAL MEDIA",
  },
  {
    name: "Dhanshree Ingale",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Electrical and Daq , MARKETING",
  },
  {
    name: "SANGALE DARSH MILIND",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "SUSPENSION ( VEHICLE DYNAMICS) AND MARKETING ",
  },
  {
    name: "Shubhangi pruthviraj salunke",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "BRAKING",
  },
  {
    name: "Sudarshan Devendra Sathone ",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "MARKETING AND DOCUMENTAION",
  },
  {
    name: "suresh vijay khadtare",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "TOOLS AND FIXTURE",
  },
  {
    name: "Nitin Balkisan Bardiya",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "ELECTRICAL & DAQ",
  },
  {
    name: "Sumit Sunil Bhad",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "VD-Steering AND SOCIAL MEDIA",
  },
  {
    name: "Ajit Umakant Chimote ",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "ROLLCAGE",
  },
  {
    name: "Nitin Balkisan Bardiya",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "ELECTRICAL & DAQ",
  },
  {
    name: "Harsha Rajendra Pawar",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "BRAKING",
  },
  {
    name: "Vaishnavi Devidas Kulkarni",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Electrical & DAQ",
  },
  {
    name: "Shivam Sanjay Shalesha",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "BRAKING SYSTEM AND SOCIAL MEDIA",
  },
  {
    name: "KRUNAL KUKADE",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "SUSPENSION",
  },
  {
    name: "UJWAL RAMTEKE",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "WEBSITE",
  },
  {
    name: "Monika Vijay Rakhonde ",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Electrical and DAQ , Documentation ",
  },
  {
    name: "Salunkhe Sushant Anil ",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "Rollcage AND (Tools and fixture)",
  },
  {
    name: "Radhika  Prabhakar Kawale",
    role: "TEAM MEMBER",
    imageUrl: "",
    department: "",
  },

  // More people...
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl font-sans">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 font-mulish">
            At Team Asterix, our leadership team is driven by innovation,
            collaboration, and excellence. We are a passionate group of
            individuals committed to pushing boundaries, solving challenges, and
            delivering outstanding results. With a shared vision , we strive to
            acquire and apply a comprehensive engineering skill set. We
            challenge teams across India and around the globe, excelling in
            designing, manufacturing, and testing best-in-class All-Terrain
            Vehicles (ATVs)..
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.role}
                  </p>
                  <p className="text-sm/6 font-semibold text-indigo-600">
                    {person.department}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-700"></div>
    </div>
  );
}
