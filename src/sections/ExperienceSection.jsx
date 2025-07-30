import ExperienceItem from "../components/ExperienceItem";
import FadeInSection from "../components/FadeInSection";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";


const experiences = [
  {
    id: "cms-support-role",
    date: "2021 – Present",
    title: "Web Developer ⸱ Beachsore Design",
    description:
      "Worked on client sites in a CMS, handling HTML emails, domains, and design tweaks.",
    tech: [
      "JavaScript",
      "CSS",
      "HTML",
      "CMS",
      "MySQL",
      "DNS",
      "Domains",
      "Newsletters",
    ],
    icon: faCalendar,
  },
{
  id: "freelance-web-dev",
  date: "2020 – 2021",
  title: "Web Developer ⸱ Freelance",
  description: "Placeholder text – final role description coming soon.",
  tech: [
    "JavaScript",
    "CSS",
    "HTML"
  ],
  icon: faCalendar,
}
];


function ExperienceSection() {
  return (
    <FadeInSection
      id="experience"
      className="scroll-mt-24 max-w-[700px] mx-auto text-muted px-4 py-20"
    >
      <h2 className="text-2xl font-lemon text-accent mb-6">Experience</h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            description={exp.description}
            tech={exp.tech}
            icon={exp.icon}
          />
        ))}
      </div>
    </FadeInSection>
  );
}

export default ExperienceSection;
