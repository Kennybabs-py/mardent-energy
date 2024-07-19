import { useState, useRef, createRef } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import imagedata from "@/lib/data.json";

import MardentLogo from "@/assets/mardent-energy.png";
import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);

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
      const slideDelay = 6;
      const slideDuration = 3;
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
      let slideAnimation = gsap.to({}, {});
      let slideWidth = 0;
      let wrapWidth = 0;

      function animateSlides(direction: number) {
        timer.restart(true);
        slideAnimation.kill();
        const x = Number(
          snapX(Number(gsap.getProperty(proxy, "x"))) + direction * slideWidth
        );
        slideAnimation = gsap.to(proxy, {
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
      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    },
    { scope: sectionRef }
  );

  return (
    <main>
      <header>
        <Link to="/">
          <figure>
            <img src={MardentLogo} alt="mardent energy" />
          </figure>
        </Link>

        <nav className="desktop__nav">
          <ul>
            <li>
              <a href="#" rel="noopener noreferrer">
                Our Company
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Mission
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="mobile__nav__button"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>

        <nav className={`mobile__nav ${open ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" rel="noopener noreferrer">
                Our Company
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Mission
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                Careers
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li>
              <a href="#footer" rel="noopener noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero" ref={sectionRef}>
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
              </div>
            ))}
          </div>
        </div>
        {/* <h3>Unlocking Potential, Driving Growth</h3>
        <h2>Powering Progress with Indigenous Excellence</h2>
        <p>
          At <span>Mardent Energy</span>, we are committed to harnessing our
          rich heritage and unparalleled expertise to deliver innovative
          upstream oil and gas solutions.
        </p> */}

        <p>
          <span>Mardent Energy</span>
        </p>
      </section>

      <footer id="footer">
        <ul>
          <li>
            <a
              href="mailto:info@mardentenergy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMailOutline /> Mail Us
            </a>
          </li>
          <li>
            <a
              href="tel:+234 706 7366 155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt />
              Call: +234 706 7366 155
            </a>
          </li>
        </ul>

        <p>
          Visit us: 155 House 6 Otumba Bimbo Ashiru Close, off 13 Olawale Dawodu
          Street, Ikoyi Lagos.
        </p>
      </footer>
    </main>
  );
}
