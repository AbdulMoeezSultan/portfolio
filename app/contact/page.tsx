import { siteUrl } from "../utils/site-url";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const fullUrl = `${siteUrl}/`;

  return {
    title: "Moeez | Contact",
    description: "contact page it is",
    openGraph: {
      title: "Moeez | Contact",
      description: "contact page it is",
      url: fullUrl,
      siteName: "Moeez Portfolio",
      images: [
        {
          url: `${siteUrl}/og/contact.png`,
          width: 1200,
          height: 630,
          alt: "Moeez Portfolio contact page",
        },
      ],
      type: "website",
    },
  };
};

export default function page() {
  return (
    <div className="min-h-screen text-textDark flex items-center justify-center p-8">
      <form
        action="/api/contact"
        method="POST"
        className="w-full max-w-xl bg-secondary/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-secondary"
      >
        <h2 className="text-3xl font-bold text-center text-primary">
          Contact Me
        </h2>

        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-textMuted">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="p-3 rounded-md bg-white/40 text-textDark placeholder-textMuted focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-textMuted">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="p-3 rounded-md bg-white/40 text-textDark placeholder-textMuted focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="message"
            className="text-sm font-medium text-textMuted"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="p-3 rounded-md bg-white/40 text-textDark placeholder-textMuted focus:outline-none"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-cta text-white font-semibold rounded-xl hover:bg-ctaHover transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
