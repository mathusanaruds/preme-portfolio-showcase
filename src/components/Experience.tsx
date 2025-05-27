
export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>
            <div className="relative bg-slate-800/50 p-8 rounded-lg border border-slate-700 ml-16">
              <div className="absolute -left-12 top-8 w-8 h-8 bg-blue-400 rounded-full border-4 border-slate-900"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Software Engineer Intern - Full Stack</h3>
                <span className="text-blue-400 font-medium">Jan 2024 - July 2024</span>
              </div>
              <h4 className="text-xl text-gray-300 mb-6">Techorin (Pvt.) Ltd</h4>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Developed and enhanced features for the Project Contractor Task module using React.js and Material-UI
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Designed and implemented reusable components and responsive layouts for seamless user experiences
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Collaborated with the design team to align UI/UX with project standards
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Conducted testing, debugging, and presented demos to gather feedback and refine project features
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
