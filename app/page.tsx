import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdCastForEducation } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-7xl w-full">
          <FloatingNav className="px-4 py-4" navItems={[
            { name: "Home", link: "/", icon: <FaHome className="size-5" /> },
            { name: "Skills", link: "#skills", icon: <GiSkills className="size-5" /> },
            { name: "Projects", link: "#projects", icon: <GrProjects className="size-5" /> },
            { name: "Certificates", link: "#certificates", icon: <LiaCertificateSolid className="size-5" /> },
            { name: "Education", link: "#education", icon: <MdCastForEducation className="size-5" /> },
            { name: "Contact", link: "#contact", icon: <IoIosContact className="size-5" /> }
          ]} />
          <Hero />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Contact />
        </div>
      </TracingBeam>
    </main>
  );
}
