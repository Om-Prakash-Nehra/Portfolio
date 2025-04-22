const AboutMe = () => {
    return (
      <section className="relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto mt-16 backdrop-blur-lg border border-white/10">
        <h2 className="text-4xl font-bold mb-4 text-center text-blue-400">About Me</h2>
        
        <p className="text-lg leading-relaxed text-slate-300 mb-8 text-center">
          Hey there! I’m <span className="text-blue-400 font-semibold">Om Prakash Nehra</span> — a
          <span className="text-yellow-300"> Full Stack Web Developer</span> and a
          <span className="text-pink-400"> B.Tech CSE student</span> at LPU. I love bringing ideas to life with code,
          blending creativity with clean development using tools like <span className="text-green-300">React, Node.js, PHP</span>,
          and more.
        </p>
  
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
          <div className="bg-slate-800 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-1">Matriculation</h3>
            <p className="text-sm text-slate-400">SMP International High School, Hyderabad</p>
            <p className="text-sm text-slate-400">GPA: 9.2</p>
            <p className="text-sm text-slate-400">2016 – 2019</p>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-1">Intermediate</h3>
            <p className="text-sm text-slate-400">Sri Abhida Institute, Hyderabad</p>
            <p className="text-sm text-slate-400">Percentage: 85.8%</p>
            <p className="text-sm text-slate-400">2019 – 2021</p>
          </div>
  
          <div className="bg-slate-800 rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-1">B.Tech CSE</h3>
            <p className="text-sm text-slate-400">Lovely Professional University, Punjab</p>
            <p className="text-sm text-slate-400">CGPA: 7.12</p>
            <p className="text-sm text-slate-400">2022 – Present</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  