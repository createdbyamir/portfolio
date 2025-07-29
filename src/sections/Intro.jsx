import FadeInSection from "../components/FadeInSection";

function Intro() {
  return (
    <FadeInSection
      id="about"
      className="intro mx-auto max-w-[700px] px-4 py-32 text-muted"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-5 items-center mb-8">
        <div className="image h-[120px] w-[120px] bg-background rounded-full overflow-hidden">
          <img
            src="/favicon.png"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-2xl font-semibold text-background">Amir</p>
          <p className="text-xl text-muted">Web developer</p>
        </div>
      </div>

      <div className="introtext leading-relaxed">
        <p>
          Hi, I’m Amir - a front-end developer passionate about crafting clean, responsive, and user-friendly interfaces. I enjoy turning complex ideas into elegant, accessible web experiences using modern tools like React, Tailwind, and Sass.
        </p>
      </div>
    </FadeInSection>
  );
}

export default Intro;
