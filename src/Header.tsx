function Header() {
  return (
    <header className="p-2 flex flex-row justify-between items-center sticky top-0 w-full bg-almost_white md:py-1 md:p-8 md:pr-12 z-50">
      <span className="logo-text">rickyxyz</span>
      <nav className="hidden md:block">
        <ol className="flex flex-row gap-8">
          <li className="w-18">
            <a href="#">Home</a>
          </li>
          <li className="w-24">
            <a href="#">Projects</a>
          </li>
          <li className="w-16">
            <a href="#">Tools</a>
          </li>
          <li className="w-24">
            <a href="#">Contact</a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Header;
