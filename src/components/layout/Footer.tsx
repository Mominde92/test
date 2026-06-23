import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  "About Hoor": ["About us", "Our Partners", "Categories"],
  Support: ["Terms & Conditions", "Contact Support", "Privacy Policy"],
};

export function Footer() {
  return (
    <footer className="bg-[#fff1e4] font-footer">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-12 md:grid-cols-2 md:px-8 lg:grid-cols-[1.35fr_1fr_1fr_1.35fr_1fr] lg:py-14">
        <div>
          <a href="/" className="block w-40" aria-label="Hoor home">
            <Image
              src="/images/hoor-logo.svg"
              alt="HOOR"
              width={184}
              height={88}
              className="h-auto w-full object-contain"
            />
          </a>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-[16px] font-semibold leading-none text-ink">{title}</h3>
            <ul className="mt-4 space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] font-normal leading-none text-stone-600 hover:text-magenta">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-[16px] font-semibold leading-none text-ink">Share</h3>
          <div className="mt-4 flex items-center gap-5">
            <a
              href="#"
              className="text-ink hover:text-magenta"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-ink hover:text-magenta"
              aria-label="Twitter X"
            >
              <Twitter className="h-7 w-7" fill="currentColor" />
            </a>
            <a
              href="#"
              className="text-ink hover:text-magenta"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" fill="currentColor" />
            </a>
          </div>
          <p className="mt-4 max-w-[300px] text-[13px] font-normal leading-none text-ink">
            Find Nearest Store Around You
          </p>
        </div>

        <div>
          <h3 className="text-[16px] font-semibold leading-none text-ink">Download Now</h3>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href="#"
              className="block w-[174px] transition hover:-translate-y-0.5 hover:opacity-90"
              aria-label="Download on Google Play"
            >
              <Image
                src="/images/badges/google-play.png"
                alt="Get it on Google Play"
                width={257}
                height={76}
                className="h-auto w-full object-contain"
              />
            </a>
            <a
              href="#"
              className="block w-[174px] transition hover:-translate-y-0.5 hover:opacity-90"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/badges/app-store.png"
                alt="Download on the App Store"
                width={257}
                height={76}
                className="h-auto w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-magenta px-5 py-4 text-center font-footer text-[13px] font-semibold leading-none text-white">
        © Deeplenz 2026 - All Rights Reserved
      </div>
    </footer>
  );
}
