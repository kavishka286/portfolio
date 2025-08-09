"use client"

import { useEffect, useState } from "react"
import { Github, Leaf, Smartphone, Globe, Heart, CreditCard, Utensils, Database, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Taxi App",
    category: "Mobile App",
    description:
      "Full-featured taxi booking application with real-time tracking, driver matching, and payment integration.",
    image: "/images/taxi-app-real.png",
    icon: Smartphone,
    iconBg: "bg-yellow-500",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/DinuthRashmika/Taxi_K",
  },
  {
    title: "Online Food Ordering System",
    category: "Web Application",
    description:
      "Complete food delivery platform with restaurant management, order tracking, and secure payment processing.",
    image: "/images/food-ordering-real.png",
    icon: Utensils,
    iconBg: "bg-orange-600",
    tags: ["React", "Spring Boot", "MongoDB"],
    githubUrl: "https://github.com/DinuthRashmika/Fast-Food",
  },
  {
    title: "Eco Graw",
    category: "Mobile App",
    description:
      "Sustainable agriculture mobile application promoting eco-friendly farming practices with real-time monitoring.",
    image: "/images/eco-graw-real.png",
    icon: Leaf,
    iconBg: "bg-green-500",
    tags: ["React Native", "Firebase"],
    githubUrl: "https://github.com/kavishka286/EcoApp",
  },
  {
    title: "Simple Game",
    category: "Mobile Game",
    description: "Interactive mobile game with engaging gameplay mechanics and smooth user experience design.",
    image: "/images/simple-game-real.png",
    icon: Smartphone,
    iconBg: "bg-purple-500",
    tags: ["Kotlin"],
    githubUrl: "https://github.com/kavishka286/Game-Mad",
  },
  {
    title: "Fabric Management System",
    category: "Web Application",
    description: "Comprehensive system for managing fabric inventory, orders, and textile business operations.",
    image: "/images/fabric-management-real.png",
    icon: Globe,
    iconBg: "bg-blue-500",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/kavishka286/Fammy-",
  },
  {
    title: "Medicare System",
    category: "Web Application",
    description: "Healthcare management platform for patient records, appointments, and medical data management.",
    image: "/images/medicare-system-real.png",
    icon: Heart,
    iconBg: "bg-red-500",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/kavishka286/Medicare",
  },
  {
    title: "Eco Pro",
    category: "Website",
    description: "Modern agricultural website promoting sustainable farming practices and eco-friendly solutions.",
    image: "/images/eco-pro-real.png",
    icon: Leaf,
    iconBg: "bg-green-600",
    tags: ["React", "MongoDB", "Express.js", "Node.js"],
    githubUrl: "https://github.com/Dushxn/EcoPro",
  },
  {
    title: "Finance Management System",
    category: "Backend System",
    description:
      "Robust backend API system for financial data management, transaction processing, and account operations with secure authentication and data validation.",
    image: "/images/finance-management-real.png",
    icon: Database,
    iconBg: "bg-emerald-500",
    tags: ["Node.js", "Express.js", "REST API", "Authentication"],
    githubUrl: "https://github.com/kavishka286/Finance-management-system",
  },
  {
    title: "Online Banking System",
    category: "Web Application",
    description: "Secure banking platform with transaction management, account services, and financial operations.",
    image: "/images/banking-system-real.png",
    icon: CreditCard,
    iconBg: "bg-indigo-500",
    tags: ["Java", "SQL"],
    githubUrl: "https://github.com/kavishka286/Online_banking_system",
  },
  {
    title: "Fire Detection System",
    category: "Safety System",
    description:
      "Advanced fire detection and monitoring system using OSGI framework for real-time safety alerts and emergency response management.",
    image: "/images/fire-detection-system.png",
    icon: AlertTriangle,
    iconBg: "bg-red-600",
    tags: ["OSGI", "Java"],
  },
]

export function Projects() {
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

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and development projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 ${project.iconBg} rounded-lg`}>
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-orange-500 text-sm font-medium">{project.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                    onClick={() => window.open(project.githubUrl || "https://github.com/kavishka286", "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Want to see more */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">Want to see more of my work?</p>
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
              onClick={() => window.open("https://github.com/kavishka286", "_blank")}
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
