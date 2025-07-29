function Header() {
  return (
    <header className="flex justify-between items-center gap-4 fixed top-[30px] left-1/2 -translate-x-1/2 w-full max-w-[96%] md:max-w-[700px] bg-background rounded-full p-2.5 px-5 shadow-lg text-foreground backdrop-blur-md bg-opacity-70 z-50">
      <div className="fun hidden">Fun</div>
      <nav className="flex-1">
        <ul className="flex justify-center gap-6 text-base md:text-lg font-poppins">
          <li><a href="#about" className="hover:text-slate-600 transition">About</a></li>
          <li><a href="#experience" className="hover:text-slate-600 transition">Experience</a></li>
          <li><a href="#projects" className="hover:text-slate-600 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-slate-600 transition">Contact</a></li>
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
