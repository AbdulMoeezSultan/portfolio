import { siteUrl } from "../utils/site-url";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const fullUrl = `${siteUrl}/`;

  return {
    title: "Moeez | About",
    description: "about page it is",
    openGraph: {
      title: "Moeez | About",
      description: "about page it is",
      url: fullUrl,
      siteName: "Moeez Portfolio",
      images: [
        {
          url: `${siteUrl}/og/contact.png`,
          width: 1200,
          height: 630,
          alt: "Moeez Portfolio about page",
        },
      ],
      type: "website",
    },
  };
};

export default function page() {
  return (
    <main className="min-h-screen text-textDark px-6 py-12 flex items-center justify-center">
      <section className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-primary">About Me</h1>

        <div className="space-y-6 text-lg leading-relaxed text-textMuted">
          <p>
            I&apos;m a passionate software developer with a love for building clean,
            performant, and user-centric applications. I started my journey in
            web development and quickly grew fascinated with how code can bring
            ideas to life.
          </p>
          <p>
            Currently, I work with technologies like{" "}
            <span className="font-semibold text-textDark">React</span>,{" "}
            <span className="font-semibold text-textDark">Node.js</span>, and{" "}
            <span className="font-semibold text-textDark">MongoDB</span>. I'm
            deeply interested in blockchain, and I'm learning{" "}
            <span className="font-semibold text-textDark">Solidity</span> to
            create smart contracts. My goal is to contribute to meaningful
            open-source projects and become a blockchain specialist.
          </p>
        </div>

        <div className="bg-secondary text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">🛠 Tech Stack</h2>
          <ul className="grid grid-cols-2 gap-y-2 text-left list-disc list-inside text-base">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Solidity</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Smart Contracts</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
