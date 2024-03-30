import { useRef } from "react";
import Image from "next/image";

export default function Slider() {
  const swiperRef = useRef<HTMLDivElement>(null);

  function handleSwipe(dir: "right" | "left") {
    if (!swiperRef || !swiperRef.current || !swiperRef.current.parentNode)
      return;
    let left = swiperRef.current.scrollLeft;

    const leftArrow = swiperRef.current.parentNode.firstChild as HTMLDivElement;
    const rightArrow = swiperRef.current.parentNode.lastChild as HTMLDivElement;

    leftArrow.style.display = left < 90 ? "none" : "block";
    rightArrow.style.display = left > 710 ? "none" : "block";
    console.log(left);

    left += dir === "right" ? 300 : -300;
    swiperRef.current.scroll({ left, behavior: "smooth" });
  }

  return (
    <>
      <div>
        <div
          className="absolute bottom-16 left-2 z-50 hidden h-14 w-14 -translate-y-1/2 rounded-[50%] bg-stone-300/80 text-5xl ring ring-yellow-50 lg:block"
          onClick={() => handleSwipe("left")}
        >
          &larr;
        </div>
        <div
          className="absolute bottom-0 left-0 flex h-64 w-full snap-x gap-6 overflow-scroll p-4"
          ref={swiperRef}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i + 1}
              className="h-full w-full max-w-72 shrink-0 snap-center overflow-hidden rounded-3xl"
            >
              <Image
                src={`/slides/image-${i + 1}.jpg`}
                alt={`image number ${i + 1}`}
                height={300}
                width={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-16 right-2 z-50 hidden h-14 w-14 -translate-y-1/2 rounded-[50%] bg-stone-300/80 text-5xl ring ring-yellow-50 lg:block"
          onClick={() => handleSwipe("right")}
        >
          &rarr;
        </div>
      </div>
    </>
  );
}

/* {Array.from({ length: 5 }).map((_, i) => (
  <div key={i + 1} className="h-full w-full">
    <Image
      src={`/slides/image-${i + 1}.jpg`}
      alt={`image number ${i + 1}`}
      height={300}
      width={400}
      className="h-full w-full object-cover"
    />
  </div>
))} */
