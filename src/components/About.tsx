
export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Passionate Software Engineer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a responsible and dedicated undergraduate pursuing B.Sc. (Hons) in Information Technology 
              at the University of Moratuwa. With a strong passion for challenges, I constantly seek new 
              opportunities and embrace innovative ideas.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My commitment to hard work and success is driven by motivation and enthusiasm. I'm a strong 
              believer in the power of logical thinking and untiring efforts, always striving to make a 
              positive impact as a team player with excellent communication skills.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Mullaitivu, Sri Lanka</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-blue-400 font-semibold mb-2">University</h4>
                <p className="text-gray-300">University of Moratuwa</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="mb-4">
                <h5 className="text-blue-400 font-medium">B.Sc. (Hons) in Information Technology</h5>
                <p className="text-gray-300">University of Moratuwa</p>
                <p className="text-gray-400 text-sm">2021 - 2025</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Key Courses:</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Software Engineering Methods</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Enterprise Application Development</li>
                  <li>• Database Design & Management</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700">
              <h4 className="text-xl font-semibold text-white mb-4">Activities</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Member of Nature Team, University of Moratuwa</li>
                <li>• Provincial Level Badminton Player</li>
                <li>• Team Coordinator, Tamil Literary Association</li>
                <li>• Participated in Code Rush IEEE</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
