import { SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-almost_black w-full flex flex-col items-center p-10">
      <div className="max-w-6xl w-full text-almost_white flex md:flex-row flex-col gap-y-4 justify-between">
        <span className="text-almost_white">
          <p>Designed and built by Ricky A.</p>
        </span>
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <a
              href="https://www.linkedin.com/in/rickyaryanto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rickyxyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
