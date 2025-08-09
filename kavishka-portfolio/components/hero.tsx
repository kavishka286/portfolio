"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Download, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/10 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-orange-500/5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-orange-500/8 rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-orange-500/6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Hello Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-500 text-sm font-medium">HELLO, I'M KAVISHKA</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">I'M A</h1>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-orange-500">DEVELOPER</span>
                <Code className="inline-block ml-4 h-12 w-12 lg:h-16 lg:w-16 text-orange-500" />
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about building <span className="text-orange-500">seamless digital experiences</span> that
                solve real-world problems. Crafting clean code with{" "}
                <span className="text-orange-500">modern technologies</span> and innovative solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-1">6+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Month Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-1">10+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-1">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProjects}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Profile Image Container */}
              <div className="relative w-full h-full">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-orange-500">
                  <img
                    src="/images/kavishka-profile.jpg"
                    alt="Kavishka Senavirathna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* KS Badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                KS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
