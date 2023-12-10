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
    <main className="w-full flex flex-col gap-y-12 gap-x-10 px-8 md:px-20 md:pt-16 md:gap-y-72 max-w-7xl">
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
            Developer
          </h2>
        </div>
      </section>
      <FadeInSection className="w-full flex flex-col gap-4 md:gap-8 justify-start relative">
        <h2 className="text-dark_orange">About Me</h2>
        <p className="md:w-5/6">
          I thrive on the satisfaction of creating solutions that users navigate
          effortlessly and genuinely enjoy using. Whether I'm creating a new
          feature or optimizing existing functionality, simplicity is at the
          core of my work.
        </p>
      </FadeInSection>
      <FadeInSection className="min-h w-full flex flex-col gap-4 md:gap-8 justify-start md:w-10/12 relative">
        <h2 className="text-dark_orange">My Toolkit</h2>
        <ul className="flex flex-row flex-wrap w-full gap-x-6 gap-y-4">
          {skills.map((skill) => (
            <li key={`skill-${skill.name}`}>
              <h6 className="flex flex-row items-center gap-2 text-almost_black">
                <span className="text-darker_black">{skill.icon}</span>
                {skill.name}
              </h6>
            </li>
          ))}
        </ul>
      </FadeInSection>
      <FadeInSection className="md:col-span-2 w-full flex flex-col gap-4 md:gap-8">
        <h2 className="text-dark_orange">Projects</h2>
        <div className="grid grid-cols-3 gap-3 h-96 justify-between">
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
        <a className="self-end w-28">See more</a>
      </FadeInSection>
      <FadeInSection className="pb-32 md:col-span-2 w-full flex flex-col gap-4 md:gap-8">
        <h2 className="text-dark_orange">Contact</h2>
        <div className="grid grid-cols-2 justify-between items-start">
          <div>
            <h3 className="text-almost_black mb-1">Email</h3>
            <h5 className="flex flex-row items-center gap-2 text-almost_black">
              <MdEmail />
              moving.ricky@gmail.com
            </h5>
          </div>
          <div>
            <h3 className="mb-1">Find me on</h3>
            <ul className="flex flex-col gap-y-1">
              <li>
                <h5 className="flex flex-row items-center gap-2 text-almost_black">
                  <SiLinkedin />
                  LinkedIn
                </h5>
              </li>
              <li>
                <h5 className="flex flex-row items-center gap-2 text-almost_black">
                  <SiGithub />
                  Github
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </FadeInSection>
    </main>
  );
}

export default App;
