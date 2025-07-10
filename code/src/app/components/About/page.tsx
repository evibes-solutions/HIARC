"use client";
  
// import { useRef } from "react";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";

export default function AboutPage() {
  // const aboutRef = useRef<HTMLDivElement>(null);

  // const scrollToAbout = () => {
  //   aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const teamMembers = [
  //   {
  //     name: "Member 1",
  //     designation: "Role",
  //     image: "/team1.jpg",
  //   },
  //   {
  //     name: "Member 2",
  //     designation: "Role",
  //     image: "/team2.jpg",
  //   },
  // ];

  return (
    <div className="bg-white text-white min-h-screen">
      <section className="bg-[#1A3C36] min-h-screen flex flex-col items-center justify-center pb-8 px-4 ">
        <h1 className="text-4xl font-bold text-center tracking-wide">
          ABOUT US
        </h1>
        {/* <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="object-contain mt-10 mb-10"
        />
        <button
          onClick={scrollToAbout}
          className="animate-bounce mt-4 text-[#7ED6C1]"
          aria-label="Scroll to About Section"
        >
          <ChevronDown size={36} />
        </button> */}
      </section>

      {/* <section
        ref={aboutRef}
        className="bg-white text-[#1A3C36] pt-5 pb-20 px-4 md:px-20"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">WHO WE ARE</h2>
            <p className="text-lg leading-7">info</p>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group w-48 h-64 overflow-hidden rounded-md"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition bg-[#1A3C36]/80 text-white text-center px-2">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-[#7ED6C1]">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
