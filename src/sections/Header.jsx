function Header() {
  return (
    <header className="fixed top-[15px] left-1/2 -translate-x-1/2 w-full max-w-[700px] bg-background rounded-full p-2.5 px-5 shadow-lg text-foreground">
      <nav>
        <ul className="flex justify-between items-center text-sm font-poppins text-base">
          <li><a href="#about" className="hover:text-accent transition">About</a></li>
          <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
