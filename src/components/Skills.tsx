
export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "TypeScript", "C", "Python"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML", "CSS", "Material-UI", "Bootstrap"]
    },
    {
      title: "Backend Development",
      skills: ["Spring Boot", "JWT Authentication", "RESTful APIs"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Postman", "Figma", "Canva", "ATMEL Studio"]
    },
    {
      title: "Soft Skills",
      skills: ["Project Management", "Leadership", "Communication", "Teamwork", "Risk Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-400/20 text-blue-300 rounded-full text-sm hover:bg-blue-400/30 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
