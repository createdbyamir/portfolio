function Header() {
  return (
    <header className="flex justify-between items-center fixed top-[15px] left-1/2 -translate-x-1/2 w-full w-full max-w-[96%] md:max-w-[700px]  bg-background rounded-full p-2.5 px-5 shadow-lg text-foreground backdrop-blur-md bg-opacity-70 z-50">
      <div className="fun hidden">Fun</div>
      <nav className="max-w-[230px] mx-auto w-full">
        <ul className="flex justify-between items-center text-sm font-poppins text-base">
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>
      </nav>
      <div className="toggle hidden">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
