import { SiGithub, SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-almost_black w-full flex flex-col items-center p-10">
      <div className="max-w-6xl w-full text-almost_white flex justify-between">
        <span className="text-almost_white">
          <p>Designed and built by Ricky A.</p>
        </span>
        <ul className="flex flex-row gap-4 items-center">
          <li>
            <a href="#">
              <SiGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <SiLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
