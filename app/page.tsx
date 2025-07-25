import type { Metadata } from "next";
import Projects from "./ui/projects";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Moeez | Home",
    description:
      "Software developer passionate about AI and Web3, building intelligent, decentralized digital experiences.",
  };
};

export default function page() {
  return (
    <div className="mt-10 border border-t-primary pt-4 justify-end">
      <div>
        <p className="font-bold text-4xl">Objectives:</p>
        <p className="font-medium text-2xl w-[70%] text-justify break-before-auto text-textMuted">
          Im a software developer passionate about AI and Web3, with a strong
          interest in creating innovative, real-world solutions that combine
          intelligent systems with the power of decentralized technologies to
          shape the future of digital experiences.
        </p>
      </div>
      <Projects />
    </div>
  );
}
