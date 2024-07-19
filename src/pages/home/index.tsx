import { useRef, createRef } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import imagedata from "@/lib/data.json";
import "./home.scss";

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
      // const slides =
      //   slideContainerRef?.current.querySelectorAll(".slide__item");
      const slideDelay = 5;
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
      // const animation = gsap
      //   .timeline()
      //   .to(slides, {
      //     xPercent: "+=" + numSlides * 100,
      //     duration: 1,
      //     ease: "none",
      //     paused: true,
      //     repeat: -1,
      //     modifiers: {
      //       xPercent: wrapX,
      //     },
      //   })

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
        slideAnimation = gsap
          .timeline()
          .to(proxy, {
            x: x,
            duration: slideDuration,
            onUpdate: updateProgress,
          })
          .from(".slide-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.in",
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
                <img src={item.image} alt="image" />
              </figure>

              <div className="text__wrapper">
                <p>{item.text}</p>

                <button type="button" className="hero__cta">
                  {item["button-text"]} <IoArrowForwardCircleOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="text__wrapper">
        <h3>Unlocking Potential, Driving Growth</h3>
        <h2>Powering Progress with Indigenous Excellence</h2>
        <p>
          At <span>Mardent Energy</span>, we are committed to harnessing our
          rich heritage and unparalleled expertise to deliver innovative
          upstream oil and gas solutions.
        </p>
      </div> */}
    </main>
  );
}
