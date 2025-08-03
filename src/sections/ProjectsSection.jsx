import ProjectCard from '../components/ProjectCard';
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    id: 'mindshelf',
    title: 'MindShelf',
    description: 'MindShelf is a media-themed blog built with React and Tailwind CSS, where I share thoughts on movies, TV shows, and music. It features searchable posts, dynamic routing, and a minimalist design.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React Router DOM', 'JavaScript (ES6+)', 'Framer Motion', 'Git & GitHub', 'Responsive Design'],
    link: 'https://mindshelf.createdbyamir.com/',
  },
  {
    id: 'devkick',
    title: 'Devkick',
    description: 'DevKick is a frontend stack generator built with React and Tailwind CSS. It features interactive toggle-based selection for tools like React, Vite, and Tailwind, and generates a live terminal command with copy-to-clipboard functionality. Built with a minimalist design for quick developer setup.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript (ES6+)', 'Git & GitHub', 'Responsive Design', 'Framer Motion'],
    link: 'https://devkick.createdbyamir.com/',
  },
];

function ProjectsSection() {
  return (
    <FadeInSection className="scroll-mt-24 max-w-[700px]  mx-auto  text-muted px-4 py-20" id="projects">
      <h2 className="text-2xl font-lemon text-accent mb-6">Projects</h2>
      <div className="flex flex-col gap-6 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default ProjectsSection;
