import Image from "next/image";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3">
          <Image src="/JD.svg" alt="" width={22} height={22} />
          {site.name}, {new Date().getFullYear()}
        </p>
        <p>Built with Next.js and three.js</p>
      </div>
    </footer>
  );
}
