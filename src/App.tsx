import {
  SiReact,
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
} from "react-icons/si";

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
    <main className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-10 px-8 md:px-20 md:pt-16 md:gap-y-24 max-w-7xl">
      <div></div>
      <section className="relative w-full flex justify-start">
        <div className="w-2 h-full bg-dark_orange absolute -left-4" />
        <div>
          <h1>
            Hello,
            <br />
            I am
            <br />
            <span className="text-dark_orange">Ricky</span>
          </h1>
          <h2 className="pl-1 md:pl-3 mt-5 text-darker_black">Front-end</h2>
          <h2 className="pl-1 md:pl-3 text-darker_black">Developer</h2>
        </div>
      </section>
      <section className="min-h w-full flex flex-col gap-4 md:gap-10 justify-start md:w-10/12 relative">
        <h2 className="text-dark_orange">My Toolkit</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-y-4 gap-x-12 justify-between w-full">
          {skills.map((skill) => (
            <li key={`skill-${skill.name}`}>
              <h6 className="flex flex-row items-center gap-4 text-almost_black">
                <span className="">{skill.icon}</span>
                {skill.name}
              </h6>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full flex flex-col gap-4 md:gap-10 justify-start relative">
        <h2 className="text-dark_orange">About Me</h2>
        <p className="md:w-4/6">
          I thrive on the satisfaction of creating solutions that users navigate
          effortlessly and genuinely enjoy using. Whether I'm creating a new
          feature or optimizing existing functionality, simplicity is at the
          core of my work.
        </p>
      </section>
      <section className="md:col-span-2 min-h w-full flex justify-start relative">
        <h2 className="text-dark_orange">Projects</h2>
      </section>
      <section className="md:col-span-2 min-h w-full flex justify-start relative">
        <h2 className="text-dark_orange">Contact</h2>
      </section>
    </main>
  );
}

export default App;
