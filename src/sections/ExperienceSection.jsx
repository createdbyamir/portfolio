import ExperienceItem from '../components/ExperienceItem';

const experiences = [
  {
    id: 'cms-role',
    date: '2021 – Present',
    title: 'Front-End Developer – CMS Co.',
    description: 'Built and maintained responsive UI using HTML, CSS, and JS. Helped streamline content workflows in a custom CMS.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Custom CMS'],
  },
  {
    id: 'freelance-role',
    date: '2020 – 2021',
    title: 'Freelance Developer',
    description: 'Worked with small businesses to create modern landing pages and website updates.',
    tech: ['WordPress', 'Sass', 'jQuery'],
  },
];

function ExperienceSection() {
  return (
    <section className="max-w-[700px] mx-auto px-4 py-12" id="experience">
      <h2 className="text-2xl font-lemon text-accent mb-6">Experience</h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            description={exp.description}
            tech={exp.tech}
          />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
