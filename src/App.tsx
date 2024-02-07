import {
  SiReact,
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiLinkedin,
  SiGithub,
  SiFirebase,
  SiFigma,
  SiVuedotjs,
  SiChartdotjs,
  SiVitest,
  SiPlaywright,
} from "react-icons/si";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import FadeInSection from "./FadeInSection";
import { useState } from "react";
import rideRideLandingPage from "/landing.webp";
import riderideCatalog from "/bikecatalog.webp";
import riderideForm from "/bookbike.webp";
import riderideCheckout from "/checkout.webp";
import riderideSummary from "/summary.webp";
import riderideLang from "/lang.webp";
import knn from "/knn.webp";
import lr from "/lr.webp";
import empty from "/empty.webp";
import browsepage from "/browsepage.webp";
import circlepage from "/circlepage.webp";
import icecreampost from "/icecreampost.webp";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React.js",
    icon: <SiReact />,
  },
  {
    name: "Vue.Js",
    icon: <SiVuedotjs />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "SCSS",
    icon: <SiSass />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Chart.Js",
    icon: <SiChartdotjs />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
];

const rideRideTech = [
  {
    name: "React.js",
    icon: <SiReact />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
];

const mlvTech = [
  {
    name: "Vue.Js",
    icon: <SiVuedotjs />,
  },
  {
    name: "Chart.Js",
    icon: <SiChartdotjs />,
  },
];

const ccTech = [
  {
    name: "React.js",
    icon: <SiReact />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
  {
    name: "Vitest",
    icon: <SiVitest />,
  },
  {
    name: "Playwright",
    icon: <SiPlaywright />,
  },
];

const carouselContent1 = [
  { image: rideRideLandingPage, text: "homepage" },
  { image: riderideCatalog, text: "bike catalog" },
  { image: riderideForm, text: "booking form" },
  { image: riderideCheckout, text: "checkout page" },
  { image: riderideSummary, text: "checkout summary" },
  { image: riderideLang, text: "multi-language support" },
];

const carouselContent2 = [
  { image: knn, text: "K-Nearest Neighbour" },
  { image: lr, text: "linear regression" },
  { image: empty, text: "empty form" },
];

const carouselContent3 = [
  { image: browsepage, text: "browse circles" },
  { image: circlepage, text: "circle page" },
  { image: icecreampost, text: "post page" },
];

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeImage2, setActiveImage2] = useState(0);
  const [activeImage3, setActiveImage3] = useState(0);

  return (
    <main
      className="w-full flex flex-col gap-y-24 gap-x-10 px-8 md:px-20 md:pt-16 md:gap-y-72 max-w-7xl"
      id="home"
    >
      <section className="relative w-full flex md:col-span-2">
        <div className="w-2 h-full bg-dark_orange absolute -left-4" />
        <div className="animate-expand">
          <h1 className="whitespace-nowrap">
            Hello,
            <br />
            I am
            <br />
            <span className="text-dark_orange">Ricky</span>
          </h1>
          <h2 className="pl-1 md:pl-3 mt-2 text-darker_black whitespace-nowrap">
            Web Developer
          </h2>
        </div>
      </section>
      <FadeInSection
        className="w-full flex flex-col gap-8 justify-start relative"
        id="about"
      >
        <h2 className="text-dark_orange relative before:absolute before:top-1 before:-left-4 before:h-full before:w-2 before:bg-dark_orange">
          About Me
        </h2>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-4">
            <h4>My Principles</h4>
            <p className="md:w-5/6 text-justify">
              Whether I&apos;m creating a new feature or optimizing existing
              functionality, simplicity is at the core of my work. I try create
              systems to prevent myself from making error. I also prioritize an
              exceptional developer experience in my work along with great user
              experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>My Toolkit</h4>
            <ul className="flex flex-row flex-wrap w-full gap-1">
              {skills.map((skill) => (
                <li
                  key={`skill-${skill.name}`}
                  className="border-[1px] border-almost_black rounded-sm px-2"
                >
                  <p className="flex flex-row items-center gap-1 text-almost_black">
                    <span className="text-darker_black">{skill.icon}</span>
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection
        className="md:col-span-2 w-full flex flex-col gap-8"
        id="project"
      >
        <h2 className="text-dark_orange relative before:absolute before:top-1 before:-left-4 before:h-full before:w-2 before:bg-dark_orange mb-10">
          Projects
        </h2>
        <div className="flex flex-col gap-3 gap-y-24 justify-between">
          <article className="flex flex-col-reverse md:grid md:grid-cols-[4fr,6fr] items-center border-t-2 border-gray-100">
            <div className="pr-10">
              <h3>Circle-Circle</h3>
              <p>
                A Reddit clone, I made to practice testing and writing better
                React component. The site is equipped with search feature, image
                upload, and recursive comment.
              </p>
              <ul className="flex flex-col mt-8">
                <li>
                  <a
                    href="https://circle-circle.vercel.app"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={14} />
                    <p>Live demo</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rickyxyz/circle-circle"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub size={14} />
                    <p>Source code</p>
                  </a>
                </li>
              </ul>
              <hr className="my-6" />
              <p className="font-semibold mb-2">Built with:</p>
              <ul className="flex flex-row flex-wrap w-full gap-x-1 gap-y-1">
                {ccTech.map((skill) => (
                  <li key={`skill-${skill.name}`}>
                    <p className="flex flex-row items-center gap-1 text-almost_black border-[1px] border-almost_black rounded-sm px-2">
                      <span className="text-darker_black">{skill.icon}</span>
                      {skill.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage3((prev) => (3 + prev - 1) % 3)}
              >
                <VscTriangleLeft className="text-base md:text-3xl" />
              </button>
              <div className="flex flex-col items-center flex-1 gap-1 rounded-sm shadow-lg overflow-hidden">
                <img
                  src={carouselContent3[activeImage3].image}
                  alt={carouselContent3[activeImage3].text}
                  className={`h-48 md:h-96 w-full object-cover ${
                    activeImage3 === 0 ? "animate-scroll" : "object-top"
                  }`}
                  style={{ objectPosition: "0% 0%" }}
                />
              </div>
              <p className="text-xs capitalize text-center mt-1">
                {carouselContent3[activeImage3].text}
              </p>
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage2((prev) => (prev + 1) % 3)}
              >
                <VscTriangleRight className="text-base md:text-3xl" />
              </button>
            </div>
          </article>
          <article className="flex flex-col-reverse md:grid md:grid-cols-[4fr,6fr] items-center border-t-2 border-gray-100">
            <div className="pr-10">
              <h3>Ride-Ride</h3>
              <p>
                A demo website designed for a bicycle rental business. Equipped
                with multi-language support and connection to Firebase for data
                retrieval and form submission.
              </p>
              <ul className="flex flex-col mt-8">
                <li>
                  <a
                    href="https://ride-ride.vercel.app/"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={14} />
                    <p>Live demo</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rickyxyz/ride-ride"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub size={14} />
                    <p>Source code</p>
                  </a>
                </li>
              </ul>
              <hr className="my-6" />
              <p className="font-semibold mb-2">Built with:</p>
              <ul className="flex flex-row flex-wrap w-full gap-x-1 gap-y-1">
                {rideRideTech.map((skill) => (
                  <li key={`skill-${skill.name}`}>
                    <p className="flex flex-row items-center gap-1 text-almost_black border-[1px] border-almost_black rounded-sm px-2">
                      <span className="text-darker_black">{skill.icon}</span>
                      {skill.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage((prev) => (6 + prev - 1) % 6)}
              >
                <VscTriangleLeft className="text-base md:text-3xl" />
              </button>
              <div className="flex flex-col items-center flex-1 gap-1 rounded-sm shadow-lg overflow-hidden">
                <img
                  src={carouselContent1[activeImage].image}
                  alt={carouselContent1[activeImage].text}
                  className={`h-48 md:h-96 w-full object-cover ${
                    activeImage === 0 ? "animate-scroll" : "object-top"
                  }`}
                  style={{ objectPosition: "0% 0%" }}
                />
              </div>
              <p className="text-xs capitalize text-center mt-1">
                {carouselContent1[activeImage].text}
              </p>
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage((prev) => (prev + 1) % 6)}
              >
                <VscTriangleRight className="text-base md:text-3xl" />
              </button>
            </div>
          </article>
          <article className="flex flex-col-reverse md:grid md:grid-cols-[4fr,6fr] items-center border-t-2 border-gray-100">
            <div className="pr-10">
              <h3>ML-Visualizer</h3>
              <p>
                An old university webapp project to visualize simple machine
                learning algorithm: k-nearest neighbour and linear regression.
                User can also upload and download their own .csv files.
              </p>
              <ul className="flex flex-col mt-8">
                <li>
                  <a
                    href="https://rickyxyz.github.io/ML-Visualizer-Public"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={14} />
                    <p>Live demo</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/rickyxyz/ML-Visualizer-Public/tree/gh-pages"
                    className="underline flex flex-row items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub size={14} />
                    <p>Source code</p>
                  </a>
                </li>
              </ul>
              <hr className="my-6" />
              <p className="font-semibold mb-2">Built with:</p>
              <ul className="flex flex-row flex-wrap w-full gap-x-1 gap-y-1">
                {mlvTech.map((skill) => (
                  <li key={`skill-${skill.name}`}>
                    <p className="flex flex-row items-center gap-1 text-almost_black border-[1px] border-almost_black rounded-sm px-2">
                      <span className="text-darker_black">{skill.icon}</span>
                      {skill.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage2((prev) => (3 + prev - 1) % 3)}
              >
                <VscTriangleLeft className="text-base md:text-3xl" />
              </button>
              <div className="flex flex-col items-center flex-1 gap-1 rounded-sm shadow-lg overflow-hidden">
                <img
                  src={carouselContent2[activeImage2].image}
                  alt={carouselContent2[activeImage2].text}
                  className={`h-48 md:h-96 w-full object-cover ${
                    activeImage2 === 0 ? "animate-scroll" : "object-top"
                  }`}
                  style={{ objectPosition: "0% 0%" }}
                />
              </div>
              <p className="text-xs capitalize text-center mt-1">
                {carouselContent2[activeImage2].text}
              </p>
              <button
                className="rounded-sm absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 bg-[#f0f0f0] px-1 md:px-2 py-4 text-dark_orange hover:scale-110 duration-75 transition-transform shadow-sm"
                onClick={() => setActiveImage2((prev) => (prev + 1) % 3)}
              >
                <VscTriangleRight className="text-base md:text-3xl" />
              </button>
            </div>
          </article>
        </div>
        {/* <a className="self-end w-28 text-right">See more</a> */}
      </FadeInSection>
      <FadeInSection
        className="pb-32 md:col-span-2 w-full flex flex-col gap-8"
        id="contact"
      >
        <h2 className="text-dark_orange relative before:absolute before:top-1 before:-left-4 before:h-full before:w-2 before:bg-dark_orange">
          Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-start gap-y-6">
          <div>
            <h3 className="text-almost_black mb-1">Email</h3>
            <a
              href="mailto:moving.ricky@gmail.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="flex flex-row items-center gap-2 text-almost_black hover:text-dark_orange">
                <MdEmail />
                moving.ricky@gmail.com
              </h5>
            </a>
          </div>
          <div>
            <h3 className="mb-1">Find me on</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <a
                  href="https://www.linkedin.com/in/rickyaryanto/"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="flex flex-row items-center gap-2 text-almost_black hover:text-dark_orange">
                    <SiLinkedin />
                    LinkedIn
                  </h5>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rickyxyz"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="flex flex-row items-center gap-2 text-almost_black hover:text-dark_orange">
                    <SiGithub />
                    Github
                  </h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}

export default App;
