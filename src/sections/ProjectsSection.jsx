import ProjectCard from '../components/ProjectCard';
import FadeInSection from "../components/FadeInSection";

const projects = [
  {
    id: 'devlaunch',
    title: 'DevLaunch',
    description: 'A customizable developer dashboard built with React and Tailwind.',
    tech: ['React', 'Tailwind', 'Vite'],
    link: 'https://github.com/yourname/devlaunch',
  },
  {
    id: 'flashycards',
    title: 'FlashyCards',
    description: 'A language flashcard app using Vue and localStorage.',
    tech: ['Vue', 'Tailwind'],
    link: 'https://github.com/yourname/flashycards',
  },
  {
    id: 'minimal-blog',
    title: 'Minimal Blog',
    description: 'A personal blog starter using Vite and Markdown.',
    tech: ['Vite', 'Markdown', 'CSS Modules'],
    link: 'https://github.com/yourname/minimal-blog',
  },
];

function ProjectsSection() {
  return (
    <FadeInSection className="scroll-mt-24 max-w-[700px]  mx-auto  text-muted px-4 py-20" id="projects">
      <h2 className="text-2xl font-lemon text-accent mb-6">Projects</h2>
      <p className="text-muted">Project highlights coming soon.</p>
      <div className="flex flex-col gap-6 hidden">
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
