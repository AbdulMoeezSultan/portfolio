"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const pathName = usePathname();
  const links = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`flex w-full border-b-4 border-primary/20 h-14 mt-5 rounded-2xl shadow-2xl mb-3 bg-[radial-gradient(circle,_#8697c4_75%,_#ede8f5_99%)] hover:bg-[radial-gradient(circle,_#8697c4_70%,_#ede8f5_99%)] text-background text-3xl font-bold justify-end gap-36 pr-20 items-center`}
    >
      {links.map((link, index) => {
        return (
          <div className="relative w-20 h-9" key={index}>
            <Link
              href={link.href}
              className={clsx(
                "hover:top-[-5] hover:left-[-4] hover:text-4xl absolute left-0 top-0",
                {
                  "text-textMuted": pathName === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
