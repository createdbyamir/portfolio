function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-foreground border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-sm mt-1 text-muted">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3 text-xs">
        {tech.map((item) => (
          <span key={`${title}-${item}`} className="px-2 py-0.5 rounded-full bg-muted text-foreground">
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
