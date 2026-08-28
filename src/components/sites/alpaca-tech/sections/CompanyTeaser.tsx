import Image from "next/image";
import Link from "next/link";

export function CompanyTeaser() {
  return (
    <section className="flex justify-center bg-white px-5 lg:px-[76px] py-[120px] max-[540px]:py-20">
      <div className="relative w-full max-w-[1288px] bg-at-primary rounded-[60px] max-[991px]:rounded-[40px] overflow-hidden flex flex-col items-center justify-center px-10 lg:px-[75px] py-[120px]">
        <Image
          src="https://storage.googleapis.com/studio-design-asset-files/projects/4yqBl2mdWj/s-1440x634_v-fms_webp_eaeead84-56d3-4d35-9a03-82800126eb5f.jpg"
          alt=""
          fill
          sizes="(max-width: 1288px) 100vw, 1288px"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-at-primary/50" />
        <div className="relative z-10 flex flex-col items-center gap-10 max-w-[1100px] text-center">
          <h2 className="font-[var(--font-montserrat)] text-white text-[72px] max-[991px]:text-[50px] font-extrabold leading-none">COMPANY</h2>
          <p className="text-white text-base leading-[2] tracking-[0.04em] text-center font-[var(--font-noto-sans-jp)]">
            AlpacaTech is a group company of FOLIO Holdings.
            <br className="hidden lg:block" />
            As a member of the FOLIO Group, which aims to create new financial solutions and realize a prosperous future, we combine our AI and system development technologies with our financial expertise to provide cutting-edge technology that meets the needs of our customers.
          </p>
          <Link
            href="/en/company"
            className="inline-flex items-center justify-between gap-3 bg-white text-at-primary rounded-lg px-6 py-[17px] w-[280px] hover:bg-at-accent hover:text-white group transition-colors"
          >
            <span className="text-sm font-bold tracking-[0.04em]">Read more</span>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-24x24_53ad8034-be39-43e4-a7ff-6ee82c06d5c3.svg"
              alt=""
              className="w-6 h-6 group-hover:opacity-0 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
