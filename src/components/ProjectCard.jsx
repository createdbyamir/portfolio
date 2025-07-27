function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white dark:bg-background border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      <p className="text-sm mt-1 text-muted">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3 text-xs">
        {tech.map((item) => (
          <span key={`${title}-${item}`} className="bg-accent text-white px-2 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
