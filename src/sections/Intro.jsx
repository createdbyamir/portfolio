
function Intro() {
  return (
    <div className="intro mx-auto max-w-[700px] px-4 py-12 text-muted" id="intro">
        <div className="flex gap-5 items-center mb-8">
            <div className="image h-[80px] w-[80px] bg-background rounded-full">
                <img src="/favicon.png" alt="Profile" className="h-full w-full rounded-full object-cover" />
            </div>
            <div>
                <p>Amir</p>
                <p>Lorem Ipsum is simply dummy text </p>
            </div>
        </div>
        <div className="introtext">
            <p>Hi, I’m Amir — a front-end developer passionate about crafting clean, responsive, and user-friendly interfaces. I enjoy turning complex ideas into elegant, accessible web experiences using modern tools like React, Tailwind, and Sass.</p>
        </div>
    </div>
  );



}
export default Intro;