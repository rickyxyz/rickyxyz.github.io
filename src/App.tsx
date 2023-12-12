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
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import FadeInSection from "./FadeInSection";

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
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
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
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
  },
];

function App() {
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
            Front-end <br />
            React Developer
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          <div className="flex flex-col gap-4">
            <h4>My Principles</h4>
            <p className="md:w-5/6">
              Whether I&apos;m creating a new feature or optimizing existing
              functionality, simplicity is at the core of my work. I also employ
              test-driven development in my work, and create systems to prevent
              error. I also prioritize an exceptional developer experience in my
              work.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4>My Toolkit</h4>
            <ul className="flex flex-row flex-wrap w-full gap-x-3 gap-y-1 md:gap-x-6 md:gap-y-2">
              {skills.map((skill) => (
                <li key={`skill-${skill.name}`}>
                  <p className="flex flex-row items-center gap-2 text-almost_black">
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
        <h2 className="text-dark_orange relative before:absolute before:top-1 before:-left-4 before:h-full before:w-2 before:bg-dark_orange">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-6 h-96 justify-between">
          <article className="border-2 border-orange rounded-sm">
            <h3>Fruit</h3>
          </article>
          <article className="border-2 border-orange rounded-sm">
            <h3>Fruit</h3>
          </article>
          <article className="border-2 border-orange rounded-sm">
            <h3>Fruit</h3>
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
