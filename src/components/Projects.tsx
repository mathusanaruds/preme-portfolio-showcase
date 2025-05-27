
export const Projects = () => {
  const projects = [
    {
      title: "Tomcat Server Monitoring System",
      description: "Designed and implemented profile settings, search filters, sorting, authentication, and role-based access control for the admin panel, enhancing system security and usability.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Bootstrap", "Java"],
      features: [
        "JWT token-based authentication",
        "Role-based access control",
        "User-friendly monitoring interface",
        "Efficient server performance management"
      ],
      result: "Grade A",
      status: "Completed"
    },
    {
      title: "Diabetic Retinopathy Detection and Stage Prediction",
      description: "Developed an AI-powered system integrating CNN-based image analysis and an NLP-driven chatbot for early detection, stage classification, and personalized treatment recommendations.",
      technologies: ["Python", "TensorFlow", "React.js", "CNN", "Kaggle Notebook"],
      features: [
        "CNN-based image analysis",
        "NLP-driven chatbot",
        "Early detection system",
        "Automated diagnosis through telemedicine"
      ],
      result: "In Development",
      status: "Ongoing"
    },
    {
      title: "Bird Caretaker System",
      description: "Developed an automatic aviculture guidance and information system by leveraging technology. Provides automated assistance in bird care, health, and maintenance.",
      technologies: ["ATmega32A", "C", "ATMEL Studio"],
      features: [
        "Automated bird care guidance",
        "Health monitoring system",
        "Maintenance assistance",
        "Technology-driven aviculture support"
      ],
      result: "Successfully Implemented",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Ongoing' 
                    ? 'bg-yellow-400/20 text-yellow-300' 
                    : 'bg-green-400/20 text-green-300'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-blue-400 font-medium mb-2">Key Features:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-blue-400 font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-600">
                <span className="text-green-400 font-medium">Result: {project.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
