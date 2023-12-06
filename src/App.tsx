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
      <section className="relative w-full flex md:col-span-2">
        <div className="w-2 h-full bg-dark_orange absolute -left-4" />
        <div>
          <h1>
            Hello,
            <br />
            I am
            <br />
            <span className="text-dark_orange">Ricky</span>
          </h1>
          <h2 className="pl-1 md:pl-3 mt-2 text-darker_black">Front-end</h2>
          <h2 className="pl-1 md:pl-3 text-darker_black">Developer</h2>
        </div>
      </section>
      <section className="w-full flex flex-col gap-4 md:gap-10 justify-start relative">
        <h2 className="text-dark_orange">About Me</h2>
        <p className="md:w-5/6">
          I thrive on the satisfaction of creating solutions that users navigate
          effortlessly and genuinely enjoy using. Whether I'm creating a new
          feature or optimizing existing functionality, simplicity is at the
          core of my work.
        </p>
      </section>
      <section className="min-h w-full flex flex-col gap-4 md:gap-10 justify-start md:w-10/12 relative">
        <h2 className="text-dark_orange">My Toolkit</h2>
        <ul className="flex flex-row flex-wrap w-full gap-x-6 gap-y-4">
          {skills.map((skill) => (
            <li key={`skill-${skill.name}`}>
              <h6 className="flex flex-row items-center gap-2 text-almost_black">
                <span className="text-orange">{skill.icon}</span>
                {skill.name}
              </h6>
            </li>
          ))}
        </ul>
      </section>
      <section className="md:col-span-2 w-full flex flex-col gap-4 md:gap-10">
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
      </section>
      <section className="md:col-span-2 w-full flex flex-col">
        <h2 className="text-dark_orange">Contact</h2>
      </section>
    </main>
  );
}

export default App;
