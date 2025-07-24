import Projects from "./ui/projects";
import { siteUrl } from "./utils/site-url";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const fullUrl = `${siteUrl}/`;

  return {
    title: "Moeez | Home",
    description:
      "Software developer passionate about AI and Web3, building intelligent, decentralized digital experiences.",
    openGraph: {
      title: "Moeez | Home",
      description:
        "Software developer passionate about AI and Web3, building intelligent, decentralized digital experiences.",
      url: fullUrl,
      siteName: "Moeez Portfolio",
      images: [
        {
          url: `${siteUrl}/og/home.png`,
          width: 1200,
          height: 630,
          alt: "Moeez Portfolio",
        },
      ],
      type: "website",
    }
  };
};

export default function page() {
  return (
    <div className="mt-10 border border-t-primary pt-4 justify-end">
      <div>
        <p className="font-bold text-4xl">Objectives:</p>
        <p className="font-medium text-2xl w-[70%] text-justify break-before-auto text-textMuted">
          I&apos;m a software developer passionate about AI and Web3, with a strong
          interest in creating innovative, real-world solutions that combine
          intelligent systems with the power of decentralized technologies to
          shape the future of digital experiences.
        </p>
      </div>
      <Projects />
    </div>
  );
}
