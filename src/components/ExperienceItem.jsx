function ExperienceItem({ date, title, description, tech }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-x-6 gap-y-2">
      <div className="text-sm text-muted sm:w-28">{date}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-1 text-muted">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {tech.map((item) => (
            <span key={`${title}-${item}`} className="bg-accent text-white px-2 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
