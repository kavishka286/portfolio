"use client"

import { useEffect, useState } from "react"
import { Globe, Smartphone, Code, Cloud, Palette, Zap } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks like React, Angular, and Node.js",
    icon: Globe,
    iconBg: "bg-blue-500",
    features: ["Responsive Design", "Modern Frameworks", "SEO Friendly", "Cross-Browser Compatible"],
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native for iOS and Android platforms",
    icon: Smartphone,
    iconBg: "bg-purple-500",
    features: ["Native Performance", "Cross-Platform", "App Store Ready", "Offline Capabilities"],
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development from database design to user interface implementation",
    icon: Code,
    iconBg: "bg-green-500",
    features: ["Database Design", "API Development", "Authentication", "Real-time Features"],
  },
  {
    title: "API Integration & Cloud",
    description: "Third-party API integrations and cloud deployment solutions",
    icon: Cloud,
    iconBg: "bg-indigo-500",
    features: ["REST APIs", "Cloud Deployment", "Third-party Integrations", "Scalable Architecture"],
  },
  {
    title: "UI/UX Design",
    description: "User interface design and prototyping using Figma and modern design principles",
    icon: Palette,
    iconBg: "bg-pink-500",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    title: "Technical Consulting",
    description: "Technology advice and architecture planning for your development projects",
    icon: Zap,
    iconBg: "bg-yellow-500",
    features: ["Architecture Planning", "Technology Selection", "Code Review", "Performance Optimization"],
  },
]

export function Services() {
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

    const element = document.getElementById("services")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive development services to bring your digital ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl p-4 mb-6`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
