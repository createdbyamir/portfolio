import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceItem({ date, title, description, tech, icon }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="flex items-center text-gray-500 w-full sm:w-[200px] flex-shrink-0">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="text-muted mr-2"
            fixedWidth
          />
        )}
        <span>{date}</span>
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted mt-1 py-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-700">
          {tech.map((tag) => (
            <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
