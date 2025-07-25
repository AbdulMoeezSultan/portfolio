import Image from "next/image";
import NavLinks from "./nav-links";
import { pompiere } from "./fonts";

export default function Navbar() {
  return (
    <nav className="flex gap-1">
      <Image
        src="/image.png"
        width={250}
        height={250}
        className="rounded-full border border-primary"
        alt="a person"
      />
      <div className="flex flex-col w-full">
        <NavLinks />
        <h1 className="ml-5 mt-5 text-5xl">Hi, I am Abdul Moeez Sultan!</h1>
        <p className={`ml-80 mt-4 underline text-textMuted ${pompiere.className} text-2xl`}>
          A Website Developer
        </p>
      </div>
    </nav>
  );
}
