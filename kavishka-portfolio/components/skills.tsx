"use client"

import { useEffect, useState } from "react"
import { Code, Database, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    bgColor: "bg-purple-500",
    skills: ["React", "TypeScript", "React Native", "Bootstrap", "Angular"],
  },
  {
    title: "Backend",
    icon: Database,
    bgColor: "bg-green-500",
    skills: ["Node.js", "Express.js", "Python", "C# .NET", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    bgColor: "bg-orange-500",
    skills: ["MongoDB", "Firebase", "SQL", "AWS", "Docker"],
  },
  {
    title: "Tools",
    icon: Wrench,
    bgColor: "bg-orange-500",
    skills: ["GitHub", "VS Code", "Visual Studio", "Figma", "Canva"],
  },
]

const progressSkills = {
  "Programming Languages": [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "C#", level: 80 },
    { name: "Java", level: 75 },
  ],
  "Frameworks & Libraries": [
    { name: "React/React Native", level: 90 },
    { name: "Node.js/Express", level: 85 },
    { name: "Angular", level: 70 },
    { name: "Spring Boot", level: 75 },
  ],
  "Other Skills": [
    { name: "UI/UX Design", level: 80 },
    { name: "Database Design", level: 85 },
    { name: "API Development", level: 90 },
    { name: "Cloud Deployment", level: 75 },
  ],
}

export function Skills() {
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

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-orange-500">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`bg-gray-900 p-8 rounded-xl border border-gray-700 text-center hover:border-orange-500/50 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-gray-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bars Section */}
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(progressSkills).map(([categoryName, skills]) => (
              <div key={categoryName}>
                <h3 className="text-xl font-bold text-white mb-8">{categoryName}</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-orange-500 text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${500 + index * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
