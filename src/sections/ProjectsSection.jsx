import ProjectCard from '../components/ProjectCard';
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    id: 'mindshelf',
    title: 'MindShelf',
    description: 'MindShelf is a media-themed blog built with React and Tailwind CSS, where I share thoughts on movies, TV shows, and music. It features searchable posts, dynamic routing, and a minimalist design.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'React Router DOM', 'JavaScript (ES6+)', 'Framer Motion', 'Git & GitHub'],
    link: 'https://mindshelf.createdbyamir.com/',
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
