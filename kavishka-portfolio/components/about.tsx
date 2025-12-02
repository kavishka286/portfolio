"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Code } from "lucide-react"

export function About() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know more about my journey, passion, and expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">I'm Kavishka Senavirathna</h3>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate Full-Stack Developer with over a year of hands-on experience building seamless,
                    user-centric digital solutions. My expertise spans both frontend and backend development, with a
                    keen eye for creating intuitive user interfaces and robust system architectures.
                  </p>

                  <p>
                    From crafting responsive web applications with React and TypeScript to developing scalable backend
                    services with Node.js and Python, I enjoy solving complex problems and turning ideas into reality.
                    I'm also passionate about mobile development, creating cross-platform applications that deliver
                    exceptional user experiences.
                  </p>

                  <p>
                    Currently pursuing my Bachelor's degree in Information Technology at Sri Lanka Institute of
                    Information Technology, I'm constantly learning and exploring new technologies to stay at the
                    forefront of software development.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-white">My Philosophy</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Believer in clean code, collaborative development, and continuous learning. I strive to write
                  maintainable code that not only works but stands the test of time.
                </p>
              </div>
            </div>

            {/* Right Column - Education & Experience */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Education</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm">4th Year Undergraduate</p>
                  <h5 className="text-white font-semibold text-lg">
                    Bachelor of Science Honours in Information Technology
                  </h5>
                  <p className="text-orange-500 font-medium">Sri Lanka Institute of Information Technology</p>
                  <p className="text-gray-400 text-sm mt-3">Specializing in Software Engineering</p>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <Code className="h-6 w-6 text-orange-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Professional Experience</h4>
                </div>
                <div className="space-y-2">
                  <h5 className="text-white font-semibold text-lg">Software Engineering Intern</h5>
                  <a href="https://enkiveda.com/" className="text-orange-500 font-medium">ENKIVEDA</a>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    Gained hands-on experience in full-stack development, working with modern technologies and agile
                    methodologies.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
