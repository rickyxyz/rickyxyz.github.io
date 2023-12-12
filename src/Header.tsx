import { useEffect, useState } from "react";

const links = [
  {
    text: "home",
    href: "#home",
    className: "w-18",
  },
  {
    text: "about",
    href: "#about",
    className: "w-18",
  },
  {
    text: "projects",
    href: "#project",
    className: "w-24",
  },
  {
    text: "contact",
    href: "#contact",
    className: "w-24",
  },
];

function Header() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarIsOpen ? "hidden" : "auto";
  }, [sidebarIsOpen]);

  const burgerIcon = (
    <div className="flex items-center flex-col">
      <div className="w-6 h-0.5 bg-current"></div>
      <div className="w-6 h-0.5 bg-current my-1"></div>
      <div className="w-6 h-0.5 bg-current"></div>
    </div>
  );

  const xIcon = (
    <div>
      <div className="inline-block w-6 h-0.5 bg-current transform rotate-45 translate-x-6"></div>
      <div className="inline-block w-6 h-0.5 bg-current transform -rotate-45"></div>
    </div>
  );

  const sideBar = (
    <div className="absolute top-0 right-0 w-screen h-screen bg-[#2e2f3199] flex justify-end">
      <nav className="h-full w-4/6 bg-almost_white p-4 flex flex-col gap-8">
        <button className="self-end" onClick={() => setSidebarIsOpen(false)}>
          {xIcon}
        </button>
        <ol className="flex flex-col gap-6 p-4">
          {links.map((link) => (
            <li className="capitalize" key={`side-${link.href}`}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );

  return (
    <header className="p-2 flex flex-row justify-between items-center sticky top-0 w-full bg-almost_white md:py-1 md:p-8 pr-4 md:pr-12 z-50 shadow-sm">
      <span className="logo-text">rickyxyz</span>
      <nav className="hidden md:block">
        <ol className="flex flex-row gap-8">
          {links.map((link) => (
            <li
              className={`capitalize ${link.className}`}
              key={`side-${link.href}`}
            >
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ol>
      </nav>
      {sidebarIsOpen && sideBar}
      <button
        className="block md:hidden"
        onClick={() => setSidebarIsOpen(true)}
      >
        {burgerIcon}
      </button>
    </header>
  );
}

export default Header;
