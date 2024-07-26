import { useRef, createRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import imagedata from "@/lib/data.json";
import "./home.scss";
import PrimaryButton from "@/components/shared/buttons/primary-button";

export default function Home() {
  const slidesRef = useRef(imagedata.map(() => createRef<HTMLDivElement>()));
  const slideContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    (_, contextSafe) => {
      if (!contextSafe) return;
      if (!sectionRef.current) return;
      if (!slideContainerRef.current || slideContainerRef.current === null)
        return;
      if (!slidesRef.current) return;
      const single_slide = slidesRef.current[0];
      if (!single_slide.current) return;

      const prevButton = document.querySelector(".previous__btn");
      const nextButton = document.querySelector(".next__btn");
      const slideDelay = 6;
      const slideDuration = 1;
      const wrap = true;
      const slides = document.querySelectorAll(".slide__item");
      const progressWrap = gsap.utils.wrap(0, 1);
      const numSlides = slides.length;

      gsap.set(slides, {
        // backgroundColor:
        //   "random([red, blue, green, purple, orange, yellow, lime, pink])",
        xPercent: (i) => i * 100,
      });

      const wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
      const timer = gsap.delayedCall(slideDelay, autoPlay);

      const animation = gsap.to(slides, {
        xPercent: "+=" + numSlides * 100,
        duration: 1,
        ease: "none",
        paused: true,
        repeat: -1,
        modifiers: {
          xPercent: wrapX,
        },
      });

      const proxy = document.createElement("div");
      let slideAnimation = gsap.timeline().to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;

      function animateSlides(direction: number) {
        timer.restart(true);
        slideAnimation.kill();
        const x = Number(
          snapX(Number(gsap.getProperty(proxy, "x"))) + direction * slideWidth
        );
        slideAnimation = gsap.timeline().to(proxy, {
          x: x,
          duration: slideDuration,
          onUpdate: updateProgress,
        });
      }
      function autoPlay() {
        // if (
        //   draggable.isPressed ||
        //   draggable.isDragging ||
        //   draggable.isThrowing
        // ) {
        //   timer.restart(true);
        // } else {
        //   animateSlides(-1);
        // }
        animateSlides(-1);
        // timer.restart(true);
      }
      function updateProgress() {
        animation.progress(
          progressWrap(Number(gsap.getProperty(proxy, "x")) / wrapWidth)
        );
      }

      function snapX(value: number) {
        const snapped = gsap.utils.snap(slideWidth, value);
        return wrap
          ? snapped
          : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
      }
      function resize() {
        const norm = Number(gsap.getProperty(proxy, "x")) / wrapWidth || 0;
        slideWidth = single_slide.current?.offsetWidth || 0;
        wrapWidth = slideWidth * numSlides;
        // wrap ||
        //   draggable.applyBounds({
        //     minX: -slideWidth * (numSlides - 1),
        //     maxX: 0,
        //   });

        gsap.set(proxy, {
          x: norm * wrapWidth,
        });
        animateSlides(0);
        slideAnimation.progress(1);
      }
      prevButton?.addEventListener("click", function () {
        animateSlides(1);
      });

      nextButton?.addEventListener("click", function () {
        animateSlides(-1);
      });
      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    },
    { scope: sectionRef }
  );

  return (
    <main className="home" ref={sectionRef}>
      <div className="slides__wrapper">
        <div className="slides__inner__wrapper" ref={slideContainerRef}>
          {imagedata.map((item, index) => (
            <div
              key={index}
              className="slide__item"
              ref={slidesRef.current[index]}
            >
              <figure>
                <img src={item.image} alt="image" loading="lazy" />
              </figure>

              <div className="text__wrapper">
                <p>{item.text}</p>

                <PrimaryButton>{item["button-text"]}</PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slide__navigation">
        <button type="button" className="previous__btn">
          <MdKeyboardArrowLeft />
        </button>
        <button type="button" className="next__btn">
          <MdKeyboardArrowRight />
        </button>
      </div>
    </main>
  );
}
