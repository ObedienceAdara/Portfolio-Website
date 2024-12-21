import React from 'react';
import { Code, Book, Terminal, Briefcase, Award, Download, Globe, Coffee } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'React Native', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'SQL', level: 70 },
    { name: 'TypeScript', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'GCP', level: 50 }
  ];

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Plex Hedge',
      period: '2024 - Present',
      description: 'Working on full-stack development using React and Node.js, and mobile development using React Native'
    },
    {
      title: 'Student Developer',
      company: 'University Projects',
      period: '2023 - Present',
      description: 'Led multiple team projects and hackathon participations'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Aerospace Engineering',
      school: 'Lagos State University',
      period: '2023 - 2028',
      gpa: '4.5/5.0'
    }
  ];

  // Skill bar component
  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate software engineer and student, dedicated to creating solutions 
            to complex problems. With a focus on web development, Deep Learning and software engineering, 
            I strive to build applications that make a difference.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Personal Info */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-purple-400" />
                Personal Info
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="text-gray-400 mb-1">Name</p>
                  <p>Obedience Adara</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Age</p>
                  <p>17</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Location</p>
                  <p>Lagos, Nigeria</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Email</p>
                  <p>obedienceadara@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-gray-300 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2 text-purple-400" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-purple-400">{edu.school}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                  <p className="text-gray-300 mt-2">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Technical Skills
              </h3>
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>

            {/* Interests */}
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-purple-400" />
                Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span>Web Development</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>AI/ML</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Book className="w-4 h-4 text-purple-400" />
                  <span>Open Source</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
