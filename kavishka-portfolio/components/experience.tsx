"use client"

import { useEffect, useState } from "react"
import { Briefcase, GraduationCap, Award, Target, Lightbulb, Users } from "lucide-react"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("experience")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Development Process */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                My Development <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A structured approach to deliver quality solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "Understanding requirements and goals",
                  icon: Target,
                },
                {
                  number: "02",
                  title: "Planning",
                  description: "Creating detailed project timeline and structure",
                  icon: Lightbulb,
                },
                {
                  number: "03",
                  title: "Development",
                  description: "Building your solution with modern technologies",
                  icon: Award,
                },
                {
                  number: "04",
                  title: "Delivery",
                  description: "Testing, deployment and ongoing support",
                  icon: Users,
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className={`text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                My <span className="text-orange-500">Experience</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">Professional journey and educational background</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Work Experience */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-blue-500 text-sm font-medium">Completed Internship Program</span>
                    <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                    <a href="https://enkiveda.com/" className="text-orange-500 font-semibold">ENKIVEDA – Dubai</a>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Successfully completed a comprehensive internship program at ENKIVEDA, a Dubai-based software company.
                  Gained valuable hands-on experience by working on real-world projects and collaborating with
                  experienced developers.
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key contributions:</h4>
                  <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
                    <li>
                      Worked on the TUBEWASH Car Wash Website, contributing to both front-end and back-end development
                    </li>
                    <li>Utilized C# .NET, Angular, and SQL to build and maintain scalable web applications</li>
                    <li>Gained exposure to Azure Function Apps for implementing serverless backend logic</li>
                    <li>
                      Strengthened understanding of modern development practices and software engineering principles
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["C# .NET", "Angular", "SQL", "Azure Functions", "Full-Stack Development"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>

              {/* Education */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <span className="text-purple-500 text-sm font-medium">4th Year Undergraduate</span>
                    <h3 className="text-xl font-bold text-white">
                      Bachelor of Science Honours in Information Technology
                    </h3>
                    <p className="text-orange-500 font-semibold">Sri Lanka Institute of Information Technology</p>
                    <p className="text-gray-300 text-sm mt-2">Specialized in Software Engineering</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Pursuing a comprehensive degree in Information Technology with specialized focus on Software
                  Engineering. Gaining expertise in modern development practices, system design, software architecture,
                  and emerging technologies. Maintaining strong academic performance while building practical experience
                  through hands-on projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "System Design",
                    "Database Management",
                    "Web Technologies",
                    "Mobile Development",
                    "Software Architecture",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Key <span className="text-orange-500">Achievements</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Milestones and accomplishments in my development journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "10+",
                  title: "Full-Stack Development",
                  description: "Projects completed using modern web and mobile technologies",
                  icon: "🚀",
                },
                {
                  number: "12+",
                  title: "Technology Proficiency",
                  description: "Programming languages and frameworks mastered including Azure cloud services",
                  icon: "⚡",
                },
                {
                  number: "6+ months",
                  title: "International Experience",
                  description: "professional development experience in Dubai",
                  icon: "🌍",
                },
              ].map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`bg-gray-900 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500/50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Philosophy */}
          <div className="mt-20 bg-gray-900 p-12 rounded-xl border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Professional Philosophy</h3>
              <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I believe in continuous learning and staying updated with emerging technologies. My international
                experience at ENKIVEDA in Dubai has strengthened my approach of combining technical expertise with
                creative problem-solving to deliver solutions that not only meet requirements but exceed expectations.
                I'm passionate about clean code, collaborative development, and building meaningful digital experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <h4 className="text-orange-500 font-bold text-lg mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, readable, and efficient code</p>
              </div>
              <div className="text-center">
                <h4 className="text-orange-500 font-bold text-lg mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">
                  Working effectively in international teams and agile environments
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-orange-500 font-bold text-lg mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm">Exploring cloud technologies and modern development solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
