export function InfiniteMarquee() {
  return (
    <div className="bg-white py-10 lg:py-[60px] overflow-hidden flex justify-center">
      <div className="w-[120vw] max-[991px]:w-[230vw] max-[540px]:w-[280vw] -rotate-0 overflow-hidden">
        <div className="flex animate-[marquee_18s_linear_infinite]">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-1671x119_6819cf0b-b74a-4a81-a34a-1bea962cd000.svg"
            alt="Beyond Limits in Finance with Data Science — repeated"
            className="h-auto w-full shrink-0"
          />
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://storage.googleapis.com/studio-design-asset-files/projects/nBW2yYm1av/s-1671x119_6819cf0b-b74a-4a81-a34a-1bea962cd000.svg"
            alt=""
            aria-hidden
            className="h-auto w-full shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
